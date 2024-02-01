// @flow

import { Peripleo, Controls } from '@peripleo/peripleo';
import { Map, Zoom } from '@peripleo/maplibre';
import React from 'react';
import CoreDataPlace from '../../../geospatial/src/components/CoreDataPlace';
import mapStyle from '../data/MapStyles.json';

export default {
  title: 'Components/Geospatial/CoreDataPlace',
  component: CoreDataPlace
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
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <CoreDataPlace
          url={PLACE_URL}
        />
      </div>
    </Map>
  </Peripleo>
);
