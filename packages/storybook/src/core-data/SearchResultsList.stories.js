// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import SearchResultsList from '../../../core-data/src/components/SearchResultsList';
import hits from '../data/typesense/Places.json';

export default {
  title: 'Components/Core Data/SearchResultsList',
  component: SearchResultsList
};

export const Default = () => (
  <div
    style={{
      position: 'relative',
      width: '360px',
      height: '200px'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <SearchResultsList
        hits={hits}
        onHoverChange={action('hover')}
        onClick={action('click')}
      />
    </div>
  </div>
);
