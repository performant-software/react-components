// @flow

import React, { useState } from 'react';
import Combobox from '../../../core-data/src/components/Combobox';

export default {
  title: 'Components/Core Data/Combobox',
  component: Combobox
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
  const [countries, setCountries] = useState([]);

  const onChange = (val) => {
    if (countries.includes(val)) {
      setCountries(countries.filter((c) => c !== val));
    } else {
      setCountries([...countries, val]);
    }
  };

  const onClear = () => setCountries([]);

  return (
    <div className='w-80 bg-neutral-200 flex items-center justify-center p-8'>
      <Combobox
        options={OPTIONS}
        onChange={onChange}
        onClear={onClear}
        values={countries}
      />
    </div>
  );
};
