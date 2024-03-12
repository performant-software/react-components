// @flow

import { LocationMarkers } from '@performant-software/geospatial';
import { feature, featureCollection } from '@turf/turf';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import _ from 'underscore';

type Props = {
  animate?: boolean,

  /**
   * The number of miles to buffer the GeoJSON data. (Defaults to two.)
   */
  buffer?: number,

  /**
   * The URL of the Core Data place record.
   */
  urls: Array<string>
};

/**
 * This component renders a map marker for a given Core Data Place record.
 */
const PlaceMarkers = (props: Props) => {
  const [places, setPlaces] = useState([]);

  /**
   * Converts the set of places into a FeatureCollection.
   *
   * @type {FeatureCollection<Geometry, Properties>}
   */
  const data = useMemo(() => featureCollection(places), [places]);

  /**
   * Fetches the passed URLs and converts the response to JSON.
   *
   * @type {function(): *}
   */
  const onFetch = useCallback(() => (
    _.map(props.urls, (url) => fetch(url).then((res) => res.json()))
  ), [props.urls]);

  /**
   * Converts the passed list of records to Features and sets them on the state.
   *
   * @type {function(*): *}
   */
  const onLoad = useCallback((records) => (
    _.map(records, (record) => setPlaces((prevPlaces) => [
      ...prevPlaces,
      feature(record.geometry, record.properties)
    ]))
  ), []);

  /**
   * Fetch the place record from the passed URL.
   */
  useEffect(() => {
    Promise
      .all(onFetch())
      .then(onLoad);
  }, [onFetch, onLoad]);

  if (_.isEmpty(data?.features)) {
    return null;
  }

  return (
    <LocationMarkers
      animate={props.animate}
      buffer={props.buffer}
      data={data}
    />
  );
};

export default PlaceMarkers;
