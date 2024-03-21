// @flow

import { Peripleo, Controls } from '@peripleo/peripleo';
import { Map, Zoom } from '@peripleo/maplibre';
import React from 'react';
import geometryCollection from '../data/GeometryCollection.json';
import LocationMarkers from '../../../geospatial/src/components/LocationMarkers';
import mapStyle from '../data/MapStyles.json';

export default {
  title: 'Components/Geospatial/LocationMarkers',
  component: LocationMarkers
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
        <LocationMarkers
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

export const Animation = () => (
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
        <LocationMarkers
          animate
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
        <LocationMarkers
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

export const MultiplePoints = () => (
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
        <LocationMarkers
          buffer={100}
          data={geometryCollection}
        />
      </div>
    </Map>
  </Peripleo>
);
