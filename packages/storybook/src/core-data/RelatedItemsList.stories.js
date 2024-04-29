// @flow

import React from 'react';
import RelatedItem from '../../../core-data/src/components/RelatedItem';
import RelatedItemsList from '../../../core-data/src/components/RelatedItemsList';
import RelatedList from '../../../core-data/src/components/RelatedList';

export default {
  title: 'Components/Core Data/RelatedItemsList',
  component: RelatedItemsList
};

export const Default = () => (
  <RelatedItemsList>
    <RelatedItem
      id='numbers'
      label='Numbers'
    >
      <RelatedList
        className='p-3 pt-1 pb-4'
        collectionName='items'
        onLoad={() => (
          Promise.resolve({
            items: [
              'One',
              'Two',
              'Three'
            ]
          })
        )}
        renderItem={(item) => item}
      />
    </RelatedItem>
  </RelatedItemsList>
);
