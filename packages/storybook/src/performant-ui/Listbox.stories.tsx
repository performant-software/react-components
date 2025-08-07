import React, { useState } from 'react';
import Listbox from '../../../performant-ui/src/components/Listbox';

export default {
  title: 'Components/Performant UI/Listbox',
  component: Listbox
};

const options = [
  {
    id: 1,
    name: 'Baltimore'
  },
  {
    id: 2,
    name: 'Cincinnati'
  },
  {
    id: 3,
    name: 'Chicago'
  },
  {
    id: 4,
    name: 'Minneapolis'
  },
  {
    id: 5,
    name: 'Montreal'
  }
];

export const Default = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <Listbox
      onChange={setValue}
      options={options}
      value={value}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <Listbox
      disabled
      onChange={setValue}
      options={options}
      value={value}
    />
  );
};


export const CustomStyles = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <Listbox
      classes={{
        button: 'text-red-200',
        option: 'data-selected:bg-purple-500!',
        options: 'bg-yellow-500'
      }}
      onChange={setValue}
      options={options}
      value={value}
    />
  );
};
