// @flow

import _ from 'underscore';

/**
 * Returns the view value for the  passed array of references.
 *
 * @param references
 *
 * @returns {*}
 */
const getViewValue = (references) => _.map(references, (reference) => reference.reference_code?.name);

export default {
  getViewValue
};
