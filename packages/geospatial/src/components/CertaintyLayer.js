// @flow

import circle from '@turf/circle';
import { featureCollection } from '@turf/helpers';
import React, { useCallback, useMemo } from 'react';
import { Layer, Source } from 'react-map-gl/maplibre';
import _ from 'underscore';
import MapStyles from '../utils/MapStyles';

type Props = {
  geometry?: any,
  certaintyRadius: number
};

/**
 * Renders circles with the given certainty_radius circumference around all points in a new layer.
 */
const CertaintyLayer = (props: Props) => {
  const buildCircle = useCallback((point) => (
    circle(point.coordinates, props.certaintyRadius, { units: 'kilometers', steps: 32 })
  ), [props.certaintyRadius]);

  const circles = useMemo(() => {
    const features = [];

    if (props.certaintyRadius > 0 && props.geometry) {
      if (props.geometry.type === 'FeatureCollection') {
        _.each(props.geometry.features, (feature) => {
          if (feature.geometry?.type === 'Point') {
            features.push(buildCircle(feature.geometry));
          }
        });
      } else if (props.geometry.type === 'GeometryCollection') {
        _.each(props.geometry.geometries, (geometry) => {
          if (geometry.type === 'Point') {
            features.push(buildCircle(geometry));
          }
        });
      } else if (props.geometry?.type === 'Point') {
        features.push(buildCircle(props.geometry));
      }
    }

    return featureCollection(features);
  }, [props.geometry, props.certaintyRadius]);

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

