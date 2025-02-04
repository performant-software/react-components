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

/**
 * Returns the Typesense collection environment variable.
 *
 * @returns {any}
 */
const getTypesenseCollection = () => import.meta.env.VITE_TYPESENSE_COLLECTION;

/**
 * Returns the Typesense search key environment variable.
 *
 * @returns {any}
 */
const getTypesenseSearchKey = () => import.meta.env.VITE_TYPESENSE_SEARCH_KEY;

/**
 * Returns the Typesense search URL environment variable.
 *
 * @returns {any}
 */
const getTypesenseSearchUrl = () => import.meta.env.VITE_TYPESENSE_URL;

export default {
  getGoogleMapsApiKey,
  getMapTilerKey,
  getTypesenseCollection,
  getTypesenseSearchKey,
  getTypesenseSearchUrl
};
