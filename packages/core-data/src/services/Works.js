// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `works` API endpoint.
 */
class Works extends BaseService {
  /**
   * Returns the works route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'works';
  }
}

export default Works;
