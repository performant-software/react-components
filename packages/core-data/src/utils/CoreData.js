// @flow

import { feature, featureCollection } from '@turf/turf';
import _ from 'underscore';

/**
 * Converts the passed place to a feature.
 *
 * @param place
 *
 * @returns {Feature<*, *>}
 */
const toFeature = (place, index) => {
  const geometry = place?.place_geometry?.geometry_json;
  const placeData = _.omit(place, 'place_geometry');
  const originalProperties = place?.place_geometry?.properties;
  const options = { id: place.id || index };

  const properties = {
    ...placeData,
    originalProperties
  };

  return feature(geometry, properties, options);
};

/**
 * Converts the passed collection of places to a feature collection.
 *
 * @param places
 *
 * @returns {FeatureCollection<Geometry, Properties>}
 */
const toFeatureCollection = (places) => featureCollection(_.map(places, toFeature));

export default {
  toFeature,
  toFeatureCollection,
};
