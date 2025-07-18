// @flow

import { action } from 'storybook/actions';
import React from 'react';
import _ from 'underscore';
import SearchResultsPerPage from '../../../semantic-ui/src/components/SearchResultsPerPage';

export default {
  title: 'Components/Semantic UI/SearchResultsPerPage',
  component: SearchResultsPerPage
};

export const Default = () => (
  <div
    style={{
      minHeight: '400px'
    }}
  >
    <SearchResultsPerPage
      options={[10, 25, 50, 100]}
      useHitsPerPage={({ items }) => ({
        items: _.map(items, (item, index) => ({ ...item, isRefined: index === 0 })),
        refine: action('refine')
      })}
    />
  </div>
);
