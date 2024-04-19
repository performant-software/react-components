// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `places` API endpoint.
 */
class Places extends BaseService {
  /**
   * Returns the places route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'places';
  }
}

const PlacesService: Places = new Places();
export default PlacesService;
