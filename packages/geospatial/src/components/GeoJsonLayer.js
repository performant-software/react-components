// @flow

import React, {
  useEffect,
  useState
} from 'react';
import { Layer, Source } from 'react-map-gl';
import MapStyles from '../utils/MapStyles';

type Props = {
  data?: { [key: string]: any },
  fillStyle?: { [key: string]: any },
  lineStyle?: { [key: string]: any },
  pointStyle?: { [key: string]: any },
  url?: string
};

const GeoJsonLayer = (props: Props) => (
  <Source
    data={props.data || props.url}
    type='geojson'
  >
    <Layer
      filter={['!=', '$type', 'Point']}
      paint={props.fillStyle}
      type='fill'
    />
    <Layer
      filter={['!=', '$type', 'Point']}
      paint={props.lineStyle}
      type='line'
    />
    <Layer
      filter={['==', '$type', 'Point']}
      paint={props.pointStyle}
      type='circle'
    />
  </Source>
);

GeoJsonLayer.defaultProps = {
  fillStyle: MapStyles.fill.paint,
  pointStyle: MapStyles.point.paint,
  strokeStyle: MapStyles.stroke.paint
};

export default GeoJsonLayer;
