// @flow

import _ from 'underscore';

/**
 * Base class for the Storybook version of the Core Data API.
 */
class Base {
  /**
   * Returns a single item.
   */
  createItem() {
    // Implemented in sub-classes
  }

  /**
   * Returns a list of items for the passed count.
   *
   * @param count
   *
   * @returns {{[p: string]: [], list: {pages: number, count, page: number}}}
   */
  createItems(count) {
    const items = [];

    _.times(count, () => {
      items.push(this.createItem());
    });

    return {
      [this.getParameterName()]: items,
      list: {
        count,
        page: 1,
        pages: 1
      }
    };
  }

  // Protected

  /**
   * Returns the parameter name.
   *
   * @returns {string}
   */
  getParameterName() {
    // Implemented in sub-classes
    return '';
  }
}

export default Base;
