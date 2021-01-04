// @flow

import React, {
  useEffect,
  useState
} from 'react';
import uuid from 'react-uuid';
import InfiniteScroll from '../common/InfiniteScroll';
import Items from './Items';
import './ItemCollection.css';

type Props = {
  className?: string,
  items: ?Array<any>,
  onDelete: (item: any) => void,
  onSave?: (item: any) => void,
  perPage: number,
  scrollOffset: number
};

/**
 * The ItemCollection component can be used to display a collection of records that live within a parent object.
 * This is especially useful when the collection is to be saved at the same time as the parent. Records will be
 * rendered as a list of items (see semantic-ui items).
 */
const ItemCollection = (props: Props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  /**
   * Set the page to "1" when the component mounts.
   */
  useEffect(() => {
    setPage(1);
  }, []);

  /**
   * Append to the new page of items to the list.
   */
  useEffect(() => {
    const endIndex = page * props.perPage;
    const startIndex = endIndex - props.perPage;
    const nextItems = (props.items && props.items.slice(startIndex, endIndex)) || [];

    setItems([
      ...items,
      ...nextItems
    ]);
  }, [page, props.perPage, props.items]);

  return (
    <Items
      {...props}
      items={items}
      className={`item-collection ${props.className ? props.className : ''}`}
      onDelete={(item) => {
        props.onDelete(item);
        return Promise.resolve();
      }}
      onSave={(item) => {
        const uid = item.uid ? item.uid : uuid();

        if (props.onSave) {
          props.onSave({ ...item, uid });
        }

        return Promise.resolve();
      }}
      renderList={(list) => (
        <InfiniteScroll
          offset={props.scrollOffset}
          onBottomReached={() => setPage((prevPage) => prevPage + 1)}
        >
          { list }
        </InfiniteScroll>
      )}
    />
  );
};

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
