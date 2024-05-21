// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

class Works extends Base {
  /**
   * Returns a single work.
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
   * Returns the works parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'works';
  }

  getShowAttribute() {
    return 'work';
  }
}

export default new Works();
