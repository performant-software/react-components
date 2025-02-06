// @flow

import React from 'react';
import SearchResultsTable from '../../../core-data/src/components/SearchResultsTable';
import hits from '../data/typesense/Places.json';
import InstantSearchProvider from '../components/InstantSearchProvider';

export default {
  title: 'Components/Core Data/SearchResultsTable',
  component: SearchResultsTable
};

export const Default = () => (
  <InstantSearchProvider>
    <div className='h-80'>
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
    </div>
  </InstantSearchProvider>
);

export const Narrow = () => (
  <InstantSearchProvider>
    <div className='h-80 w-[400px]'>
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
    </div>
  </InstantSearchProvider>
);

export const ReallyBig = () => (
  <InstantSearchProvider>
    <div className='h-[80vh] w-[1000px]'>
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
    </div>
  </InstantSearchProvider>
);