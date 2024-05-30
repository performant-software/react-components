// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

class Instances extends Base {
  /**
   * Returns a single instance.
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
   * Returns the instances parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'instances';
  }

  getShowAttribute() {
    return 'instance';
  }
}

export default new Instances();
