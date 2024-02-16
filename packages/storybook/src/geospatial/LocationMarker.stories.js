// @flow

import { Peripleo, Controls } from '@peripleo/peripleo';
import { Map, Zoom, useMap } from '@peripleo/maplibre';
import React from 'react';
import LocationMarker from '../../../geospatial/src/components/LocationMarker';
import mapStyle from '../data/MapStyles.json';

export default {
  title: 'Components/Geospatial/LocationMarker',
  component: LocationMarker
};

export const Default = () => (
  <Peripleo>
    <Map
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
          height: '300px'
        }}
      >
        <LocationMarker
          data={{
            type: 'Point',
            coordinates: [
              -81.2653727,
              31.4252249
            ]
          }}
          useMap={useMap}
        />
      </div>
    </Map>
  </Peripleo>
);

export const Buffer = () => (
  <Peripleo>
    <Map
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
          height: '300px'
        }}
      >
        <LocationMarker
          buffer={10}
          data={{
            type: 'Point',
            coordinates: [
              -81.2653727,
              31.4252249
            ]
          }}
        />
      </div>
    </Map>
  </Peripleo>
);
