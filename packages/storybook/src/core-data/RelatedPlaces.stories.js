// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedPlaces from '../../../core-data/src/components/RelatedPlaces';

export default {
  title: 'Components/Core Data/RelatedPlaces',
  component: RelatedPlaces
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedPlaces
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedPlaces(baseUrl, '1', projectIds)
      )}
    />
  </CoreDataContextProvider>
);

export const EmptyMessage = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedPlaces
      emptyMessage='No related places'
      onLoad={() => Promise.resolve()}
    />
  </CoreDataContextProvider>
);
