// @flow

import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import React from 'react';
import WarpedImageLayer from '../../../geospatial/src/components/WarpedImageLayer';
import Env from '../utils/Environment';

export default {
  title: 'Components/Geospatial/WarpedImageLayer',
  component: WarpedImageLayer
};

const mapTilerKey = Env.getMapTilerKey();
const mapStyle = `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapTilerKey}`;

export const Default = () => (
  <Peripleo>
    <Map
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
        <WarpedImageLayer
          id='nyc'
          url='https://annotations.allmaps.org/images/d180902cb93d5bf2'
        />
      </div>
    </Map>
  </Peripleo>
);
