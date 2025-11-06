import React, { useState } from 'react';
import RadioGroup from '../../../performant-ui/src/components/RadioGroup';

export default {
  title: 'Components/Performant UI/RadioGroup',
  component: RadioGroup
};

const options = [
  {
    id: 1,
    label: 'Admin'
  },
  {
    id: 2,
    label: 'Moderator'
  },
  {
    id: 3,
    label: 'User'
  }
];

const optionWithDescriptions = [
  {
    id: 1,
    label: 'Admin',
    description: 'Admins control everything on the site!'
  },
  {
    id: 2,
    label: 'Moderator',
    description: 'Moderators can wield the BAN HAMMER.'
  },
  {
    id: 3,
    label: 'User',
    description: 'Just a regular user.'
  }
];

export const Default = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <RadioGroup
      onChange={setValue}
      options={options}
      value={value}
    />
  );
};

export const Descriptions = () => {
  const [value, setValue] = useState(optionWithDescriptions[0]);

  return (
    <RadioGroup
      onChange={setValue}
      options={optionWithDescriptions}
      value={value}
    />
  );
};

export const CustomStyles = () => {
  const [value, setValue] = useState(optionWithDescriptions[0]);

  return (
    <RadioGroup
      classes={{
        root: 'text-red-200!',
        field: 'gap-10!',
        button: 'bg-purple-800!',
        label: 'lowercase!',
        description: 'uppercase!'
      }}
      onChange={setValue}
      options={optionWithDescriptions}
      value={value}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <RadioGroup
      disabled
      onChange={setValue}
      options={options}
      value={value}
    />
  );
};