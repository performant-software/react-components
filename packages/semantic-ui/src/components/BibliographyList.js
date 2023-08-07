// @flow

import { Citation } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentType
} from 'react';
import uuid from 'react-uuid';
import {
  Button,
  Grid,
  List,
  Message
} from 'semantic-ui-react';
import _ from 'underscore';
import BibliographyModal from './BibliographyModal';
import BibliographySearchInput from './BibliographySearchInput';
import i18n from '../i18n/i18n';
import SortSelector from './SortSelector';
import { SORT_DESCENDING } from '../constants/Sort';
import StyleSelector from './StyleSelector';
import Toaster from './Toaster';
import useList, { Props as ListProps } from './List';
import ZoteroTranslateContext from '../context/ZoteroTranslateContext';
import './BibliographyList.css';

type Item = {
  id?: number,
  uid?: string,
  data: any
};

type ComponentProps = {
  items: Array<Item>,
  locale: string,
  style: ?{
    name: string,
    xml: string
  }
};

const DEFAULT_ITEM_TYPE = 'book';
const LOCALE_URL = 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-US.xml';

const Sort = {
  author: 'author',
  date: 'date',
  title: 'title'
};

const SortOptions = [{
  key: Sort.title,
  value: Sort.title,
  text: i18n.t('BibliographyList.sort.title')
}, {
  key: Sort.author,
  value: Sort.author,
  text: i18n.t('BibliographyList.sort.author')
}, {
  key: Sort.date,
  value: Sort.date,
  text: i18n.t('BibliographyList.sort.date')
}];

const BibliographyListComponent: ComponentType<any> = useList((props: ComponentProps) => (
  <List
    divided
    relaxed='very'
  >
    { _.map(props.items, (item, index) => (
      <List.Item
        as={Grid}
        columns={2}
        key={index}
        padded
      >
        <List.Content
          as={Grid.Column}
          textAlign='left'
          verticalAlign='middle'
          width={14}
        >
          <Citation
            item={item}
            locale={props.locale}
            style={props.style && props.style.xml}
          />
        </List.Content>
        <List.Content
          as={Grid.Column}
          textAlign='right'
          verticalAlign='middle'
          width={2}
        >
          { _.map(props.actions, (action, actionIndex) => (
            <Button
              aria-label={action.name}
              basic
              icon={action.icon}
              key={actionIndex}
              onClick={action.onClick.bind(this, item)}
            />
          ))}
        </List.Content>
      </List.Item>
    ))}
  </List>
));

type Props = ListProps & {
  /**
   * The array of bibliography items.
   */
  items: Array<Item>,

  /**
   * Callback fired when the passed item is deleted. This function should return a Promise.
   */
  onDelete: (item: Item) => Promise<any>,

  /**
   * Callback fired when the passed item is saved. This function should return a Promise.
   */
  onSave: (item: Item) => Promise<any>,

  /**
   * URL of the Zotero translation server.
   */
  translateUrl: string
};

/**
 * This component renders a list of bibliography items in Zbib format. This component requires the URL of a running
 * [Zotero Translation Server](https://github.com/zotero/translation-server) to be passed as the `translateUrl` prop.
 */
const BibliographyList = (props: Props) => {
  const [locale, setLocale] = useState();
  const [showToaster, setShowToaster] = useState(false);
  const [style, setStyle] = useState();
  const [sort, setSort] = useState({});

  /**
   * Converts the passed item into an object with "id", "uid", and "data" keys.
   *
   * @type {function(*): {uid: string, data: *, id: *}}
   */
  const createItem = useCallback((item) => {
    const { id } = item || {};
    const { uid = uuid() } = item || {};

    // Build the data object
    const data = _.omit(item, 'id', 'uid', 'data');

    // Remove any empty creators
    _.extend(data, {
      creators: _.reject(item.creators, (creator) => !(creator.name || creator.firstName || creator.lastName))
    });

    return { id, uid, data };
  }, []);

  /**
   * Returns the sort property value for the passed item based on the selected sort.
   *
   * @type {function(*, *): *}
   */
  const getSortProperty = useCallback((item, index) => {
    let value;

    if (sort === Sort.title) {
      value = item.title;
    } else if (sort === Sort.author) {
      const author = _.first(item.creators);
      value = author?.name || `${author?.lastName}, ${author?.firstName}`;
    } else if (sort === Sort.date) {
      value = item.date;
    } else {
      value = index;
    }

    return value;
  }, []);

  /**
   * Sets the items to display in the list. This function will filter out any items marked for delete,
   * expand the "data" property into the main object, and sort the collection according the user's selection.
   */
  const items = useMemo(() => {
    // Filter the list to exclude items marked for removal and transform the items
    let newItems = _.chain(props.items)
      .filter((item) => !item._destroy)
      .map((item) => ({ ..._.omit(item, 'data'), ...item.data }))
      .value();

    // Sort the list according to the selected sort property
    newItems = _.sortBy(newItems, getSortProperty);

    // If sorting in descending order, reverse the list
    if (sort.direction === SORT_DESCENDING) {
      newItems = newItems.reverse();
    }

    return newItems;
  }, [getSortProperty, sort, props.items]);

  /**
   * Renders the style selector and sort components.
   *
   * @type {unknown}
   */
  const renderListHeader = useCallback(() => (
    <>
      <StyleSelector
        onChange={(name, xml) => setStyle({ name, xml })}
      />
      <SortSelector
        direction={sort.direction}
        onChange={(value) => setSort(value)}
        options={SortOptions}
        text={sort.text}
        value={sort.value}
      />
    </>
  ), [sort, style]);

  /**
   * Deletes the passed item.
   *
   * @type {function(*): Promise<unknown>}
   */
  const onDelete = useCallback((item) => Promise.resolve(
    props.onDelete(createItem(item))
  ), [createItem, props.onDelete]);

  /**
   * Saves the passed item.
   *
   * @type {function(*): Promise<unknown>}
   */
  const onSave = useCallback((item) => Promise.resolve(
    props.onSave(createItem(item))
  ), [createItem, props.onSave]);

  /**
   * Loads the locale XML.
   */
  useEffect(() => {
    fetch(LOCALE_URL)
      .then((resp) => resp.text())
      .then((text) => setLocale(text));
  }, []);

  return (
    <ZoteroTranslateContext.Provider
      value={{ translateUrl: props.translateUrl }}
    >
      <div>
        <BibliographySearchInput
          onError={() => setShowToaster(true)}
          onFind={(results) => _.map(results, onSave)}
        />
        <BibliographyListComponent
          {...props}
          actions={[{
            name: 'edit'
          }, {
            name: 'delete'
          }]}
          className='bibliography-list'
          items={items}
          locale={locale}
          modal={{
            component: BibliographyModal,
            props: {
              defaults: {
                itemType: DEFAULT_ITEM_TYPE
              }
            }
          }}
          onDelete={onDelete}
          onSave={onSave}
          renderListHeader={renderListHeader}
          style={style}
        />
        { showToaster && (
          <Toaster
            onDismiss={() => setShowToaster(false)}
            timeout={2500}
            type={Toaster.MessageTypes.warning}
          >
            <Message.Header
              content={i18n.t('Common.messages.noResults')}
            />
          </Toaster>
        )}
      </div>
    </ZoteroTranslateContext.Provider>
  );
};

export default BibliographyList;
