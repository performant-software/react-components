// @flow

import _ from 'underscore';

/**
 * Base class for the Storybook version of the Core Data API.
 */
class Base {
  /**
   * Returns a single item.
   */
  fetchItem() {
    return {
      [this.getShowAttribute()]: this.buildItem()
    };
  }

  /**
   * Returns a list of items for the passed count.
   *
   * @param count
   *
   * @returns {{[p: string]: [], list: {pages: number, count, page: number}}}
   */
  fetchItems(count) {
    const items = [];

    _.times(count, () => {
      items.push(this.buildItem());
    });

    return {
      [this.getIndexAttribute()]: items,
      list: {
        count,
        page: 1,
        pages: 1
      }
    };
  }

  // Protected

  buildItem() {
    // Implemented in sub-classes
    return {};
  }

  /**
   * Returns the parameter name.
   *
   * @returns {string}
   */
  getIndexAttribute() {
    // Implemented in sub-classes
    return '';
  }

  getShowAttribute() {
    // Implemented in sub-classes
    return '';
  }
}

export default Base;
