// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Element
} from 'react';
import {
  Button,
  Card,
  Header,
  Icon,
  Image,
  Segment,
  Transition
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './SelectizeImageHeader.css';

type Props = {
  collapsable?: boolean,
  onItemClick: (item: any) => void,
  perPage?: number,
  renderDescription?: (item: any) => Element<any> | string,
  renderExtra?: (item: any) => Element<any> | string,
  renderHeader?: (item: any) => Element<any> | string,
  renderImage?: (item: any) => Element<any> | string,
  renderMeta?: (item: any) => Element<any> | string,
  selectedItem: any,
  selectedItems: Array<any>
};

type CardProps = {
  onClick: () => void,
  onDelete: () => void,
  description?: Element<any> | string,
  extra?: Element<any> | string,
  header?: Element<any> | string,
  image?: Element<any> | string,
  meta?: Element<any> | string,
  selected: boolean
};

const DEFAULT_PER_PAGE = 5;

const SelectizeCard = (props: CardProps) => (
  <Card
    raised={props.selected}
    link
    onClick={props.onClick}
  >
    { props.image && _.isString(props.image) && (
      <Image
        size='small'
        src={props.image}
      />
    )}
    { !!props.image && !_.isString(props.image) && props.image }
    { !props.image && (
      <Segment
        placeholder
      >
        <Icon
          name='image'
          size='large'
        />
      </Segment>
    )}
    <Card.Content>
      { props.header && (
        <Card.Header>
          <Header
            as='h6'
            content={props.header}
          />
        </Card.Header>
      )}
      { props.meta && (
        <Card.Meta
          content={props.meta}
        />
      )}
      { props.description && (
        <Card.Description
          content={props.description}
        />
      )}
    </Card.Content>
    { props.extra && (
      <Card.Content
        extra
      >
        { props.extra }
      </Card.Content>
    )}
    { props.selected && (
      <Card.Content
        extra
      >
        <Button
          basic
          circular
          compact
          icon='times'
          onClick={props.onDelete}
        />
      </Card.Content>
    )}
  </Card>
);

SelectizeCard.defaultProps = {
  header: undefined,
  image: undefined,
  meta: undefined,
  renderExtra: undefined
};

const SelectizeImageHeader = (props: Props) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  /**
   * Sets the items for the current page.
   *
   * @type {null}
   */
  const items = useMemo(() => {
    let records = null;

    if (page && props.selectedItems && props.selectedItems.length) {
      const startIndex = (page - 1) * (props.perPage || DEFAULT_PER_PAGE);
      const endIndex = startIndex + (props.perPage || DEFAULT_PER_PAGE);

      records = props.selectedItems.slice(startIndex, endIndex);
    }

    return records;
  }, [page, props.perPage, props.selectedItems]);

  /**
   * Sets the pagination label.
   *
   * @type {string}
   */
  const pagination = useMemo(() => {
    const startIndex = (page - 1) * (props.perPage || DEFAULT_PER_PAGE);
    const endIndex = startIndex + (props.perPage || DEFAULT_PER_PAGE);
    const total = props.selectedItems.length;

    return `${startIndex + 1} - ${Math.min(endIndex, total)} of ${total}`;
  }, [page, props.perPage, props.selectedItems]);

  /**
   * Changes the current page number. If the next page is invalid, we move to the first page or last page.
   *
   * @type {(function(*): void)|*}
   */
  const onPageChange = useCallback((increment) => {
    let nextPage = page + increment;

    if (nextPage < 1) {
      nextPage = pages;
    } else if (nextPage > pages) {
      nextPage = 1;
    }

    setPage(nextPage);
  }, [page, pages]);

  /**
   * Set the number of pages when the perPage or selectedItems props change.
   */
  useEffect(() => {
    if (props.perPage && props.selectedItems) {
      setPages(Math.ceil(props.selectedItems.length / props.perPage));
    }
  }, [props.perPage, props.selectedItems]);

  /**
   * If we're removing the last item on the page, decrement the page by 1.
   */
  useEffect(() => {
    if (!(items && items.length) && props.selectedItems && props.selectedItems.length && page > 1) {
      setPage(page - 1);
    }
  }, [items, page, props.selectedItems]);

  if (_.isEmpty(items)) {
    return null;
  }

  return (
    <Segment
      className='selectize-image-header'
    >
      <Transition
        visible={!collapsed}
      >
        <div>
          <div
            className='container'
          >
            <Button
              basic
              circular
              disabled={pages <= 1}
              icon='arrow left'
              onClick={onPageChange.bind(this, -1)}
            />
            <Card.Group
              itemsPerRow={props.perPage}
            >
              { _.map(items, (item) => (
                <SelectizeCard
                  description={props.renderDescription && props.renderDescription(item)}
                  extra={props.renderExtra && props.renderExtra(item)}
                  header={props.renderHeader && props.renderHeader(item)}
                  image={props.renderImage && props.renderImage(item)}
                  meta={props.renderMeta && props.renderMeta(item)}
                  key={item.id}
                  onClick={() => (
                    props.selectedItem === item
                      ? props.onItemClick(null)
                      : props.onItemClick(item)
                  )}
                  onDelete={() => props.onItemClick(item)}
                  selected={item === props.selectedItem}
                />
              ))}
            </Card.Group>
            <Button
              basic
              circular
              disabled={pages <= 1}
              icon='arrow right'
              onClick={onPageChange.bind(this, 1)}
            />
          </div>
        </div>
      </Transition>
      <div
        className='bottom-container'
      >
        <div />
        <div>{ pagination }</div>
        <div>
          { props.collapsable && (
            <Button
              as='a'
              basic
              circular
              className='link'
              compact
              content={collapsed ? i18n.t('Common.buttons.show') : i18n.t('Common.buttons.hide')}
              onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
            />
          )}
        </div>
      </div>
    </Segment>
  );
};

SelectizeImageHeader.defaultProps = {
  collapsable: true,
  onItemClick: () => {},
  perPage: DEFAULT_PER_PAGE,
  renderExtra: undefined
};

export default SelectizeImageHeader;
