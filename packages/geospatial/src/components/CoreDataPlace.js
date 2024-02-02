// @flow

import { MixedGeoJSONLayer, PulsingMarkerLayer, useMap } from '@peripleo/maplibre';
import type { FeatureCollection } from '@peripleo/peripleo';
import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import { DEFAULT_FILL_STYLE, DEFAULT_POINT_STYLE, DEFAULT_STROKE_STYLE } from '../utils/MapStyles';
import MapUtils from '../utils/Map';

type Props = {
  /**
   * URL of the Core Data place record.
   */
  url: string,

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

const BBOX_BUFFER = 2;

/**
 * This component renders a Core Data place object. It is designed to be used within a Peripleo/Map component.
 */
const CoreDataPlace = (props: Props) => {
  const [place, setPlace] = useState<FeatureCollection | undefined>(undefined);

  const map = useMap();

  /**
   * Sets the bounding box on the map.
   */
  useEffect(() => {
    if (map && place) {
      const { geometry } = _.first(place.features);
      const boundingBox = MapUtils.getBoundingBox(geometry, BBOX_BUFFER);

      map.fitBounds(boundingBox);
    }
  }, [place]);

  /**
   * Fetch the place record from the passed URI.
   */
  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => setPlace({
        type: 'FeatureCollection',
        features: [{
          ...data,
          properties: {
            ...data.properties,
            record_id: data.record_id
          }
        }]
      }));
  }, [props.url]);

  if (!place) {
    return null;
  }

  return (
    <>
      <PulsingMarkerLayer
        id='current'
        data={place}
      />
      <MixedGeoJSONLayer
        id={props.url}
        data={place}
        fillStyle={props.fillStyle}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

CoreDataPlace.defaultProps = {
  fillStyle: DEFAULT_FILL_STYLE,
  pointStyle: DEFAULT_POINT_STYLE,
  strokeStyle: DEFAULT_STROKE_STYLE
};

export default CoreDataPlace;
