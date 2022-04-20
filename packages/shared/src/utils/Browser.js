// @flow

/**
 * Returns true if the window object is present.
 *
 * @returns {boolean}
 */
export const isBrowser = () => (typeof window !== 'undefined');
