// @flow

import { action } from 'storybook/actions';
import React from 'react';
import SearchResultsSort from '../../../semantic-ui/src/components/SearchResultsSort';

export default {
  title: 'Components/Semantic UI/SearchResultsSort',
  component: SearchResultsSort
};

export const Default = () => (
  <div
    style={{
      minHeight: '400px'
    }}
  >
    <SearchResultsSort
      items={[{
        label: 'Make',
        value: 'make'
      }, {
        label: 'Model',
        value: 'model'
      }, {
        label: 'Year',
        value: 'year'
      }]}
      useSortBy={({ items }) => ({
        currentRefinement: 'make',
        options: items,
        refine: action('refine')
      })}
    />
  </div>
);
