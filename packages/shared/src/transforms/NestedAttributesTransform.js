// @flow

import _ from 'underscore';
import FormUtils from '../utils/Form';

/**
 * Class for handling transforming nested attributes of a parent object. This class will handle transforming the
 * object into a payload to be sent to a POST/PUT request on an API. This class currently supports transforming into
 * a plain Javascript object or a FormData object.
 */
class NestedAttributesTransform {
  /**
   * Constructs a new BaseTransform object. This constructor should never be used directly.
   */
  constructor() {
    if (this.constructor === NestedAttributesTransform) {
      throw new TypeError('Abstract class "NestedAttributesTransform" cannot be instantiated directly.');
    }
  }

  /**
   * Returns the array of payload keys.
   *
   * @returns {*[]}
   */
  getPayloadKeys() {
    // Implemented in sub-class.
    return [];
  }

  /**
   * Appends the passed record's collection to the form data.
   *
   * @param formData
   * @param prefix
   * @param record
   * @param collection
   */
  toFormData(formData: FormData, prefix: string, record: any, collection: string) {
    _.each(record[collection], (item, index) => {
      _.each(this.getPayloadKeys(), (key) => {
        FormUtils.setAttribute(formData, `${prefix}[${collection}][${index}]`, item, key);
      });
    });
  }

  /**
   * Transforms the passed record's collection to a payload object.
   *
   * @param record
   * @param collection
   *
   * @returns {{[p: string]: *}}
   */
  toPayload(record: any, collection: string) {
    return {
      [collection]: _.map(record[collection],
        (item, index) => ({ ..._.pick(item, this.getPayloadKeys()), order: index }))
    };
  }
}

export default NestedAttributesTransform;
