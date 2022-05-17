// @flow

import BaseService from './BaseService';
import ReferenceTable from '../transforms/ReferenceTable';

/**
 * Class responsible for handling all reference table API requests.
 */
class ReferenceTables extends BaseService {
  /**
   * Returns the reference tables base URL.
   *
   * @returns {string}
   */
  getBaseUrl() {
    return '/controlled_vocabulary/reference_tables';
  }

  /**
   * Returns the reference table transform object.
   *
   * @returns {ReferenceTable}
   */
  getTransform() {
    return ReferenceTable;
  }
}

export default new ReferenceTables();
