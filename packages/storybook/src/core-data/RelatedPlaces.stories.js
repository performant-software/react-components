// @flow

import React from 'react';
import RelatedPlaces from '../../../core-data/src/components/RelatedPlaces';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedPlaces',
  component: RelatedPlaces
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedPlaces
      onLoad={(params) => PlacesService.fetchRelatedPlaces('1', params)}
    />
  );
});

export const EmptyMessage = withCoreDataContextProvider(() => (
  <RelatedPlaces
    emptyMessage='No related places'
    onLoad={() => Promise.resolve()}
  />
));
