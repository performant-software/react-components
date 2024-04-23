// @flow

import { faker } from '@faker-js/faker';
import Base from './Base';

/**
 * Class responsible for handling all people API requests for the Storybook Core Data API.
 */
class People extends Base {
  /**
   * Creates a person item.
   *
   * @returns {{last_name: string, middle_name: string, uuid: string, first_name: string}}
   */
  buildItem() {
    const firstName = faker.person.firstName();
    const middleName = faker.person.middleName();
    const lastName = faker.person.lastName();

    return {
      uuid: faker.string.uuid(),
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName
    };
  }

  /**
   * Returns the people parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    return 'people'
  }

  getShowAttribute() {
    return 'person';
  }
}

export default new People();
