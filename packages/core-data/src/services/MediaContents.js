// @flow

import BaseService from './BaseService';

/**
 * Class responsible for making API calls to the Core Data `media_contents` API endpoint.
 */
class MediaContents extends BaseService {
  /**
   * Returns the media contents route name.
   *
   * @returns {string}
   */
  getRoute() {
    return 'media_contents';
  }
}

export default MediaContents;
