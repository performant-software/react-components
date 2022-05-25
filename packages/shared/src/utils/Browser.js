// @flow

/**
 * Returns true if the window object is present.
 *
 * @returns {boolean}
 */
const isBrowser = () => (typeof window !== 'undefined');

export default {
  isBrowser
};
