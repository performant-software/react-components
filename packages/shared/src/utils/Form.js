// @flow

import _ from 'underscore';
import StringUtils from './String';

/**
 * Sets the passed attribute of the passed item on the form data object. This function will convert the object to
 * an array if necessary.
 *
 * @param formData
 * @param prefix
 * @param item
 * @param attribute
 */
const setAttribute = (formData, prefix, item, attribute) => {
  const value = item[attribute];

  if (_.isArray(value)) {
    _.each(value, (val, index) => formData.append(`${prefix}[${attribute}][${index}]`, StringUtils.toString(val)));
  } else if (_.isObject(value) && !_.isFunction(value)) {
    _.each(_.keys(value), (key) => formData.append(`${prefix}[attribute][${key}]`, StringUtils.toString(value[key])));
  } else {
    formData.append(`${prefix}[${attribute}]`, StringUtils.toString(value));
  }
};

export default {
  setAttribute
};
