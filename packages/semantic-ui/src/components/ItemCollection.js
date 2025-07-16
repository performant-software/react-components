// @flow

import { InfiniteScroll } from '@performant-software/shared-components';
import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import _ from 'underscore';
import { v4 as uuid } from 'uuid';
import i18n from '../i18n/i18n';
import Items, { type Props as ItemsProps } from './Items';
import './ItemCollection.css';

type Props = ItemsProps & {
  /**
   * Appends the passed <code>className</code> and passes it to the <code>Items</code> component.
   */
  className?: string,

  /**
   * The DOM element responsible for infinite scrolling. If no context is provided, the document <code>body</code>
   * will be assumed.
   */
  context: {
    current: HTMLElement
  },

  /**
   * If <code>true</code>, the list will display a loading indicator.
   */
  loading?: boolean,

  /**
   * Callback fired when the bottom of the scroll container is reached.
   */
  onBottomReached?: (page: number) => void,

  /**
   * Callback fired when the delete action is clicked.
   */
  onDelete?: (item: any) => void,

  /**
   * Callback fired when a new record is added to the list.
   */
  onSave?: (item: any) => void,

  /**
   * The number of records to display on a single page.
   */
  perPage?: number,

  /**
   * The number of pixels from the bottom of the scroll container the <code>onBottomReached</code> callback
   * should fire.
   */
  scrollOffset?: number
};

type State = {
  page: number
};

/**
 * An <code>ItemCollection</code> component can be used to render a list of records stored on an object in memory. This
 * component is responsible for handling infinite scroll and rendering the <code>Items</code> component, which handles
 * the presentation.
 */
class ItemCollection extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new ItemCollection component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      page: 1
    };
  }

  /**
   * Returns the concatenated class names.
   *
   * @returns {string}
   */
  getClassName() {
    const classNames = ['item-collection'];

    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return classNames.join(' ');
  }

  /**
   * Returns the list of items to render based on the current page.
   *
   * @returns {Array<T>|*[]}
   */
  getItems(): Array<any> {
    const endIndex = this.state.page * this.props.perPage;
    const items = (this.props.items && this.props.items.slice(0, endIndex)) || [];
    return _.filter(items, (item) => !item._destroy);
  }

  /**
   * Increments the page number and fetches the data.
   */
  onBottomReached() {
    if (this.props.loading) {
      return;
    }

    this.setState((state) => ({ page: state.page + 1 }), () => {
      if (this.props.onBottomReached) {
        this.props.onBottomReached(this.state.page);
      }
    });
  }

  /**
   * Calls the onDelete prop and returns a promise.
   *
   * @param item
   *
   * @returns {Promise<unknown>}
   */
  onDelete(item: any) {
    this.props.onDelete(item);
    return Promise.resolve();
  }

  /**
   * Calls the onSave prop and returns a promise.
   *
   * @param item
   *
   * @returns {Promise<unknown>}
   */
  onSave(item: any) {
    if (this.props.onSave) {
      const uid = item.uid ? item.uid : uuid();
      this.props.onSave({ ...item, uid });
    }

    return Promise.resolve();
  }

  /**
   * Renders the ItemCollection component.
   *
   * @returns {*}
   */
  render() {
    return (
      <InfiniteScroll
        context={this.props.context}
        offset={this.props.scrollOffset}
        onBottomReached={this.onBottomReached.bind(this)}
      >
        <Items
          {...this.props}
          items={this.getItems()}
          className={this.getClassName()}
          onDelete={this.onDelete.bind(this)}
          onSave={this.onSave.bind(this)}
        >
          <Loader
            active={this.props.loading}
            content={i18n.t('Common.messages.loading')}
          />
        </Items>
      </InfiniteScroll>
    );
  }
}

ItemCollection.defaultProps = {
  addButton: {
    location: 'top'
  },
  buttons: [],
  className: '',
  configurable: true,
  modal: undefined,
  onCopy: undefined,
  onDrag: undefined,
  onSave: () => {},
  perPage: Number.MAX_SAFE_INTEGER,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  scrollOffset: 0
};

export default ItemCollection;
