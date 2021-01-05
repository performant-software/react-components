// @flow

import React, { Component } from 'react';
import uuid from 'react-uuid';
import InfiniteScroll from '../common/InfiniteScroll';
import Items from './Items';
import './ItemCollection.css';

type Props = {
  className?: string,
  context: {
    current: HTMLElement
  },
  items: Array<any>,
  onDelete: (item: any) => void,
  onSave?: (item: any) => void,
  perPage: number,
  scrollOffset: number
};

type State = {
  items: Array<any>,
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
      items: [],
      page: 1
    };
  }

  /**
   * Loads the data.
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Resets the page and the list of items.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (prevProps.items !== this.props.items) {
      this.setState({ page: 1, items: [] }, this.fetchData.bind(this));
    }
  }

  /**
   * Loads the next page of data into the state.
   */
  fetchData() {
    const endIndex = this.state.page * this.props.perPage;
    const startIndex = endIndex - this.props.perPage;
    const items = (this.props.items && this.props.items.slice(startIndex, endIndex)) || [];

    this.setState((state) => ({
      items: [
        ...state.items,
        ...items
      ]
    }));
  }

  /**
   * Increments the page number and fetches the data.
   */
  onBottomReached() {
    this.setState((state) => ({ page: state.page + 1 }), this.fetchData.bind(this));
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
          items={this.state.items}
          className={`item-collection ${this.props.className ? this.props.className : ''}`}
          onDelete={this.onDelete.bind(this)}
          onSave={this.onSave.bind(this)}
        />
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
