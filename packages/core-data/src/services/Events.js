// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `events` API endpoint.
 */
class Events extends BaseService {
  /**
   * Returns the events route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'events';
  }
}

export default new Events();
