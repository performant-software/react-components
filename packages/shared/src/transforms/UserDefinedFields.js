// @flow

import NestedAttributesTransform from './NestedAttributesTransform';

/**
 * Class for transforming user defined field nested objects for PUT/POST requests.
 */
class UserDefinedFields extends NestedAttributesTransform {
  /**
   * Returns the user defined field payload keys.
   *
   * @returns {string[]}
   */
  getPayloadKeys(): Array<string> {
    return [
      'id',
      'table_name',
      'column_name',
      'data_type',
      'required',
      'allow_multiple',
      '_destroy'
    ];
  }

  /**
   * Converts the user defined field collection for the passed object to form data to be sent on
   * the request as nested attributes.
   *
   * @param formData
   * @param prefix
   * @param record
   * @param collection
   */
  toFormData(formData: FormData, prefix: string, record: any, collection: string = 'user_defined_fields'): void {
    return super.toFormData(formData, prefix, record, collection);
  }

  /**
   * Converts the user defined field collection for the passed object to JSON to be sent on
   * the request as nested attributes.
   *
   * @param record
   * @param collectionName
   *
   * @returns {{[p: string]: *}}
   */
  toPayload(record: any, collectionName: string = 'user_defined_fields'): any {
    return super.toPayload(record, collectionName);
  }
}

const UserDefinedFieldsTransform: UserDefinedFields = new UserDefinedFields();
export default UserDefinedFieldsTransform;
