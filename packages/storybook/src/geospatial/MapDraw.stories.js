// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import MapDraw from '../../../geospatial/src/components/MapDraw';
import data from '../data/boston.json';

export default {
  title: 'Components/Geospatial/MapDraw',
  component: MapDraw
};

export const Default = () => (
  <MapDraw
    mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
    onChange={action('onChange')}
    style={{
      marginBottom: '2em'
    }}
  />
);

export const GeoJSON = () => (
  <MapDraw
    data={data}
    mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
    onChange={action('onChange')}
    style={{
      marginBottom: '2em'
    }}
  />
);

export const Point = () => (
  <MapDraw
    data={{
      type: 'Point',
      coordinates: [
        -81.2653727,
        31.4252249
      ]
    }}
    mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
    onChange={action('onChange')}
    style={{
      marginBottom: '2em'
    }}
  />
);