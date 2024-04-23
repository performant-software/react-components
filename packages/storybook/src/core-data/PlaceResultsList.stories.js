// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import PlaceResultsList from '../../../core-data/src/components/PlaceResultsList';
import hits from '../data/typesense/Places.json';

export default {
  title: 'Components/Core Data/PlaceResultsList',
  component: PlaceResultsList
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
      <PlaceResultsList
        hits={hits}
        onHoverChange={action('hover')}
        onClick={action('click')}
      />
    </div>
  </div>
);
