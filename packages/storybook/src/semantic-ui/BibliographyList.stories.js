// @flow

import React, { useCallback, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import BibliographyList from '../../../semantic-ui/src/components/BibliographyList';

export default {
  title: 'Components/Semantic UI/BibliographyList',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [items, setItems] = useState([{
    id: 1,
    uid: 'A',
    data: {
      itemType: 'book',
      title: 'First Test',
      creators: [{
        creatorType: 'author',
        nameType: 1,
        firstName: 'Author',
        lastName: 'Test'
      }]
    }
  }, {
    id: 2,
    uid: 'B',
    data: {
      itemType: 'book',
      title: 'Second test'
    }
  }]);

  /**
   * Deletes the passed item.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback((item) => setItems((prevItems) => _.filter(prevItems, (i) => i.uid !== item.uid)), []);

  /**
   * Saves the passed item. If the item already exists in the list, the item is updated.
   *
   * @type {(function(*): void)|*}
   */
  const onSave = useCallback((item) => {
    const a = _.findWhere(items, { uid: item.uid });
    if (a) {
      setItems((prevItems) => _.map(prevItems, (i) => (i === a ? item : i)));
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }
  }, [items]);

  return (
    <BibliographyList
      items={items}
      onDelete={onDelete}
      onSave={onSave}
      translateUrl='/translate'
    />
  );
};
