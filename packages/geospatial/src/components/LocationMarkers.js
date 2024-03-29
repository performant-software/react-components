// @flow

import { MixedGeoJSONLayer, PulsingMarkerLayer, useMap } from '@peripleo/maplibre';
import React, { useEffect } from 'react';
import { DEFAULT_FILL_STYLE, DEFAULT_POINT_STYLE, DEFAULT_STROKE_STYLE } from '../utils/MapStyles';
import MapUtils from '../utils/Map';

type Props = {
  /**
   * If `true`, the point marker will display with a pulsing animation.
   */
  animate?: boolean,

  /**
   * The number of miles to buffer the GeoJSON data.
   */
  buffer: number,

  /**
   * The GeoJSON data representing the location.
   */
  data: { [key: string]: any },

  /**
   * GeoJSON layer fill style.
   */
  fillStyle?: { [key: string]: any },

  /**
   * GeoJSON layer point style.
   */
  pointStyle?: { [key: string]: any },

  /**
   * GeoJSON layer stroke style
   */
  strokeStyle?: { [key: string]: any }
};

const DEFAULT_BUFFER = 2;

/**
 * This component renders a location marker to be used in a Peripleo context.
 */
const LocationMarkers = (props: Props) => {
  const map = useMap();

  /**
   * Sets the bounding box on the map.
   */
  useEffect(() => {
    if (map && props.data) {
      const boundingBox = MapUtils.getBoundingBox(props.data, props.buffer);
      map.fitBounds(boundingBox);
    }
  }, [map, props.buffer, props.data]);

  return (
    <>
      { props.animate && (
        <PulsingMarkerLayer
          data={props.data}
        />
      )}
      <MixedGeoJSONLayer
        data={props.data}
        fillStyle={props.fillStyle}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

LocationMarkers.defaultProps = {
  buffer: DEFAULT_BUFFER,
  fillStyle: DEFAULT_FILL_STYLE,
  pointStyle: DEFAULT_POINT_STYLE,
  strokeStyle: DEFAULT_STROKE_STYLE
};

export default LocationMarkers;
