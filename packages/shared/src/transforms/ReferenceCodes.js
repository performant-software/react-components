// @flow

import NestedAttributesTransform from './NestedAttributesTransform';

/**
 * Class for transforming reference codes nested objects for PUT/POST requests.
 */
class ReferenceCodes extends NestedAttributesTransform {
  /**
   * Returns the reference codes payload keys.
   *
   * @returns {string[]}
   */
  getPayloadKeys(): Array<string> {
    return [
      'id',
      'name',
      '_destroy'
    ];
  }

  /**
   * Calls the super method with a default value for the collection name.
   *
   * @param record
   * @param collection
   *
   * @returns {{[p: string]: *}}
   */
  toPayload(record: any, collection: string = 'reference_codes') {
    return super.toPayload(record, collection);
  }
}

export default new ReferenceCodes();
