// @flow

import { BaseService } from '@performant-software/shared-components';
import UserDefinedField from '../transforms/UserDefinedField';

/**
 * Class responsible for handling all user defined field API requests.
 */
class UserDefinedFields extends BaseService {
  /**
   * Calls the /api/user_defined_fields/data_types API endpoint.
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  fetchDataTypes(): Promise<any> {
    return this.getAxios().get('/user_defined_fields/data_types');
  }

  /**
   * Calls the /api/user_defined_fields/tables API endpoint.
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  fetchTables(): Promise<any> {
    return this.getAxios().get('/user_defined_fields/tables');
  }

  /**
   * Returns the user defined fields base URL.
   *
   * @returns {string}
   */
  getBaseUrl(): string {
    return '/user_defined_fields/user_defined_fields';
  }

  /**
   * Returns the user defined fields transform object.
   *
   * @returns {UserDefinedField}
   */
  getTransform(): any {
    return UserDefinedField;
  }
}

const UserDefinedFieldsService: UserDefinedFields = new UserDefinedFields();
export default UserDefinedFieldsService;
