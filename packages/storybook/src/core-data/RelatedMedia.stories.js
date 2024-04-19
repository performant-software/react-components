// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';

export default {
  title: 'Components/Core Data/RelatedMedia',
  component: RelatedMedia
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedMedia
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedManifests(baseUrl, 1, projectIds)
      )}
    />
  </CoreDataContextProvider>
);

export const EmptyList = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedMedia
      emptyMessage='No related media'
      onLoad={() => Promise.resolve()}
    />
  </CoreDataContextProvider>
);
