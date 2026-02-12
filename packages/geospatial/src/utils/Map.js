// @flow

import { WarpedMapLayer } from '@allmaps/maplibre';
import {
  bbox,
  bboxPolygon,
  buffer,
  feature,
  featureCollection
} from '@turf/turf';
import _ from 'underscore';

const MIN_LATITUDE = -90;
const MAX_LATITUDE = 90;
const MIN_LONGITUDE = -180;
const MAX_LONGITUDE = 180;

/**
 * Adds the geo-referenced image layer to the passed map.
 *
 * @param map
 * @param layerId
 * @param options
 */
const addGeoreferenceLayer = (map, layerId, options = {}) => {
  const warpedMapLayer = new WarpedMapLayer(layerId);
  map.addLayer(warpedMapLayer);

  if (options.url) {
    warpedMapLayer.addGeoreferenceAnnotationByUrl(options.url);
  } else if (options.manifest) {
    warpedMapLayer.addGeoreferenceAnnotation(options.manifest);
  }

  if (options.opacity) {
    warpedMapLayer.setOpacity(options.opacity);
  }
};

/**
 * Returns a bounding box for the passed geometry (with optional buffer).
 *
 * @param data
 * @param bufferDistance
 *
 * @returns {BBox}
 */
const getBoundingBox = (data, bufferDistance = null) => {
  // Convert the GeoJSON into a bounding box
  const box = bbox(data);

  if (!validateBoundingBox(box)) {
    return null;
  }

  // Convert the bounding box to a polygon
  const polygon = bboxPolygon(box);

  // Create a buffer around the polygon (if a distance is provided)
  let polygonBuffer;

  if (bufferDistance) {
    polygonBuffer = buffer(polygon, bufferDistance, { units: 'miles' });
  } else {
    polygonBuffer = polygon;
  }

  // Convert the buffer to a bounding box
  return bbox(polygonBuffer);
};

/**
 * Removes a layer from the passed map.
 *
 * @param map
 * @param layerId
 *
 * @returns {*}
 */
const removeLayer = (map, layerId) => map && map.removeLayer(layerId);

/**
 * Wraps the passed record in a feature.
 *
 * @param record
 * @param item
 * @param geometry
 *
 * @returns {Feature<Geometry, {
 *  id: *,
 *  ccode: [],
 *  title: *,
 *  uuid: *,
 *  record_id: *,
 *  name: *,
 *  names: *,
 *  type: *,
 *  items: [*],
 *  url: *
 * }>}
 */
const toFeature = (record: any, item: any, geometry: any) => {
  const properties = {
    id: record.record_id,
    ccode: [],
    title: record.name,
    uuid: record.uuid,
    record_id: record.record_id,
    name: record.name,
    names: record.names?.map((toponym: string) => ({ toponym })),
    type: record.type,
    items: [item],
    url: record.url
  };

  const id = parseInt(record.record_id, 10);
  return feature(geometry, properties, { id });
};

/**
 * Returns a feature collection for the passed set of features.
 *
 * @param features
 *
 * @returns {FeatureCollection<Geometry, GeoJsonProperties>}
 */
const toFeatureCollection = (features: Array<any>) => featureCollection(features);

/**
 * Validates that the passed bounding box contains finite coordinates.
 *
 * @param boundingBox
 *
 * @returns {*}
 */
const validateBoundingBox = (boundingBox: Array<number>) => _.every(boundingBox, _.isFinite);

/**
 * Returns true if the passed coordinates are valid.
 *
 * @param coordinates
 *
 * @returns {boolean}
 */
const validateCoordinates = (coordinates) => {
  let valid = false;

  if (coordinates) {
    const [latitude, longitude] = coordinates;

    valid = latitude >= MIN_LATITUDE
      && latitude <= MAX_LATITUDE
      && longitude >= MIN_LONGITUDE
      && longitude <= MAX_LONGITUDE;
  }

  return valid;
};

export default {
  addGeoreferenceLayer,
  getBoundingBox,
  removeLayer,
  toFeature,
  toFeatureCollection,
  validateBoundingBox,
  validateCoordinates
};
