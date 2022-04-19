// @flow

/**
 * Returns a random integer between the passed min and max values (inclusive).
 *
 * @param min
 * @param max
 *
 * @returns {number}
 */
const getRandomInt = (min: number, max: number) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export default {
  getRandomInt
};
