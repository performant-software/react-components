// @flow

import React from 'react';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedMedia',
  component: RelatedMedia
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedMedia
      onLoad={(params) => PlacesService.fetchRelatedManifests('1', params)}
    />
  );
});

export const EmptyList = withCoreDataContextProvider(() => (
  <RelatedMedia
    emptyMessage='No related media'
    onLoad={() => Promise.resolve()}
  />
));
