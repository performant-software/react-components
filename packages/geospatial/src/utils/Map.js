// @flow

import { bbox, bboxPolygon, buffer } from '@turf/turf';

const MIN_LATITUDE = -90;
const MAX_LATITUDE = 90;
const MIN_LONGITUDE = -180;
const MAX_LONGITUDE = 180;

/**
 * Returns a bounding box for the passed geometry (with optional buffer).
 *
 * @param geometry
 * @param bufferDistance
 *
 * @returns {BBox}
 */
const getBoundingBox = (geometry, bufferDistance = null) => {
  // Convert the GeoJSON into a bounding box
  const box = bbox(geometry);

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
  getBoundingBox,
  validateCoordinates
};
