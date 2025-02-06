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
