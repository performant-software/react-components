// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import RelatedList from '../../../core-data/src/components/RelatedList';

export default {
  title: 'Components/Core Data/RelatedList',
  component: RelatedList
};

export const Default = () => (
  <RelatedList
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
);

export const Click = () => (
  <RelatedList
    collectionName='items'
    onClick={action('click')}
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
);

export const EmptyList = () => (
  <RelatedList
    onLoad={() => Promise.resolve()}
    emptyMessage='This list is empty'
    renderItem={(item) => item}
  />
);
