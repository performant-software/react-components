// @flow

import React from 'react';
import RelatedTaxonomies from '../../../core-data/src/components/RelatedTaxonomies';
import relatedTaxonomies from '../data/RelatedTaxonomies.json';

export default {
  title: 'Components/Core Data/RelatedTaxonomies',
  component: RelatedTaxonomies
};

export const Default = () => (
  <RelatedTaxonomies
    data={relatedTaxonomies}
  />
);
