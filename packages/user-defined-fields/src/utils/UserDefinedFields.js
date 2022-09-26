// @flow

import _ from 'underscore';

type Item = {
  user_defined: ?string
};

type ErrorProps = {
  key: string,
  error: Array<string>
};

type ErrorReturn = {
  [key: string]: string
};

const KEY_USER_DEFINED = 'user_defined';

/**
 * Returns the error for the passed user defined field.
 *
 * @param key
 * @param error
 *
 * @returns {{}|{[p: string]: *}}
 */
const resolveError = ({ key, error }: ErrorProps): ErrorReturn => {
  if (key !== KEY_USER_DEFINED || _.isEmpty(error)) {
    return {};
  }

  const [field, message] = error;

  return {
    [`${KEY_USER_DEFINED}[${field}]`]: message
  };
};

/**
 * Returns the value for the user defined field at the passed key for the passed item.
 *
 * @param item
 * @param key
 *
 * @returns {*}
 */
const resolveValue = (item: Item, key: string): string => {
  let userDefined = {};

  if (_.isString(item.user_defined)) {
    userDefined = JSON.parse(item.user_defined || '{}');
  }

  return userDefined[key];
};

export default {
  resolveError,
  resolveValue
};
