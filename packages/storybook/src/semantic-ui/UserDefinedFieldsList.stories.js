// @flow

import React, { useCallback, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import UserDefinedFieldsList from '../../../semantic-ui/src/components/UserDefinedFieldsList';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/UserDefinedFieldsList',
  decorators: [withA11y, withKnobs]
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
    <UserDefinedFieldsList
      items={items}
      onDelete={onDelete}
      onSave={onSave}
    />
  );
});
