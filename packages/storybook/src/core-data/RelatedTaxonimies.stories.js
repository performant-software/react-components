// @flow

import React from 'react';
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

export const EmptyList = withCoreDataContextProvider(() => (
  <RelatedTaxonomies
    emptyMessage='No related taxonomies'
    onLoad={() => Promise.resolve()}
  />
));
