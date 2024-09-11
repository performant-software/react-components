// @flow

import { useCallback, useRef } from 'react';

const DEFAULT_TIMEOUT = 500;

const useTimer = () => {
  const timer = useRef();

  const clearTimer = useCallback(() => {
    clearTimeout(timer.current);
  }, []);

  const setTimer = useCallback((callback, delay = DEFAULT_TIMEOUT) => {
    timer.current = setTimeout(callback, delay);
  }, []);

  return {
    clearTimer,
    setTimer
  };
};

export default useTimer;
