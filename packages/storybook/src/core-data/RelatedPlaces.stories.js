// @flow

import React from 'react';
import RelatedPlaces from '../../../core-data/src/components/RelatedPlaces';
import relatedPlaces from '../data/RelatedPlaces.json';

export default {
  title: 'Components/Core Data/RelatedPlaces',
  component: RelatedPlaces
};

export const Default = () => (
  <RelatedPlaces
    data={relatedPlaces}
  />
);
