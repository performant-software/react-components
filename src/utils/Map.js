// @flow

/**
 * Returns the numeric latitude and longitude for the passed coordinates.
 *
 * @param coords
 *
 * @returns {*}
 */
const getPosition = (coords: { lat: any, lng: any }) => {
  let position;

  if (coords) {
    const lat = Number.parseFloat(coords.lat);
    const lng = Number.parseFloat(coords.lng);

    if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
      position = { lat, lng };
    }
  }

  return position;
};

export default {
  getPosition
};
