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
    <div className='w-60'>
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
    <div className='w-60'>
      <Dropdown
        options={OPTIONS}
        onChange={(val) => setCountry(val)}
        placeholder='Select Country'
        value={country}
      />
    </div>
  );
};
