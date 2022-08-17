// @flow

import _ from 'underscore';
import BaseTransform from './BaseTransform';
import StringUtils from '../utils/String';

/**
 * Class for handling transforming records for PUT/POST requests. This class transforms objects in FormData. This
 * class is useful if your model contains binary data to be uploaded.
 */
class FormDataTransform extends BaseTransform {
  /**
   * Converts the passed records to a formData object to be sent on PUT/POST requests.
   *
   * @param record
   * @param attributes
   *
   * @returns {FormData}
   */
  // eslint-disable-next-line no-unused-vars
  toPayload(record: any, attributes: any = {}) {
    const formData = new FormData();

    _.each(this.getPayloadKeys(), (key) => {
      formData.append(`${this.getParameterName()}[${key}]`, StringUtils.toString(record[key]));
    });

    return formData;
  }
}

export default FormDataTransform;
