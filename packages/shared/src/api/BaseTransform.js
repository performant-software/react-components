// @flow

import _ from 'underscore';

/**
 * Class for handling transforming objects for PUT/POST requests. This class transforms records into
 * plain Javascript objects.
 */
class BaseTransform {
  /**
   * Constructs a new BaseTransform object. This constructor should never be used directly.
   */
  constructor() {
    if (this.constructor === BaseTransform) {
      throw new TypeError('Abstract class "BaseTransform" cannot be instantiated directly.');
    }
  }

  // protected

  /**
   * Returns the parameter name.
   *
   * @returns {string}
   */
  getParameterName(): string {
    // Implemented in sub-class
    return '';
  }

  /**
   * Returns the array of payload keys.
   *
   * @returns {*[]}
   */
  getPayloadKeys(): Array<string> {
    // Implemented in sub-class
    return [];
  }

  /**
   * Returns the object for POST/PUT requests as a plain Javascript object.
   *
   * @param item
   *
   * @returns any
   */
  toPayload(item: any): any {
    return {
      [this.getParameterName()]: _.pick(item, this.getPayloadKeys())
    };
  }
}

export default BaseTransform;
