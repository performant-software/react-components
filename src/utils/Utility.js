// @flow

/**
 * Returns true if passed value is a promise (i.e, has a .then method)
 *
 * @param *
 *
 * @returns {boolean}
 */
const isPromise = (value: any) => !!value && typeof value === 'object' && typeof value.then === 'function';

export default {
  isPromise
};
