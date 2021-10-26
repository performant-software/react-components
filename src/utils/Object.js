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
  ignoreHtml: true,
  ignoreWhitespace: true
};

const HTML_REGEX = /(<([^>]+)>)/gi;
const WHITESPACE_REGEX = /\s\s+/g;

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
