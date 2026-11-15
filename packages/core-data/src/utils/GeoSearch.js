// @flow

type LngLat = {
  lat: number,
  lng: number
};

/**
 * Says whether a search can be filtered by the passed map bounds.
 *
 * Typesense reads the four corners of the bounds as a polygon on the globe. Once the bounds span half of the globe
 * or more from west to east, that polygon covers the opposite side of the globe: the search returns places outside
 * the bounds and none of the places inside them. Longitudes beyond 180 or -180 are not the problem, because bounds
 * that cross the antimeridian filter correctly as long as they are narrower than 180 degrees.
 *
 * @param northEast  The north-east corner of the bounds.
 * @param southWest  The south-west corner of the bounds.
 *
 * @returns {boolean} `true` when the bounds span less than 180 degrees of longitude.
 */
export const canFilterByBounds = (northEast: LngLat, southWest: LngLat): boolean => (
  northEast.lng - southWest.lng < 180
);
