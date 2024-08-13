// @flow

/**
 * Returns a random integer between the min (inclusive) and max (exclude) values.
 *
 * @param min
 * @param max
 *
 * @returns {number}
 */
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export default {
  getRandomInt
};
