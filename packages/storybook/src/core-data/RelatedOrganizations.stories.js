// @flow

import React from 'react';
import RelatedOrganizations from '../../../core-data/src/components/RelatedOrganizations';
import relatedOrganizations from '../data/RelatedOrganizations.json';

export default {
  title: 'Components/Core Data/RelatedOrganizations',
  component: RelatedOrganizations
};

export const Default = () => (
  <RelatedOrganizations
    data={relatedOrganizations}
  />
);

export const EmptyList = () => (
  <RelatedOrganizations
    data={[]}
  />
);
