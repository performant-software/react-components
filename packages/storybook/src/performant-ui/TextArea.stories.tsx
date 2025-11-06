import React, { useState } from 'react';
import TextArea from '../../../performant-ui/src/components/TextArea';

export default {
  title: 'Components/Performant UI/TextArea',
  component: TextArea
};

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      label='Description'
      helperText='This will be shown under the product title.'
      onChange={setValue}
      value={value}
    />
  );
};

export const Placeholder = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      label='Description'
      helperText='This will be shown under the product title.'
      placeholder='Type something here'
      onChange={setValue}
      value={value}
    />
  );
};

export const CustomRowCount = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      label='Description'
      helperText='This will be shown under the product title.'
      onChange={setValue}
      rows={1}
      value={value}
    />
  );
};

export const Error = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      error
      label='Description'
      errorText='This field is required.'
      helperText='This will be shown under the product title.'
      onChange={setValue}
      value={value}
    />
  );
};

export const CustomStyles = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      classes={{
        field: 'text-lg! bg-green-800! p-4',
        textarea: 'bg-red-200!',
        label: 'font-mono! text-white!',
        description: 'font-mono! text-white!',
        errorText: 'font-blue-600! font-mono!'
      }}
      label='Description'
      helperText='This will be shown under the product title.'
      onChange={setValue}
      value={value}
    />
  );
};
