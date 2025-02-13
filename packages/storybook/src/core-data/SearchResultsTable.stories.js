// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import SearchResultsTable from '../../../core-data/src/components/SearchResultsTable';
import hits from '../data/typesense/Places.json';
import { shuffle } from '../utils/Array';

const LOTS_OF_HITS = shuffle([
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
  ...hits,
]);

export default {
  title: 'Components/Core Data/SearchResultsTable',
  component: SearchResultsTable
};

const COLUMNS = [
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
];

export const Default = () => (
  <div className='h-80'>
    <SearchResultsTable
      columns={COLUMNS}
      hits={LOTS_OF_HITS}
    />
  </div>
);

export const Narrow = () => (
  <div className='h-80 w-[400px]'>
    <SearchResultsTable
      columns={COLUMNS}
      hits={LOTS_OF_HITS}
    />
  </div>
);

export const ReallyBig = () => (
  <div className='h-[80vh] w-[1000px]'>
    <SearchResultsTable
      columns={COLUMNS}
      hits={LOTS_OF_HITS}
    />
  </div>
);

export const EventHandlers = () => (
  <div className='h-[400px] w-[1000px]'>
    <SearchResultsTable
      columns={COLUMNS}
      hits={LOTS_OF_HITS}
      onRowClick={action('click')}
      onRowMouseEnter={action('mouseEnter')}
      onRowMouseLeave={action('mouseLeave')}
    />
  </div>
);
