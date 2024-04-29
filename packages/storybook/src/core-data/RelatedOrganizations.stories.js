// @flow

import React from 'react';
import RelatedOrganizations from '../../../core-data/src/components/RelatedOrganizations';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedOrganizations',
  component: RelatedOrganizations
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedOrganizations
      onLoad={(params) => PlacesService.fetchRelatedOrganizations('1', params)}
    />
  );
});

export const EmptyList = withCoreDataContextProvider(() => (
  <RelatedOrganizations
    emptyMessage='No related organizations'
    onLoad={() => Promise.resolve()}
  />
));
