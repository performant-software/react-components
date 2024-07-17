// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import Env from '../utils/Environment';
import GeoJsonLayer from '../../../geospatial/src/components/GeoJsonLayer';
import LayerMenu from '../../../geospatial/src/components/LayerMenu';
import MapControl from '../../../geospatial/src/components/MapControl';
import MapDraw from '../../../geospatial/src/components/MapDraw';
import RasterLayerComp from '../../../geospatial/src/components/RasterLayer';

import bostonBoundaryData from '../data/Boston.json';
import mbtaStops from '../data/MbtaStops.json';

const mapTilerKey = Env.getMapTilerKey();

export default {
  title: 'Components/Geospatial/MapDraw',
  component: MapDraw
};

export const Default = () => (
  <MapDraw
    apiKey={mapTilerKey}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  />
);

export const GeoJSON = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={bostonBoundaryData}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  />
);

export const Point = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={{
      type: 'Point',
      coordinates: [
        -81.2653727,
        31.4252249
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  />
);

export const GeoJSONFillLayer = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={{
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Point',
          coordinates: [
            -71.05708030207838,
            42.361145
          ]
        }
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <LayerMenu
      names={[
        'Boston Boundary'
      ]}
    >
      <GeoJsonLayer
        data={bostonBoundaryData}
      />
    </LayerMenu>
  </MapDraw>
);

export const GeoJSONCircleLayer = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={{
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Point',
          coordinates: [
            -71.05708030207838,
            42.361145
          ]
        }
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <LayerMenu
      names={[
        'Boston MBTA Stops'
      ]}
    >
      <GeoJsonLayer
        data={mbtaStops}
      />
    </LayerMenu>
  </MapDraw>
);

export const GeoJSONLayerStyles = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={{
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Point',
          coordinates: [
            -71.05708030207838,
            42.361145
          ]
        }
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <LayerMenu
      names={[
        'Boston Boundary'
      ]}
    >
      <GeoJsonLayer
        data={bostonBoundaryData}
        fillStyle={{
          'fill-color': 'pink',
          'fill-opacity': 0.9
        }}
      />
    </LayerMenu>
  </MapDraw>
);

export const RasterLayer = () => (
  <MapDraw
    apiKey={mapTilerKey}
    buffer={120}
    data={{
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Point',
          coordinates: [
            -6.266155,
            53.350140
          ]
        }
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <LayerMenu
      names={[
        'Map of Ireland'
      ]}
    >
      <RasterLayerComp
        maxzoom={22}
        minzoom={0}
        tileSize={512}
        url={(
          `https://api.maptiler.com/tiles/uk-baire250k1940/{z}/{x}/{y}.png?key=${mapTilerKey}`
        )}
      />
    </LayerMenu>
  </MapDraw>
);

export const EmptyLayerMenu = () => (
  <MapDraw
    apiKey={mapTilerKey}
    data={{
      type: 'Point',
      coordinates: [
        -81.2653727,
        31.4252249
      ]
    }}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <LayerMenu names={[]} />
  </MapDraw>
);

export const CustomControl = () => (
  <MapDraw
    apiKey={mapTilerKey}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  >
    <MapControl
      position='top-right'
    >
      <button
        className='mapbox-gl-draw_ctrl-draw-btn layer-button'
        onClick={action('click')}
        type='button'
      >
        Click me!
      </button>
    </MapControl>
  </MapDraw>
);

export const GeocodingPoints = () => (
  <MapDraw
    apiKey={mapTilerKey}
    geocoding='point'
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
    onGeocodingSelection={action('onGeocodingSelection')}
  />
);

export const GeocodingPolygons = () => (
  <MapDraw
    apiKey={mapTilerKey}
    geocoding='polygon'
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
    onGeocodingSelection={action('onGeocodingSelection')}
  />
);

export const DisableCooperativeGestures = () => (
  <MapDraw
    apiKey={mapTilerKey}
    cooperativeGestures={false}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  />
);

export const FullScreenControl = () => (
  <MapDraw
    apiKey={mapTilerKey}
    fullscreen
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    onChange={action('onChange')}
  />
);

export const NavigationControl = () => (
  <MapDraw
    apiKey={mapTilerKey}
    mapStyle='https://api.maptiler.com/maps/basic-v2/style.json'
    navigation
    onChange={action('onChange')}
  />
);
