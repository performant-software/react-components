// @flow

import React from 'react';
import { Layer, Source } from 'react-map-gl/maplibre';
import MapStyles from '../utils/MapStyles';
import MapUtils from '../utils/Map';

type Props = {
  geometry?: any,
  certaintyRadius: number
};

/**
 * Renders circles with the given certainty_radius circumference around all points in a new layer.
 */
const CertaintyLayer = (props: Props) => {
  const circles = MapUtils.getCertaintyCircles([props.geometry], () => props.certaintyRadius);

  return (
    <Source
      data={circles}
      type='geojson'
    >
      <Layer
        {...MapStyles.fill}
        id='certainty-layer'
        paint={{
          ...MapStyles.fill.paint,
        }}
      />
    </Source>
  );
};

export default CertaintyLayer;

