// @flow

import { bbox, bboxPolygon, buffer } from '@turf/turf';

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

export default {
  getBoundingBox
};
