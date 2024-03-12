// @flow

import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import React from 'react';
import _ from 'underscore';
import mapStyle from '../data/MapStyles.json';
import PlaceMarkers from '../../../core-data/src/components/PlaceMarkers';

export default {
  title: 'Components/Core Data/PlaceMarker',
  component: PlaceMarkers
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
        <PlaceMarkers
          urls={[
            '/core_data/places/1'
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
        <PlaceMarkers
          urls={_.map(_.times(10, (index) => index), (index) => `/core_data/places/${index}`)}
        />
      </div>
    </Map>
  </Peripleo>
);
