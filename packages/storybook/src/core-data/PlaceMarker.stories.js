// @flow

import { Map, Zoom } from '@peripleo/maplibre';
import { Controls, Peripleo } from '@peripleo/peripleo';
import React from 'react';
import mapStyle from '../data/MapStyles.json';
import PlaceMarker from '../../../core-data/src/components/PlaceMarker';
// import { PlaceMarker } from '@performant-software/core-data';

export default {
  title: 'Components/Core Data/PlaceMarker',
  component: PlaceMarker
};

const PLACE_URL = 'https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10';

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
      <PlaceMarker
        url={PLACE_URL}
        // map={map}
      />
    </Map>
  </Peripleo>
);
