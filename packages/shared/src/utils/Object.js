// @flow

import _ from 'underscore';

type OptionsProps = {
  /**
   * List of values to consider "empty", these values will be treated as equivalent.
   */
  emptyValues?: Array<any>,

  /**
   * If true, HTML tags will be stripped from string values.
   */
  ignoreHtml?: boolean,

  /**
   * If true, whitespace will be stripped from string values.
   */
  ignoreWhitespace?: boolean,

  /**
   * If true, "empty" keys/values will be removed from objects prior to equality check.
   */
  removeEmptyValues?: boolean
};

const EMPTY_VALUES = [
  '',
  null,
  undefined,
  [],
  {}
];

const DEFAULT_OPTIONS = {
  emptyValues: EMPTY_VALUES,
  ignoreHtml: true,
  ignoreWhitespace: true,
  removeEmptyValues: false
};

const HTML_REGEX = /(<([^>]+)>)/gi;
const WHITESPACE_REGEX = /\s\s+/g;

/**
 * Returns the value at the passed path for the passed object.
 *
 * @param object
 * @param path
 *
 * @returns {*}
 */
const getNestedValue = (object: any, path: string) => {
  const paths = path.split('.');

  let value = object;

  _.each(paths, (attr) => {
    if (_.isArray(value)) {
      value = _.map(value, (entry) => _.get(entry, attr));
    } else {
      value = _.get(value, attr);
    }
  });

  return value;
};

/**
 * Returns a new object with the nested attribute at the given path
 * replaced with the provided value.
 *
 * @param object
 * @param path
 *
 * @returns {*}
 */
const setNestedValue = (object: any, path: string, value: any) => {
  const paths = path.split('.');

  const cloned = _.clone(object);
  let toUpdate = cloned;

  for (let i = 0; i < paths.length; i += 1) {
    if (i < paths.length - 1) {
      if (_.isArray(toUpdate[paths[i]])) {
        toUpdate = _.map(toUpdate, (entry) => _.get(entry, paths[i]));
      } else {
        toUpdate = _.get(toUpdate, paths[i]);
      }
    } else {
      toUpdate[paths[i]] = value;
    }
  }

  return cloned;
};

/**
 * Returns true if the passed value is considered "empty".
 *
 * @param value
 *
 * @returns {boolean|*}
 */
const isEmpty = (value: any) => {
  // If the value is an object or array, use underscore's isEmpty check.
  if (_.isObject(value) || _.isArray(value)) {
    return _.isEmpty(value);
  }

  return !value;
};

/**
 * Returns true if the passed two arguments as deep equal. This function will perform a recursive check against all of
 * the keys in the objects.
 *
 * @param a
 * @param b
 *
 * @returns {boolean}
 */
const isEqual = (a: any, b: any, userOptions: OptionsProps = {}) => {
  const options = _.defaults(userOptions, DEFAULT_OPTIONS);

  // Check equality, consider empty strings and "null" values as equal
  if (a === b || (_.contains(options.emptyValues, a) && _.contains(options.emptyValues, b))) {
    return true;
  }

  // Deep string comparison
  if (_.isString(a) && _.isString(b)) {
    let aString = a;
    let bString = b;

    // Remove superfluous whitespace
    if (options.ignoreWhitespace) {
      aString = a.replace(WHITESPACE_REGEX, ' ');
      bString = b.replace(WHITESPACE_REGEX, ' ');
    }

    // If we're ignoring HTML, compare the string values with HTML tags removed
    if (options.ignoreHtml) {
      aString = aString.replace(HTML_REGEX, '');
      bString = bString.replace(HTML_REGEX, '');
    }

    if (aString === bString) {
      return true;
    }
  }

  // Test function equality using the toString method
  if (_.isFunction(a) && _.isFunction(b) && a.toString() === b.toString()) {
    return true;
  }

  if (a !== null && typeof a === 'object' && b !== null && typeof b === 'object') {
    let aObject = a;
    let bObject = b;

    if (options.removeEmptyValues) {
      aObject = _.omit(a, (value) => _.contains(options.emptyValues, value));
      bObject = _.omit(b, (value) => _.contains(options.emptyValues, value));
    }

    const aKeys = _.keys(aObject);
    const bKeys = _.keys(bObject);

    // If the objects contain different number of keys, return false
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    // Recursively check each key for equality
    let equal = true;

    _.each(_.keys(aObject), (key) => {
      if (!(_.has(bObject, key) && isEqual(aObject[key], bObject[key]))) {
        equal = false;
      }
    });

    // If any of the recursive keys are not equal, return false
    if (!equal) {
      return false;
    }

    // If we've made it this far, we've checked the equality of all the keys in both objects, return true
    return true;
  }

  return false;
};

const isPromise = (value: any) => !!value && typeof value === 'object' && typeof value.then === 'function';

/**
 * Returns a copy of the passed value (presumably an object) without the passed attribute included. This
 * function is recursive and will remove the attribute from nested objects and arrays.
 *
 * @param value
 * @param attribute
 *
 * @returns {*}
 */
const without = (value: any, attribute: string) => {
  if (_.isArray(value)) {
    return _.map(value, (entry) => without(entry, attribute));
  }

  if (_.isObject(value)) {
    return _.mapObject(_.omit(value, attribute), (v) => without(v, attribute));
  }

  return value;
};

export default {
  getNestedValue,
  setNestedValue,
  isEmpty,
  isEqual,
  isPromise,
  without
};
