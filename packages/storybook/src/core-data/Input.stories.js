// @flow

import React, { useState } from 'react';
import Input from '../../../core-data/src/components/Input';

export default {
  title: 'Components/Core Data/Input',
  component: Input
};

export const Default = () => {
  const [query, setQuery] = useState('');

  return (
    <Input
      onChange={(val) => setQuery(val)}
      placeholder='Search'
      value={query}
    />
  );
};

export const NotClearable = () => {
  const [query, setQuery] = useState('');

  return (
    <Input
      clearable={false}
      onChange={(val) => setQuery(val)}
      placeholder='Search'
      value={query}
    />
  );
};

export const WithIcon = () => {
  const [query, setQuery] = useState('');

  return (
    <Input
      onChange={(val) => setQuery(val)}
      icon='search'
      placeholder='Search'
      value={query}
    />
  );
};

export const CustomStyled = () => {
  const [query, setQuery] = useState('');

  return (
    <Input
      className='bg-red-50 italic'
      onChange={(val) => setQuery(val)}
      icon='search'
      placeholder='Search'
      value={query}
    />
  );
};

export const InContainer = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='w-[300px]'>
      <Input
        className='bg-red-50 italic'
        onChange={(val) => setQuery(val)}
        icon='search'
        placeholder='Search'
        value={query}
      />
    </div>
  );
};
