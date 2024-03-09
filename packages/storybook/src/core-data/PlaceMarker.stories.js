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

const PLACE_URL = 'https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10';
const PLACE_URL_2 = 'https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/4a683ef2-4a82-497f-a135-7ef10d8a77da?project_ids=16';

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

export const NullGeometry = () => (
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
        <PlaceMarker
          url={PLACE_URL_2}
        />
      </div>
    </Map>
  </Peripleo>
)
