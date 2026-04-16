// @flow

import React, { useMemo } from 'react';
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
  const data = useMemo(() => {
    if (props.geometry) {
      return MapUtils.toCertaintyCircle(props.geometry, props.certaintyRadius);
    } else {
      return {};
    }
  }, [props.geometry, props.certaintyRadius]);

  return (
    <Source
      data={data}
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

