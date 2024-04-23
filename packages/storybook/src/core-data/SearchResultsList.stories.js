// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import hits from '../data/typesense/Places.json';
import SearchResultsList from '../../../core-data/src/components/SearchResultsList';

export default {
  title: 'Components/Core Data/SearchResultsList',
  component: SearchResultsList
};

export const Default = () => (
  <div
    style={{
      position: 'relative',
      width: '360px',
      height: '100vh'
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
        renderItem={(item) => (
          <>
            <h2>
              { item.name }
            </h2>
            <p
              className='text-muted text-xs line-clamp-1'
            >
              { item.names }
            </p>
          </>
        )}
      />
    </div>
  </div>
);
