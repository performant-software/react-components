// @flow

import { Form as FormUtils } from '@performant-software/shared-components';
import _ from 'underscore';

/**
 * Class responsible for transforming fieldable data.
 */
class Fieldable {
  /**
   * Converts the "user_defined" data for the passed fieldable item into form data.
   *
   * @param formData
   * @param prefix
   * @param item
   */
  toFormData(formData, prefix, item) {
    const { user_defined: userDefined } = item;

    _.each(_.keys(userDefined), (key) => {
      FormUtils.setAttribute(formData, `${prefix}[user_defined]`, userDefined, key);
    });
  }
}

const FieldableTransform: Fieldable = new Fieldable();
export default FieldableTransform;
