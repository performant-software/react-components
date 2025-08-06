import React, { useState } from 'react';
import Switch from '../../../tailwind-ui/src/components/Switch';

export default {
  title: 'Components/TailwindUI/Switch',
  component: Switch
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      label='Enable 1337 mode.'
      onChange={setValue}
      value={value}
    />
  );
};

export const WithDescription = () => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      description='1337 mode is a super cool alternate version of Fair Data!'
      label='Enable 1337 mode.'
      onChange={setValue}
      value={value}
    />
  );
};

export const RightAligned = () => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      description='1337 mode is a super cool alternate version of Fair Data!'
      label='Enable 1337 mode.'
      onChange={setValue}
      side='right'
      value={value}
    />
  );
};

export const CustomStyles = () => {
  const [value, setValue] = useState(false);

  return (
    <Switch
      classes={{
        root: 'text-gray-200! bg-green-950! h-10',
        label: 'font-mono!',
        switch: 'data-checked:bg-green-400!'
      }}
      label='Enable 1337 mode.'
      onChange={setValue}
      value={value}
    />
  );
};