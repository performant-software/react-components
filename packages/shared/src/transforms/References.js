// @flow

import NestedAttributesTransform from './NestedAttributesTransform';

/**
 * Class for transforming references nested objects for PUT/POST requests.
 */
class References extends NestedAttributesTransform {
  /**
   * Returns the references payload keys.
   *
   * @returns {string[]}
   */
  getPayloadKeys(): Array<string> {
    return [
      'id',
      'reference_code_id',
      '_destroy'
    ];
  }
}

const ReferencesTransform: References = new References();
export default ReferencesTransform;
