// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `items` API endpoint.
 */
class Items extends BaseService {
  /**
   * Returns the items route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'items';
  }
}

export default Items;
