// @flow

import { Timer } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Checkbox,
  Icon,
  Input,
  Label,
  List
} from 'semantic-ui-react';
import _ from 'underscore';
import Facet, { type Props as FacetProps } from './Facet';
import i18n from '../i18n/i18n';
import LinkButton from './LinkButton';
import { type RefinementListProps } from '../types/InstantSearch';

type Props = FacetProps & RefinementListProps & {
  defaultValue?: string,
  searchable?: boolean
};

const FacetList = ({ useRefinementList, ...props }: Props) => {
  const {
    items,
    refine,
    canToggleShowMore,
    isShowingMore,
    searchForItems,
    toggleShowMore,
  } = useRefinementList(props);

  const ref = useRef();
  const [query, setQuery] = useState('');

  /**
   * Clears the current search state.
   *
   * @type {(function(): void)|*}
   */
  const onClear = useCallback(() => {
    // Reset the query view
    setQuery('');

    // Reset the list of refinements
    searchForItems();

    // Refocus the input element
    const { current: instance } = ref;
    if (instance) {
      instance.focus();
    }
  }, []);

  /**
   * Executes the search within the list of facet values.
   *
   * @type {function(): *}
   */
  const onSearch = useCallback(() => searchForItems(query), [query, searchForItems]);

  /**
   * Sets the default value if provided.
   */
  useEffect(() => {
    if (props.defaultValue) {
      refine(props.defaultValue);
    }
  }, [props.defaultValue]);

  /**
   * Persist the facet search when a user selects or deselects items.
   */
  useEffect(() => {
    if (query) {
      searchForItems(query);
    }
  }, [items]);

  /**
   * Do not render the component if no items are present and no query has been entered.
   */
  if (_.isEmpty(items) && _.isEmpty(query)) {
    return null;
  }

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
    >
      { props.searchable && (
        <Input
          icon={query && (
            <Icon
              link
              name='times'
              onClick={onClear}
            />
          )}
          fluid
          onChange={(e, { value }) => setQuery(value)}
          onKeyDown={() => Timer.clearSearchTimer()}
          onKeyUp={() => Timer.setSearchTimer(onSearch)}
          placeholder={i18n.t('FacetList.labels.search')}
          ref={ref}
          value={query}
        />
      )}
      <List
        className='facet-list'
      >
        { _.map(items, (item, index) => (
          <List.Item
            key={index}
          >
            <Checkbox
              checked={item.isRefined}
              label={{
                children: (
                  <>
                    <span>{ item.label }</span>
                    <Label
                      circular
                      content={item.count}
                      size='small'
                    />
                  </>
                )
              }}
              onClick={() => refine(item.value)}
            />
          </List.Item>
        ))}
      </List>
      { canToggleShowMore && (
        <>
          <Icon
            name={isShowingMore ? 'angle up' : 'angle down'}
          />
          <LinkButton
            content={isShowingMore
              ? i18n.t('FacetList.buttons.showLess')
              : i18n.t('FacetList.buttons.showMore')}
            onClick={() => toggleShowMore()}
          />
        </>
      )}
    </Facet>
  );
};

export default FacetList;
