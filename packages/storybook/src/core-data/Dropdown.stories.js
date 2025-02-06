// @flow

import React, { useState } from 'react';
import Dropdown from '../../../core-data/src/components/Dropdown';

export default {
  title: 'Components/Core Data/Dropdown',
  component: Dropdown
};

const OPTIONS = [
  {
    label: 'United States',
    value: 'united_states'
  },
  {
    label: 'United Kingdom',
    value: 'united_kingdom'
  },
  {
    label: 'France',
    value: 'france'
  },
  {
    label: 'Mexico',
    value: 'mexico'
  },
  {
    label: 'Canada',
    value: 'canada'
  }
];

export const Default = () => {
  const [country, setCountry] = useState();

  return (
    <div className='w-60 h-40 bg-neutral-200 flex items-center justify-center p-8'>
      <Dropdown
        options={OPTIONS}
        onChange={(val) => setCountry(val)}
        value={country}
      />
    </div>
  );
};

export const WithPlaceholder = () => {
  const [country, setCountry] = useState();

  return (
    <div className='w-60 h-40 bg-neutral-200 flex items-center justify-center p-8'>
      <Dropdown
        options={OPTIONS}
        onChange={(val) => setCountry(val)}
        placeholder='Select Country'
        value={country}
      />
    </div>
  );
};

export const WithLabel = () => {
  const [country, setCountry] = useState();

  return (
    <div className='w-60 h-40 bg-neutral-200 flex items-center justify-center p-8'>
      <Dropdown
        options={OPTIONS}
        label='Country'
        onChange={(val) => setCountry(val)}
        placeholder='Select Country'
        value={country}
      />
    </div>
  );
};

export const WithIconAndLabel = () => {
  const [country, setCountry] = useState();

  return (
    <div className='w-60 h-40 bg-neutral-200 flex items-center justify-center p-8'>
      <Dropdown
        options={OPTIONS}
        icon='location'
        label='Country'
        onChange={(val) => setCountry(val)}
        placeholder='Select Country'
        value={country}
      />
    </div>
  );
};
