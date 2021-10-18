// @flow

import _ from 'underscore';

type OptionsProps = {
  emptyValues: Array<any>,
  ignoreHtml: boolean
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
  ignoreHtml: true
};

const HTML_REGEX = /(<([^>]+)>)/gi;

/**
 * Returns true if the passed two arguments as deep equal. This function will perform a recursive check against all of
 * the keys in the objects.
 *
 * @param a
 * @param b
 *
 * @returns {boolean}
 */
export const isEqual = (a: any, b: any, userOptions: OptionsProps = {}) => {
  const options = _.defaults(userOptions, DEFAULT_OPTIONS);

  // Check equality, consider empty strings and "null" values as equal
  if (a === b || (_.contains(options.emptyValues, a) && _.contains(options.emptyValues, b))) {
    return true;
  }

  // If we're ignoring HTML, compare the string values with HTML tags removed
  if (options.ignoreHtml && _.isString(a) && _.isString(b) && a.replace(HTML_REGEX, '') === b.replace(HTML_REGEX, '')) {
    return true;
  }

  if (a !== null && typeof a === 'object' && b !== null && typeof b === 'object') {
    const aKeys = _.keys(a);
    const bKeys = _.keys(b);

    // If the objects contain different number of keys, return false
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    // Recursively check each key for equality
    let equal = true;

    _.each(_.keys(a), (key) => {
      if (!(_.has(b, key) && isEqual(a[key], b[key]))) {
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

export default {

};
