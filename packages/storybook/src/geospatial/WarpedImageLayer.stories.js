// @flow

import maplibregl from 'maplibre-gl';
import React from 'react';
import { Map } from 'react-map-gl/maplibre';
import Env from '../utils/Environment';
import WarpedImageLayer from '../../../geospatial/src/components/WarpedImageLayer';

export default {
  title: 'Components/Geospatial/WarpedImageLayer',
  component: WarpedImageLayer
};

const mapTilerKey = Env.getMapTilerKey();
const mapStyle = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

export const Default = () => (
  <Map
    attributionControl={false}
    canvasContextAttributes={{
      preserveDrawingBuffer: true
    }}
    initialViewState={{
      bounds: [
        [-74.123501, 40.679546],
        [-73.796486, 40.805444]
      ]
    }}
    mapLib={maplibregl}
    mapStyle={mapStyle}
    maxPitch={0}
    preserveDrawingBuffer
    style={{
      height: 500,
      width: '100%'
    }}
  >
    <WarpedImageLayer
      id='nyc'
      url='https://annotations.allmaps.org/images/d180902cb93d5bf2'
    />
  </Map>
);
