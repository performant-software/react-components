// @flow

import React from 'react';
import _ from 'underscore';
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

export const CustomRender = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedPlaces
      onLoad={(params) => PlacesService.fetchRelatedPlaces('1', params)}
      renderItem={(item) => (
        <p>
          {`I've ${Math.random() < 0.5 ? 'never' : ''} been to ${item.name}.`}
        </p>
      )}
    />
  );
});

export const EmptyMessage = withCoreDataContextProvider(() => (
  <RelatedPlaces
    emptyMessage='No related places'
    onLoad={() => Promise.resolve()}
  />
));

export const Pagination = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedPlaces
      moreLabel='Load More'
      onLoad={(params) => (
        PlacesService
          .fetchRelatedPlaces('1', params)
          .then((response) => {
            _.extend(response.list, { count: 22, pages: 5 });
            return response;
          })
      )}
    />
  );
});
