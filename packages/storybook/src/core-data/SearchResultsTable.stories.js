// @flow

import React from 'react';
import SearchResultsTable from '../../../core-data/src/components/SearchResultsTable';
import hits from '../data/typesense/Places.json';
import InstantSearchProvider from '../components/TypesenseAdapter';

export default {
  title: 'Components/Core Data/SearchResultsTable',
  component: SearchResultsTable
};

export const Default = () => (
  <InstantSearchProvider>
    <SearchResultsTable
      columns={[
        {
          label: 'UUID',
          name: 'uuid'
        },
        {
          label: 'Name',
          name: 'name'
        },
        {
          label: 'Location',
          name: 'geometry',
          render: (item) => (item.coordinates
            ? `${item.coordinates[0]}, ${item.coordinates[1]}`
            : '')
        }
      ]}
      hits={hits}
    />
  </InstantSearchProvider>
);
