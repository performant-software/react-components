// @flow

import { action } from 'storybook/actions';
import React, { useState } from 'react';
import SearchBox from '../../../semantic-ui/src/components/SearchBox';

export default {
  title: 'Components/Semantic UI/SearchBox',
  component: SearchBox
};

export const Default = () => (
  <SearchBox
    useSearchBox={() => ({
      query: '',
      refine: action('refine'),
      clear: action('clear'),
      isSearchStalled: false
    })}
  />
);

export const Controlled = () => {
  const [query, setQuery] = useState('');

  return (
    <SearchBox
      useSearchBox={() => ({
        query,
        refine: (v) => setQuery(v),
        clear: () => setQuery(''),
        isSearchStalled: false
      })}
    />
  );
};

export const Loading = () => (
  <SearchBox
    useSearchBox={() => ({
      query: '',
      refine: action('refine'),
      clear: action('clear'),
      isSearchStalled: true
    })}
  />
);
