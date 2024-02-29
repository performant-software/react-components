// @flow

/**
 * Returns the Google Maps API key environment variable.
 *
 * @returns {any}
 */
const getGoogleMapsApiKey = () => import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

/**
 * Returns the Map Tiler key environment variable.
 *
 * @returns {any}
 */
const getMapTilerKey = () => import.meta.env.VITE_MAP_TILER_KEY;

export default {
  getGoogleMapsApiKey,
  getMapTilerKey
};
