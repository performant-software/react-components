// @flow

import React, { useState } from 'react';
import _ from 'underscore';
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

export const OptionFormatting = () => {
  const [values, setValues] = useState([]);

  const onChange = (option) => {
    const { value } = option;

    if (_.findWhere(values, { value })) {
      setValues(values.filter((c) => c.value !== value));
    } else {
      setValues([...values, option]);
    }
  };

  const names = [
    'Bill Blackbeard',
    'Long Bill Ginger',
    'Large John',
    'Dreadful John',
    'Cutthroat Bill The Long',
    'John Greyhate',
    'Bill Largeparrot',
    'First Mate John The Dreadful',
    'Dread Pirate Pete',
    'Captain Pete',
    'Sir John Long',
    'The Large Pirate',
    'Pete Bones',
    'Cap\'n Dreadful',
    'Pete Longbrand',
    'Pete De',
    'Admiral Bill',
    'Johnplank',
    'Large Bill The Pirate',
    'Black Bill The Feared',
    'Lorem ipsum odor amet, consectetuer adipiscing elit.'
  ];

  const initOptions = names.map((n) => ({ label: n, value: n }));
  
  const [options, setOptions] = useState(initOptions);

  const onClear = () => setValues([]);

  const onSearch = (query) => {
    if (query && query.length) {
      setOptions(options.filter((o) => o.label?.toLowerCase().startsWith(query.toLowerCase())));
    } else {
      setOptions(initOptions);
    }
  };

  return (
    <div
      className='w-[150px]'
    >
      <Combobox
        options={options}
        onChange={onChange}
        onClear={onClear}
        onSearch={onSearch}
        label='Pirates'
        placeholder='Select pirates'
        values={values}
      />
    </div>
  );
};
