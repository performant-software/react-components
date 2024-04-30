// @flow

import Base from './Base';
import { faker } from '@faker-js/faker';

/**
 * Class responsible for handling all taxonomies API requests for the Storybook Core Data API.
 */
class Taxonomies extends Base {
  /**
   * Creates a taxonomy item.
   *
   * @returns {{name: string, uuid: string}}
   */
  buildItem() {
    return {
      uuid: faker.string.uuid(),
      name: faker.location.country()
    };
  }

  /**
   * Returns the taxonomies parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'taxonomies';
  }

  getShowAttribute() {
    return 'taxonomy';
  }
}

export default new Taxonomies();
