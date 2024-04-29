// @flow

import React from 'react';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedPeople',
  component: RelatedPeople
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedPeople
      onLoad={(params) => (
        PlacesService.fetchRelatedPeople('1', params)
      )}
    />
  );
});

export const Horizontal = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedPeople
      itemsPerRow={2}
      onLoad={(params) => PlacesService.fetchRelatedPeople('1', params)}
    />
  );
});

export const EmptyList = withCoreDataContextProvider(() => (
  <RelatedPeople
    emptyMessage='No related people'
    onLoad={() => Promise.resolve()}
  />
));
