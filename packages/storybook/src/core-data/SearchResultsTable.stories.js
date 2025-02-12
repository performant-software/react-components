// @flow

import React, { useState } from 'react';
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

export const Default = () => {
  const [page, setPage] = useState(1);
  const [hitsPerPage, setHitsPerPage] = useState(10);

  return (
    <div className='h-80'>
      <SearchResultsTable
        columns={COLUMNS}
        hits={LOTS_OF_HITS}
        hitsPerPage={hitsPerPage}
        onChangeHitsPerPage={setHitsPerPage}
        onChangePage={setPage}
        page={page}
      />
    </div>
  );
};

export const Narrow = () => {
  const [page, setPage] = useState(1);
  const [hitsPerPage, setHitsPerPage] = useState(10);

  return (
    <div className='h-80 w-[400px]'>
      <SearchResultsTable
        columns={COLUMNS}
        hits={LOTS_OF_HITS}
        hitsPerPage={hitsPerPage}
        onChangeHitsPerPage={setHitsPerPage}
        onChangePage={setPage}
        page={page}
      />
    </div>
  );
};

export const ReallyBig = () => {
  const [page, setPage] = useState(1);
  const [hitsPerPage, setHitsPerPage] = useState(10);

  return (
    <div className='h-[80vh] w-[1000px]'>
      <SearchResultsTable
        columns={COLUMNS}
        hits={LOTS_OF_HITS}
        hitsPerPage={hitsPerPage}
        onChangeHitsPerPage={setHitsPerPage}
        onChangePage={setPage}
        page={page}
      />
    </div>
  );
};
