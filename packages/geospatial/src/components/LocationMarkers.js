// @flow

import { GeoJSONLayer, PulsingMarkerLayer, useMap } from '@peripleo/maplibre';
import React, { useEffect, useMemo } from 'react';
import _ from 'underscore';
import MapStyles from '../utils/MapStyles';
import MapUtils from '../utils/Map';

type Props = {
  /**
   * If `true`, the point marker will display with a pulsing animation.
   */
  animate?: boolean,

  /**
   * (Optional) data to pass to the fitToBounds function.
   */
  boundingBoxData?: any,

  /**
   * (Optional) options to pass to the fitToBounds function.
   * See [spec](https://maplibre.org/maplibre-gl-js/docs/API/types/FitBoundsOptions/).
   */
  boundingBoxOptions?: any,

  /**
   * The number of miles to buffer the GeoJSON data.
   */
  buffer: number,

  /**
   * If true, markers will be clustered before the specified zoom level.
   */
  cluster?: boolean,

  /**
   * Max zoom to cluster points on.
   */
  clusterMaxZoom?: number,

  /**
   * Minimum number of points necessary to form a cluster.
   */
  clusterMinPoints?: number,

  /**
   * An object defining custom properties on the generated clusters.
   */
  clusterProperties?: any,

  /**
   * Radius of each cluster when clustering point.
   */
  clusterRadius?: number,

  /**
   * The GeoJSON data representing the location.
   */
  data: { [key: string]: any },

  /**
   * GeoJSON layer fill style.
   */
  fillStyle?: { [key: string]: any },

  /**
   * If `true`, the map will fit the bounding box around the passed data.
   */
  fitBoundingBox?: boolean,

  /**
   * An ID value to apply to the layer.
   */
  layerId?: string,

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
   * Memo-izes the data prop.
   *
   * @type {{[p: string]: *}}
   */
  const data = useMemo(() => (_.isEmpty(props.data) ? null : props.data), [props.data]);

  /**
   * Sets the bounding box on the map.
   */
  useEffect(() => {
    if (map && data && props.fitBoundingBox) {
      const bbox = MapUtils.getBoundingBox(data, props.buffer);

      if (bbox) {
        map.fitBounds(bbox, props.boundingBoxOptions, props.boundingBoxData);
      }
    }
  }, [map, props.buffer, props.data, props.boundingBoxData, props.boundingBoxOptions, props.fitBoundingBox]);

  if (!data) {
    return null;
  }

  return (
    <>
      { props.animate && (
        <PulsingMarkerLayer
          data={props.data}
          id={`pulsing-${props.layerId}`}
        />
      )}
      <GeoJSONLayer
        cluster={props.cluster}
        clusterMaxZoom={props.clusterMaxZoom}
        clusterMinPoints={props.clusterMinPoints}
        clusterProperties={props.clusterProperties}
        clusterRadius={props.clusterRadius}
        data={props.data}
        fillStyle={props.fillStyle}
        id={props.layerId}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

LocationMarkers.defaultProps = {
  buffer: DEFAULT_BUFFER,
  fillStyle: MapStyles.fill,
  fitBoundingBox: true,
  pointStyle: MapStyles.point,
  strokeStyle: MapStyles.stroke
};

export default LocationMarkers;
