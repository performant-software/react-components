// @flow

import { Map } from '@peripleo/maplibre';
import { Peripleo } from '@peripleo/peripleo';
import React from 'react';
import _ from 'underscore';
import mapStyle from '../data/MapStyles.json';
import PlaceMarkers from '../../../core-data/src/components/PlaceMarkers';

export default {
  title: 'Components/Core Data/PlaceMarkers',
  component: PlaceMarkers
};

export const Default = () => (
  <Peripleo>
    <Map
      style={mapStyle}
    >
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <PlaceMarkers
          urls={[
            '/core_data/public/v1/places/1'
          ]}
        />
      </div>
    </Map>
  </Peripleo>
);

export const MultiplePlaces = () => (
  <Peripleo>
    <Map
      style={mapStyle}
    >
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <PlaceMarkers
          urls={_.map(_.times(10, (index) => index), (index) => `/core_data/public/v1/places/${index}`)}
        />
      </div>
    </Map>
  </Peripleo>
);

export const LargerBuffer = () => (
  <Peripleo>
    <Map
      style={mapStyle}
    >
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <PlaceMarkers
          urls={[
            '/core_data/public/v1/places/1'
          ]}
          buffer={20}
        />
      </div>
    </Map>
  </Peripleo>
);
