// @flow

import React, { useEffect } from 'react';
import { MixedGeoJSONLayer, PulsingMarkerLayer, useMap } from '@peripleo/maplibre';
import { DEFAULT_FILL_STYLE, DEFAULT_POINT_STYLE, DEFAULT_STROKE_STYLE } from '../utils/MapStyles';
import MapUtils from '../utils/Map';

type Props = {
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

const LocationMarker = (props: Props) => {
  const map = useMap();

  /**
   * Sets the bounding box on the map.
   */
  useEffect(() => {
    if (map && props.data) {
      const boundingBox = MapUtils.getBoundingBox(props.data, props.buffer);
      map.fitBounds(boundingBox);
    }
  }, [props.buffer, props.data]);

  return (
    <>
      <PulsingMarkerLayer
        id='current'
        data={props.data}
      />
      <MixedGeoJSONLayer
        id='current'
        data={props.data}
        fillStyle={props.fillStyle}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

LocationMarker.defaultProps = {
  buffer: DEFAULT_BUFFER,
  fillStyle: DEFAULT_FILL_STYLE,
  pointStyle: DEFAULT_POINT_STYLE,
  strokeStyle: DEFAULT_STROKE_STYLE
};

export default LocationMarker;
