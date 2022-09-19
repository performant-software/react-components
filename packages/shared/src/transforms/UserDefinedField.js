// @flow

import BaseTransform from './BaseTransform';

/**
 * Class for transforming user defined field objects for PUT/POST requests.
 */
class UserDefinedField extends BaseTransform {
  /**
   * Returns the user defined field payload keys.
   *
   * @returns {string[]}
   */
  getPayloadKeys(): Array<string> {
    return [
      'table_name',
      'column_name',
      'data_type',
      'required',
      'allow_multiple',
      'options'
    ];
  }

  /**
   * Returns the user defined field parameter name.
   *
   * @returns {string}
   */
  getParameterName(): string {
    return 'user_defined_field';
  }
}

const UserDefinedFieldTransform: UserDefinedField = new UserDefinedField();
export default UserDefinedFieldTransform;