// @flow

import React, { useCallback, useState } from 'react';
import _ from 'underscore';
import UserDefinedFieldsEmbeddedList from '../../../user-defined-fields/src/components/UserDefinedFieldsEmbeddedList';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/User Defined Fields/UserDefinedFieldsEmbeddedList'
};

export const Default = useDragDrop(() => {
  const [items, setItems] = useState([]);

  /**
   * Removes the passed item from the list.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback((item) => setItems((prevItems) => _.filter(prevItems, (i) => i !== item)), []);

  /**
   * Adds the passed item to the list.
   *
   * @type {function(*): void}
   */
  const onSave = useCallback((item) => setItems((prevItems) => [...prevItems, item]), []);

  return (
    <UserDefinedFieldsEmbeddedList
      items={items}
      onDelete={onDelete}
      onSave={onSave}
    />
  );
});

export const HiddenTableSelector = useDragDrop(() => {
  const [items, setItems] = useState([]);

  /**
   * Removes the passed item from the list.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback((item) => setItems((prevItems) => _.filter(prevItems, (i) => i !== item)), []);

  /**
   * Adds the passed item to the list.
   *
   * @type {function(*): void}
   */
  const onSave = useCallback((item) => setItems((prevItems) => [...prevItems, item]), []);

  return (
    <UserDefinedFieldsEmbeddedList
      items={items}
      modal={{
        defaults: {
          table_name: 'people'
        },
        props: {
          hideTable: true
        }
      }}
      onDelete={onDelete}
      onSave={onSave}
    />
  );
});

export const CustomAddButton = useDragDrop(() => {
  const [items, setItems] = useState([]);

  /**
   * Removes the passed item from the list.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback((item) => setItems((prevItems) => _.filter(prevItems, (i) => i !== item)), []);

  /**
   * Adds the passed item to the list.
   *
   * @type {function(*): void}
   */
  const onSave = useCallback((item) => setItems((prevItems) => [...prevItems, item]), []);

  return (
    <UserDefinedFieldsEmbeddedList
      addButton={{
        color: 'purple',
        location: 'top'
      }}
      items={items}
      onDelete={onDelete}
      onSave={onSave}
    />
  );
});
