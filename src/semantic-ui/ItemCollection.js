// @flow

import React from 'react';
import uuid from 'react-uuid';
import Items from './Items';
import './ItemCollection.css';

type Props = {
  className?: string,
  items: ?Array<any>,
  onDelete: (item: any) => void,
  onSave?: (item: any) => void,
};

/**
 * The ItemCollection component can be used to display a collection of records that live within a parent object.
 * This is especially useful when the collection is to be saved at the same time as the parent. Records will be
 * rendered as a list of items (see semantic-ui items).
 */
const ItemCollection = (props: Props) => (
  <Items
    {...props}
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
  />
);

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
  renderDeleteModal: undefined,
  renderEmptyRow: undefined
};

export default ItemCollection;
