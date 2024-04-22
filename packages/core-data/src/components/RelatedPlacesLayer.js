// @flow

import { LocationMarkers } from '@performant-software/geospatial';
import { feature, featureCollection } from '@turf/turf';
import React, { useMemo } from 'react';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Callback fired on mount to load the list of related places.
   */
  onLoad: () => Promise<any>
};

/**
 * This component renders a map layer for the provided related places.
 */
const RelatedPlacesLayer = ({ onLoad, ...props }: Props) => {
  const { data: { places } = {}, loading } = useLoader(onLoad, []);

  /**
   * Extracts the GeoJSON data from the list of places.
   */
  const geometries = useMemo(() => _.compact(_.map(places, (place) => place.place_geometry?.geometry_json), [places]));

  /**
   * Converts the GeoJSON data to a feature collection.
   *
   * @type {FeatureCollection<Geometry, Properties>}
   */
  const data = useMemo(() => featureCollection(_.map(geometries, (geometry) => feature(geometry))), [geometries]);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (_.isEmpty(places)) {
    return null;
  }

  return (
    <LocationMarkers
      {...props}
      data={data}
    />
  );
};

export default RelatedPlacesLayer;
