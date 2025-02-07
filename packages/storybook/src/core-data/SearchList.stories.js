// @flow

import React from 'react';
import InstantSearchProvider from '../components/InstantSearchProvider';
import SearchList from '../../../core-data/src/components/SearchList';

export default {
  title: 'Components/Core Data/SearchList',
  component: SearchList
};

export const Default = () => (
  <InstantSearchProvider>
    <SearchList attributes={[]} />
  </InstantSearchProvider>
);
