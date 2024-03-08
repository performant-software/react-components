// @flow

import React from 'react';
import RelatedItemsList from '../../../core-data/src/components/RelatedItemsList';
import relatedPlaces from '../data/RelatedPlaces.json';

export default {
  title: 'Components/Core Data/RelatedItemsList',
  component: RelatedItemsList
};

export const Default = () => (
  <RelatedItemsList
    items={[{
      endpoint: 'places',
      ui_label: 'Related Places',
      data: relatedPlaces
    }]}
  />
);
