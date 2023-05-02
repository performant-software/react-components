// @flow

import _ from 'underscore';
import i18n from '../i18n/i18n';

type ErrorProps = {
  key: string,
  error: Array<string>
};

type ErrorReturn = {
  [key: string]: string
};

const KEY_USER_DEFINED = 'user_defined';

const FIELD_DELIMITER = '.';

/**
 * Returns the error for the passed user defined field.
 *
 * @param key
 * @param error
 *
 * @returns {{}|{[p: string]: *}}
 */
const resolveError = ({ key, error }: ErrorProps): ErrorReturn => {
  const errors = {};

  /**
   * Resolve errors returned when creating user defined fields.
   */
  if (key && key.startsWith(KEY_USER_DEFINED) && _.contains(key, FIELD_DELIMITER)) {
    const [, field] = key.split(FIELD_DELIMITER);
    _.extend(errors, { [`${KEY_USER_DEFINED}[${field}]`]: `${field} ${error}` });
  }

  /**
   * Resolve errors returned when entering data into user field fields.
   */
  if (key === KEY_USER_DEFINED && !_.isEmpty(error)) {
    const [field, message] = error;
    _.extend(errors, { [`${KEY_USER_DEFINED}[${field}]`]: message });
  }

  return errors;
};

/**
 * Validates the passed user defined field.
 *
 * @param item
 *
 * @returns {{}}
 */
const validateUserDefinedField = (item) => {
  const errors = {};

  if (!item.order) {
    _.extend(errors, { order: i18n.t('UserDefinedFields.errors.numeric', { name: 'order' }) });
  }

  return errors;
};

export default {
  resolveError,
  validateUserDefinedField
};
