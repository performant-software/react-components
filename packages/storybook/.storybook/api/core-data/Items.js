// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

class Items extends Base {
  /**
   * Returns a single item.
   */
  createItem() {
    return {
      uuid: faker.string.uuid(),
      primary_name: {
        name: {
          name: faker.lorem.words({ min: 1, max: 3 })
        }
      }
    };
  }

  /**
   * Returns the items parameter name.
   *
   * @returns {string}
   */
  getParameterName() {
    return 'items';
  }
}

export default new Items();
