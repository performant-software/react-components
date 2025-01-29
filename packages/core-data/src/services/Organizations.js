// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `organizations` API endpoint.
 */
class Organizations extends BaseService {
  /**
   * Returns the organizations route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'organizations';
  }
}

export default Organizations;
