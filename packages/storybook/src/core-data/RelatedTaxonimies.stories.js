// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedTaxonomies from '../../../core-data/src/components/RelatedTaxonomies';

export default {
  title: 'Components/Core Data/RelatedTaxonomies',
  component: RelatedTaxonomies
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedTaxonomies
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedTaxonomies(baseUrl, 1, projectIds)
      )}
    />
  </CoreDataContextProvider>
);

export const EmptyList = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedTaxonomies
      emptyMessage='No related taxonomies'
      onLoad={() => Promise.resolve()}
    />
  </CoreDataContextProvider>
);
