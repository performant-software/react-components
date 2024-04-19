// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

/**
 * Class responsible for handling all organizations API requests for the Storybook Core Data API.
 */
class Organizations extends Base {
  /**
   * Creates an organization item.
   *
   * @returns {{relationship_type: string, name: string, uuid: string}}
   */
  createItem() {
    return {
      relationship_type: 'Organizations',
      uuid: faker.string.uuid(),
      name: faker.company.name()
    }
  }

  /**
   * Returns the organizations parameter name.
   *
   * @returns {string}
   */
  getParameterName() {
    return 'organizations';
  }
}

export default new Organizations();
