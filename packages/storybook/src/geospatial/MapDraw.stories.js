// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import MapDraw from '../../../geospatial/src/components/MapDraw';

export default {
  title: 'Components/Geospatial/MapDraw',
  component: MapDraw
};

export const Default = () => (
  <MapDraw
    mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
    onChange={action('onChange')}
  />
);
