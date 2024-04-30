// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `instances` API endpoint.
 */
class Instances extends BaseService {
  /**
   * Returns the items route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'instances';
  }
}

export default Instances;
