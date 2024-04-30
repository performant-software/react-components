// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `people` API endpoint.
 */
class People extends BaseService {
  /**
   * Returns the people route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'people';
  }
}

export default People;
