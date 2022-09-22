// @flow

import { BaseService } from '@performant-software/shared-components';
import ReferenceTable from '../transforms/ReferenceTable';

/**
 * Class responsible for handling all reference table API requests.
 */
class ReferenceTables extends BaseService {
  /**
   * Calls the find_by_key API end point for reference tables.
   *
   * @param key
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  fetchByKey(key) {
    return this.getAxios().get(`${this.getBaseUrl()}/find_by_key`, { params: { key } });
  }

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
