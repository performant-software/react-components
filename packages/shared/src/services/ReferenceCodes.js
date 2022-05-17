// @flow

import BaseService from './BaseService';

/**
 * Class responsible for handling all reference code API requests.
 */
class ReferenceCodes extends BaseService {
  /**
   * Returns the reference codes base URL.
   *
   * @returns {string}
   */
  getBaseUrl() {
    return '/controlled_vocabulary/reference_codes';
  }

  /**
   * Returns the reference codes transform object.
   *
   * @returns {{}}
   */
  getTransform() {
    return { }; // PUT/POST routes not implemented
  }
}

export default new ReferenceCodes();
