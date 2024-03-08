// @flow

import React from 'react';
import RelatedList from '../../../core-data/src/components/RelatedList';

export default {
  title: 'Components/Core Data/RelatedList',
  component: RelatedList
};

export const Default = () => (
  <RelatedList
    data={{
      items: [
        'One',
        'Two',
        'Three'
      ]
    }}
    renderItem={(item) => item}
  />
);

export const EmptyList = () => (
  <RelatedList
    data={{
      items: []
    }}
    emptyMessage='This list is empty'
    renderItem={(item) => item}
  />
);
