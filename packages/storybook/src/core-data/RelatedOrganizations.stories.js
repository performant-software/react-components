// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedOrganizations from '../../../core-data/src/components/RelatedOrganizations';

export default {
  title: 'Components/Core Data/RelatedOrganizations',
  component: RelatedOrganizations
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedOrganizations
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedOrganizations(baseUrl, 1, projectIds)
      )}
    />
  </CoreDataContextProvider>

);

export const EmptyList = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedOrganizations
      emptyMessage='No related organizations'
      onLoad={() => Promise.resolve()}
    />
  </CoreDataContextProvider>
);
