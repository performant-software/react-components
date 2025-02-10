// @flow

import React, { useState } from 'react';
import Combobox from '../../../core-data/src/components/Combobox';

export default {
  title: 'Components/Core Data/Combobox',
  component: Combobox
};

const OPTIONS = [
  {
    label: 'USA',
    value: 'usa'
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
  },
  {
    label: 'Brazil',
    value: 'brazil'
  },
  {
    label: 'Spain',
    value: 'spain'
  },
  {
    label: 'Andorra',
    value: 'andorra'
  },
  {
    label: 'Earth',
    value: 'earth'
  }
];

export const Default = () => {
  const [values, setValues] = useState([]);

  const onChange = (val) => {
    if (values.includes(val)) {
      setValues(values.filter((c) => c !== val));
    } else {
      setValues([...values, val]);
    }
  };

  const onClear = () => setValues([]);

  const onSearch = (query: string) => {
    console.log(query);
  };

  return (
    <div className='w-80 bg-neutral-200 flex items-center justify-center p-8'>
      <Combobox
        options={OPTIONS}
        onChange={onChange}
        onClear={onClear}
        onSearch={onSearch}
        icon='location'
        label='Countries'
        placeholder='Select countries'
        values={values}
      />
    </div>
  );
};
