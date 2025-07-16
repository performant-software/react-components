// @flow

import { Map as PeripleoMap, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import React from 'react';
import Env from '../utils/Environment';
import WarpedImageLayerPeripleo from '../../../geospatial/src/components/WarpedImageLayerPeripleo';

export default {
  title: 'Components/Geospatial/WarpedImageLayerPeripleo',
  component: WarpedImageLayerPeripleo
};

const mapTilerKey = Env.getMapTilerKey();
const mapStyle = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

export const Default = () => (
  <Peripleo>
    <PeripleoMap
      canvasContextAttributes={{
        preserveDrawingBuffer: true
      }}
      defaultBounds={[
        [-74.123501, 40.679546],
        [-73.796486, 40.805444]
      ]}
      style={mapStyle}
    >
      <Controls
        position='topright'
      >
        <Zoom />
      </Controls>
      <div
        style={{
          width: '100%',
          height: '500px'
        }}
      >
        <WarpedImageLayerPeripleo
          id='nyc'
          url='https://annotations.allmaps.org/images/d180902cb93d5bf2'
        />
      </div>
    </PeripleoMap>
  </Peripleo>
);
