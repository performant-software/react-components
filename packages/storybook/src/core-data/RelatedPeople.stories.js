// @flow

import React from 'react';
import CoreDataContextProvider from '../../../core-data/src/components/CoreDataContextProvider';
import PlacesService from '../../../core-data/src/services/Places';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';

export default {
  title: 'Components/Core Data/RelatedPeople',
  component: RelatedPeople
};

export const Default = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedPeople
      onLoad={(baseUrl, projectIds) => (
        PlacesService.fetchRelatedPeople(baseUrl, 1, projectIds)
      )}
    />
  </CoreDataContextProvider>
);

export const EmptyList = () => (
  <CoreDataContextProvider
    baseUrl=''
    projectIds={[]}
  >
    <RelatedPeople
      emptyMessage='No related people'
      onLoad={() => Promise.resolve()}
    />
  </CoreDataContextProvider>
);
