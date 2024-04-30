// @flow

import { faker } from '@faker-js/faker';
import _ from 'underscore';
import Base from './Base';
import StateBoundaries from '../../../src/data/StateBoundaries.json';

/**
 * Class responsible for handling all places API requests for the Storybook Core Data API.
 */
class Places extends Base {
  /**
   * Creates a place item.
   *
   * @returns {{
   *   user_defined: {},
   *   name: string,
   *   place_names: [{
   *     name: string,
   *     primary: boolean
   *   }],
   *   place_geometry: {
   *     geometry_json: {
   *       coordinates: number[],
   *       type: string
   *     }
   *   },
   *   uuid: string
   * }}
   */
  buildItem() {
    const uuid = faker.string.uuid();
    const name = faker.location.city();

    const boundary = this.getBoundary();
    const latitude = faker.location.latitude({ min: boundary.min_lat, max: boundary.max_lat });
    const longitude = faker.location.longitude({ min: boundary.min_lng, max: boundary.max_lng });

    const userDefined = {};
    const fields = faker.number.int({ min: 1, max: 10 });

    _.times(fields, () => {
      userDefined[faker.string.uuid()] = {
        label: faker.lorem.words({ min: 1, max: 3 }),
        value: faker.lorem.words({ min: 1, max: 5 })
      };
    });

    return {
      uuid,
      name,
      place_names: [{
        name,
        primary: true
      }],
      place_geometry: {
        geometry_json: {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      },
      user_defined: userDefined
    };
  }

  /**
   * Returns the places parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'places';
  }

  getShowAttribute() {
    return 'place';
  }

  /**
   * Returns the boundary for the place (with optional state).
   *
   * @param state
   *
   * @returns {{max_lat, min_lng, min_lat, max_lng}|*}
   */
  getBoundary(state) {
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
  }
}

export default new Places();
