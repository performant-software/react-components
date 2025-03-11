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
const toFeature = (place) => feature(
  place?.place_geometry?.geometry_json,
  _.omit(place, 'place_geometry'),
  { id: place.id }
);

/**
 * Converts the passed collection of places to a feature collection.
 *
 * @param places
 *
 * @returns {FeatureCollection<Geometry, Properties>}
 */
const toFeatureCollection = (places) => featureCollection(_.map(places, (place) => toFeature(place)));

export default {
  toFeature,
  toFeatureCollection
};
