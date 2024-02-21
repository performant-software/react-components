// @flow

import { Map as MapUtils } from '@performant-software/geospatial';
import { MixedGeoJSONLayer, PulsingMarkerLayer, useMap } from '@peripleo/maplibre';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  /**
   * The number of miles to buffer the GeoJSON data.
   */
  buffer: number,

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
  strokeStyle?: { [key: string]: any },

  /**
   * The URL of the Core Data place record.
   */
  url: string
};

/**
 * This component renders a map marker for a given Core Data Place record.
 */
const PlaceMarker = (props: Props) => {
  const [place, setPlace] = useState();

  const map = useMap();

  /**
   * Converts the passed data to a feature collection and sets it on the state.
   *
   * @type {(function(*): void)|*}
   */
  const onLoad = useCallback((data) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: [{
        ...data,
        properties: {
          ...data.properties,
          record_id: data.record_id
        }
      }]
    };

    setPlace(featureCollection);
  }, []);

  /**
   * Fetch the place record from the passed URL.
   */
  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then(onLoad);
  }, [props.url]);

  /**
   * Sets the bounding box on the map.
   */
  useEffect(() => {
    if (map && place) {
      const boundingBox = MapUtils.getBoundingBox(place, props.buffer);
      map.fitBounds(boundingBox);
    }
  }, [map, place, props.buffer]);

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
        id='current'
        data={place}
        fillStyle={props.fillStyle}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

export default PlaceMarker;
