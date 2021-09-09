// @flow

import React, { Component } from 'react';
import uuid from 'react-uuid';
import { Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import InfiniteScroll from '../common/InfiniteScroll';
import Items from './Items';
import './ItemCollection.css';

type Props = {
  className?: string,
  context: {
    current: HTMLElement
  },
  items: Array<any>,
  loading?: boolean,
  onBottomReached?: (page: number) => void,
  onDelete: (item: any) => void,
  onSave?: (item: any) => void,
  perPage: number,
  scrollOffset: number
};

type State = {
  page: number
};

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
    return (this.props.items && this.props.items.slice(0, endIndex)) || [];
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
