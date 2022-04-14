// @flow

const DEFAULT_TIMEOUT = 500;

/**
 * The timer class encapsulates the logic for setting and clearing a timeout. This is particularly useful for
 * keydown/keyup events when we only want to perform an action after the user has finished typing.
 */
class Timer {
  timeout: TimeoutID | null;

  constructor() {
    this.timeout = null;
  }

  /**
   * Clears the search timer.
   */
  clearSearchTimer() {
    clearTimeout(this.timeout);
  }

  /**
   * Sets the search timer.
   */
  setSearchTimer(onTimeout: () => void) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(onTimeout, DEFAULT_TIMEOUT);
  }
}

export default new Timer();
