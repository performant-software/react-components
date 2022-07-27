// @flow

import NestedAttributesTransform from './NestedAttributesTransform';

class References extends NestedAttributesTransform {
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
