import React, { useState } from 'react';
import Listbox from '../../../performant-ui/src/components/Listbox';

export default {
  title: 'Components/Performant UI/Listbox',
  component: Listbox
};

const options = [
  {
    id: 1,
    label: 'Baltimore'
  },
  {
    id: 2,
    label: 'Cincinnati'
  },
  {
    id: 3,
    label: 'Chicago'
  },
  {
    id: 4,
    label: 'Minneapolis'
  },
  {
    id: 5,
    label: 'Montreal'
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

export const Labeled = () => {
  const [value, setValue] = useState(null);

  return (
    <Listbox
      options={options}
      label='City'
      onChange={setValue}
      value={value}
    />
  );
};

export const Placeholder = () => {
  const [value, setValue] = useState(null);

  return (
    <Listbox
      options={options}
      placeholder='Select one'
      onChange={setValue}
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
