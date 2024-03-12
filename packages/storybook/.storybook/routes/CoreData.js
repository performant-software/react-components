// @flow

import { faker } from '@faker-js/faker';
import _ from 'underscore';
import StateBoundaries from '../../src/data/StateBoundaries.json';

/**
 * Returns the min/max latitude/longitude for the passed state. If no state is provided, we'll compute
 * the boundary of all states.
 *
 * @param state
 *
 * @returns {{max_lat, min_lng, min_lat, max_lng}|*}
 */
const getBoundary = (state = null) => {
  if (state) {
    return StateBoundaries[state];
  }

  let minLatitude;
  let maxLatitude;
  let minLongitude;
  let maxLongitude;

  const keys = _.keys(StateBoundaries);
  _.each(keys, (key) => {
    const data = StateBoundaries[key];

    if (!minLatitude || data.min_lat < minLatitude) {
      minLatitude = data.min_lat;
    }

    if (!maxLatitude || data.max_lat > maxLatitude) {
      maxLatitude = data.max_lat;
    }

    if (!minLongitude || data.min_lng < minLongitude) {
      minLongitude = data.min_lng;
    }

    if (!maxLongitude || data.max_lng > maxLongitude) {
      maxLongitude = data.max_lng;
    }
  });

  return {
    min_lat: minLatitude,
    max_lat: maxLatitude,
    min_lng: minLongitude,
    max_lng: maxLongitude
  };
};

/**
 * Creates a sample place record in the Linked Places format.
 *
 * @returns {{
 *  names: [{
 *    toponym: string
 *  }],
 *  geometry: {
 *    coordinates: number[],
 *    type: string
 *  },
 *  '@id': string,
 *  type: string,
 *  properties: {
 *    ccode: *[],
 *    record_id: string,
 *    title: string,
 *    uuid: string
 *  }
 * }}
 */
const createPlace = () => {
  const uuid = faker.string.uuid();
  const title = faker.location.city();

  const boundary = getBoundary();
  const latitude = faker.location.latitude({ min: boundary.min_lat, max: boundary.max_lat });
  const longitude = faker.location.longitude({ min: boundary.min_lng, max: boundary.max_lng });

  return {
    '@id': `https://example.com/${uuid}`,
    type: 'Place',
    properties: {
      ccode: [],
      record_id: faker.string.numeric(7),
      title,
      uuid
    },
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude]
    },
    names: [{
      toponym: title
    }]
  };
};

/**
 * Adds the `/core_data/places` and `/core_data/places/:id` routes.
 *
 * @param router
 */
const addRoutes = (router) => {
  router.get('/core_data/places', (request, response) => {
    const { query } = request;

    let number = 1;
    if (query.number) {
      number = query.number;
    }

    const places = [];

    _.times(number, () => places.push(createPlace()));

    response.send(places);
    response.end();
  });

  router.get('/core_data/places/:id', (request, response) => {
    response.send(createPlace());
    response.end();
  });
};

export default {
  addRoutes
};
