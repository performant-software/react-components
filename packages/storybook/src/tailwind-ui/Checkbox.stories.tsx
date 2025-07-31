import React, { useState } from 'react';
import Checkbox from '../../../tailwind-ui/src/components/Checkbox';

export default {
  title: 'Components/TailwindUI/Checkbox',
  component: Checkbox
};

export const Default = () => {
  const [val, setVal] = useState(true);

  return (
    <Checkbox
      label='Lights'
      onChange={setVal}
      value={val}
    />
  );
};

export const Description = () => {
  const [val, setVal] = useState(true);

  return (
    <Checkbox
      description='This toggle allows you to turn the lights on or off.'
      label='Lights'
      onChange={setVal}
      value={val}
    />
  );
};

export const Disabled = () => {
  const [val, setVal] = useState(true);

  return (
    <Checkbox
      disabled
      label='Lights'
      onChange={setVal}
      value={val}
    />
  );
};

export const Indeterminate = () => {
  const [, setVal] = useState(true);

  return (
    <Checkbox
      indeterminate
      label='Lights'
      onChange={setVal}
    />
  );
};