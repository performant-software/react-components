// @flow

import { useEffect, useRef } from 'react';

/**
 * Stores the previous value of the passed parameter.
 *
 * @param value
 *
 * @returns {*}
 */
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default {
  usePrevious
};
