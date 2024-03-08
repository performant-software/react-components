// @flow

import React from 'react';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';
import relatedPeople from '../data/RelatedPeople.json';

export default {
  title: 'Components/Core Data/RelatedPeople',
  component: RelatedPeople
};

export const Default = () => (
  <RelatedPeople
    data={relatedPeople}
  />
);
