// @flow

import { Peripleo, Controls } from '@peripleo/peripleo';
import { Map, Zoom } from '@peripleo/maplibre';
// const { Map, Zoom } = require('@peripleo/maplibre');
import React from 'react';
// import LocationMarker from '../../../geospatial/src/components/LocationMarker';
import { LocationMarker } from '@performant-software/geospatial';
import mapStyle from '../data/MapStyles.json';

// const { Map, Zoom } = require('@peripleo/maplibre');

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
