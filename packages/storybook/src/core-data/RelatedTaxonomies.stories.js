// @flow

import React from 'react';
import _ from 'underscore';
import RelatedTaxonomies from '../../../core-data/src/components/RelatedTaxonomies';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/RelatedTaxonomies',
  component: RelatedTaxonomies
};

export const Default = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedTaxonomies
      onLoad={(params) => PlacesService.fetchRelatedTaxonomies('1', params)}
    />
  );
});

export const CustomRender = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedTaxonomies
      onLoad={(params) => PlacesService.fetchRelatedTaxonomies('1', params)}
      renderItem={(item) => <p style={{ color: 'pink' }}>{item.name}</p>}
    />
  );
});

export const EmptyList = withCoreDataContextProvider(() => (
  <RelatedTaxonomies
    emptyMessage='No related taxonomies'
    onLoad={() => Promise.resolve()}
  />
));

export const Pagination = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <RelatedTaxonomies
      moreLabel='Load More'
      onLoad={(params) => (
        PlacesService
          .fetchRelatedTaxonomies('1', params)
          .then((response) => {
            _.extend(response.list, { count: 22, pages: 5 });
            return response;
          })
      )}
    />
  );
});
