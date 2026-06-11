// @flow

import React from 'react';
import { Layer, Source } from 'react-map-gl/maplibre';

type Props = {
  maxzoom?: number,
  minzoom?: number,
  opacity?: number,
  tileSize?: number,
  url?: string,
};

const RasterLayer = ({maxzoom = 22, minzoom = 0, opacity = 0.7, tileSize = 256, ...props}: Props) => (
  <Source
    tileSize={tileSize}
    tiles={[props.url]}
    type='raster'
  >
    <Layer
      type='raster'
      paint={{
        'raster-opacity': opacity
      }}
      minzoom={minzoom}
      maxzoom={maxzoom}
    />
  </Source>
);

export default RasterLayer;
