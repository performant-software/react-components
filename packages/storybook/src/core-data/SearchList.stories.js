// @flow

import { action } from 'storybook/actions';
import React, { useEffect, useState } from 'react';
import SearchList from '../../../core-data/src/components/SearchList';
import data from '../data/typesense/Places.json';
import { shuffle } from '../utils/Array';

const LOTS_OF_DATA = shuffle(new Array(10).fill(data).flat());

const LOTS_AND_LOTS_OF_DATA = shuffle(new Array(250).fill(data).flat());

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
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA}
      itemTitle='name'
    />
  </div>
);

export const WithTags = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      tags={[
        {
          attribute: 'type',
          primary: true
        }
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
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA}
      itemTitle={(item) => `This record's name is "${item.name}"`}
    />
  </div>
);

export const OneResult = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA.slice(0, 1)}
      itemTitle='name'
    />
  </div>
);

export const NoAttributes = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      items={LOTS_OF_DATA}
      itemTitle='name'
    />
  </div>
);

export const EventHandlers = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA}
      itemTitle='name'
      onItemClick={action('click')}
      onItemPointerEnter={action('onPointerEnter')}
      onItemPointerLeave={action('onPointerLeave')}
    />
  </div>
);

export const CustomStyles = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      className='bg-red-100 border-2 border-red-900 rounded-md'
      items={LOTS_OF_DATA}
      itemTitle='name'
    />
  </div>
);

export const ControlledHighlight = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA}
      itemTitle='name'
      isHighlight={(item) => item.id % 2 === 0}
    />
  </div>
);

export const ControlledHighlightWithOnClick = () => (
  <div className='h-[600px] w-[360px]'>
    <SearchList
      attributes={[
        {
          label: 'UUID',
          name: 'uuid'
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
        }
      ]}
      items={LOTS_OF_DATA}
      itemTitle='name'
      isHighlight={(item) => item.id % 2 === 0}
      onItemClick={action('click')}
    />
  </div>
);

export const HugeAmountOfData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => setItems(LOTS_AND_LOTS_OF_DATA), 500);
  }, []);

  return (
    <div className='h-[600px] w-[360px]'>
      <SearchList
        attributes={[
          {
            label: 'UUID',
            name: 'uuid'
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
          }
        ]}
        items={items}
        itemTitle='name'
        onItemClick={action('click')}
      />
    </div>
  );
};
