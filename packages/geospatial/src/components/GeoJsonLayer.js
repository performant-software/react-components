// @flow

import React from 'react';
import { Layer, Source } from 'react-map-gl/maplibre';
import MapStyles from '../utils/MapStyles';

type Props = {
  data?: { [key: string]: any },
  fillStyle?: { [key: string]: any },
  lineStyle?: { [key: string]: any },
  pointStyle?: { [key: string]: any },
  url?: string
};

const GeoJsonLayer = ({fillStyle = MapStyles.fill.paint, pointStyle = MapStyles.point.paint, strokeStyle = MapStyles.stroke.paint, ...props}: Props) => (
  <Source
    data={props.data || props.url}
    type='geojson'
  >
    <Layer
      filter={['!=', '$type', 'Point']}
      paint={fillStyle}
      type='fill'
    />
    <Layer
      filter={['!=', '$type', 'Point']}
      paint={props.lineStyle}
      type='line'
    />
    <Layer
      filter={['==', '$type', 'Point']}
      paint={pointStyle}
      type='circle'
    />
  </Source>
);

export default GeoJsonLayer;
