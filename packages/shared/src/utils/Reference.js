// @flow

import _ from 'underscore';

const LIST_DELIMITER = ', ';

/**
 * Returns the view value for the  passed array of references.
 *
 * @param references
 *
 * @returns {*}
 */
const getViewValue = (references) => _.map(
  _.filter(references, (reference) => !reference._.destroy),
  (reference) => reference.reference_code?.name
).join(LIST_DELIMITER);

export default {
  getViewValue
};
