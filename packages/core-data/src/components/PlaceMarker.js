// @flow

import { LocationMarker } from '@performant-software/geospatial';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  /**
   * The URL of the Core Data place record.
   */
  url: string,


  /**
   * The number of miles to buffer the GeoJSON data. (Defaults to 2.)
   */
  buffer?: number
};

/**
 * This component renders a map marker for a given Core Data Place record.
 */
const PlaceMarker = (props: Props) => {
  const [place, setPlace] = useState();

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

  if (!place || !place.features || !place.features[0].geometry) {
    return null;
  }

  return (
    <LocationMarker
      data={place}
      buffer={props.buffer}
    />
  );
};

export default PlaceMarker;
