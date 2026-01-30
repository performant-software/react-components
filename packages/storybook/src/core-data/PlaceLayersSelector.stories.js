// @flow

import { Map } from '@peripleo/maplibre';
import { Peripleo } from '@peripleo/peripleo';
import React from 'react';
import LocationMarkers from '../../../geospatial/src/components/LocationMarkers';
import mapStyle from '../data/MapStyles.json';
import PlaceLayersSelector from '../../../core-data/src/components/PlaceLayersSelector';
import data from '../data/GeorgiaBorder.json';

export default {
  title: 'Components/Core Data/PlaceLayersSelector',
  component: PlaceLayersSelector
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
        <LocationMarkers
          buffer={100}
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
    <PlaceLayersSelector
      label='Layers'
      layers={[{
        layer_type: 'raster',
        name: 'Georgia Area',
        url: 'https://mapwarper.net/maps/tile/51704/{z}/{x}/{y}.png'
      }, {
        layer_type: 'geojson',
        name: 'Georgia Border',
        data
      }, {
        layer_type: 'geojson',
        name: 'Chatham County',
        url: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA/GA/Chatham.geo.json'
      }]}
    />
  </Peripleo>
);
