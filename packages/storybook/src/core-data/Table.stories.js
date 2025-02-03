// @flow

import React from 'react';
import Table from '../../../core-data/src/components/Table';
import hits from '../data/typesense/Places.json';

export default {
  title: 'Components/Core Data/Table',
  component: Table
};

export const Default = () => (
  <Table
    columns={[
      {
        label: 'Name',
        name: 'name'
      },
      {
        label: 'Subject',
        name: 'eyJhbGciOiJub25lIn0.eyJ1dWlkIjoiODYxMWQyNjEtODgyNi00OTQ4LWE4YzgtODViZjY5NWRlOWNjIiwibGFiZWwiOiJTdWJqZWN0IiwiZmFjZXQiOmZhbHNlfQ.',
      },
      {
        label: 'Item URI',
        name: 'eyJhbGciOiJub25lIn0.eyJ1dWlkIjoiODAyYjdjNjgtNGYyZi00NmNmLWI3MWYtMWJiYjVlY2E5ZDE0IiwibGFiZWwiOiJJdGVtIFVSSSIsImZhY2V0IjpmYWxzZX0.',
      },
      {
        label: 'Location',
        name: 'geometry',
        render: (item) => `${item.geometry.coordinates[0]}, ${item.geometry.coordinates[1]}`
      }
    ]}
    hits={hits}
  />
);
