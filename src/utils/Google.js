// @flow

/**
 * Returns the google maps URL for the passed API key.
 *
 * @param apiKey
 *
 * @returns {string}
 */
const getGoogleMapsUrl = (apiKey: string) => `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${apiKey}&libraries=places`;

export default {
  getGoogleMapsUrl
};
