// @flow

/**
 * Returns a shuffled clone of the passed array.
 * @param {*} arr
 * @returns arr
 */
export const shuffle = (arr: Array<any>) => {
  const clone = [...arr];
  for (let i = clone.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }

  return clone;
};
