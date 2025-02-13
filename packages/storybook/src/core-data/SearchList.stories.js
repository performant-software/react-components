// @flow

import React from 'react';
import SearchList from '../../../core-data/src/components/SearchList';
import data from '../data/typesense/Places.json';

const LOTS_OF_DATA = [
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data
];

LOTS_OF_DATA[0].name = "I'm a really long name to showcase how this component handles really long names.";

export default {
  title: 'Components/Core Data/SearchList',
  component: SearchList
};

export const Default = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid',
        },
        {
          label: 'Record ID',
          name: 'record_id',
          icon: 'person'
        },
        {
          label: 'Location',
          name: 'geometry',
          icon: 'location',
          render: (item) => (item.coordinates
            ? `${item.coordinates[0]}, ${item.coordinates[1]}`
            : '')
        },
      ]}
      items={LOTS_OF_DATA}
      itemTitle='name'
    />
  </div>
);

export const TitleCallback = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid',
        },
        {
          label: 'Record ID',
          name: 'record_id',
          icon: 'person'
        },
        {
          label: 'Location',
          name: 'geometry',
          icon: 'location',
          render: (item) => (item.coordinates
            ? `${item.coordinates[0]}, ${item.coordinates[1]}`
            : '')
        },
      ]}
      items={LOTS_OF_DATA}
      itemTitle={(item) => `This record's name is "${item.name}"`}
    />
  </div>
);
