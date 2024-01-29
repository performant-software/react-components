// @flow

import React from 'react';
import { Layer, Source } from 'react-map-gl';

type Props = {
  maxzoom?: number,
  minzoom?: number,
  opacity?: number,
  tileSize?: number,
  url?: string,
};

const RasterLayer = (props: Props) => (
  <Source
    tileSize={props.tileSize}
    tiles={[props.url]}
    type='raster'
  >
    <Layer
      type='raster'
      paint={{
        'raster-opacity': props.opacity
      }}
      minzoom={props.minzoom}
      maxzoom={props.maxzoom}
    />
  </Source>
);

RasterLayer.defaultProps = {
  opacity: 0.7,
  tileSize: 256
};

export default RasterLayer;
