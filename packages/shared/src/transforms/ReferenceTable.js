// @flow

import _ from 'underscore';
import BaseTransform from './BaseTransform';
import ReferenceCodes from './ReferenceCodes';

type ReferenceTableType = {
  id: number,
  name: string,
  key: string
};

/**
 * Class for transforming reference table objects for PUT/POST requests.
 */
class ReferenceTable extends BaseTransform {
  /**
   * Returns the reference table parameter name.
   *
   * @returns {string}
   */
  getParameterName() {
    return 'reference_table';
  }

  /**
   * Returns the reference table payload keys.
   *
   * @returns {string[]}
   */
  getPayloadKeys() {
    return [
      'name',
      'key'
    ];
  }

  /**
   * Converts the passed reference table object to JSON for PUT/POST requests.
   *
   * @param referenceTable
   *
   * @returns {*}
   */
  toPayload(referenceTable: ReferenceTableType) {
    return {
      reference_table: {
        ..._.pick(referenceTable, this.getPayloadKeys()),
        ...ReferenceCodes.toPayload(referenceTable)
      }
    };
  }
}

export default new ReferenceTable();
