// @flow

import NestedAttributesTransform from './NestedAttributesTransform';

class References extends NestedAttributesTransform {
  getPayloadKeys(): Array<string> {
    return [
      'reference_code_id'
    ];
  }
}

const ReferencesTransform: References = new References();
export default ReferencesTransform;
