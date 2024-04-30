// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

class Items extends Base {
  /**
   * Returns a single item.
   */
  buildItem() {
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
  getIndexAttribute() {
    return 'items';
  }

  getShowAttribute() {
    return 'item';
  }
}

export default new Items();
