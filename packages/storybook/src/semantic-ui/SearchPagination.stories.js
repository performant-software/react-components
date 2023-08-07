// @flow

import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import SearchPagination from '../../../semantic-ui/src/components/SearchPagination';

export default {
  title: 'Components/Semantic UI/SearchPagination',
  component: SearchPagination
};

export const Default = () => (
  <SearchPagination
    usePagination={() => ({
      currentRefinement: 0,
      nbPages: 12,
      refine: action('refine')
    })}
  />
);

export const Controlled = () => {
  const [currentRefinement, setCurrentRefinement] = useState(0);

  return (
    <SearchPagination
      usePagination={() => ({
        currentRefinement,
        nbPages: 12,
        refine: (v) => setCurrentRefinement(v)
      })}
    />
  );
};
