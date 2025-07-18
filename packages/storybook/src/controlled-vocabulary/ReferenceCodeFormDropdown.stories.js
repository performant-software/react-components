// @flow

import React from 'react';
import { action } from 'storybook/actions';
import { Form } from 'semantic-ui-react';
import ReferenceCodeFormDropdown from '../../../controlled-vocabulary/src/components/ReferenceCodeFormDropdown';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Controlled Vocabulary/ReferenceCodeFormDropdown',
  component: ReferenceCodeFormDropdown
};

export const Default = useDragDrop(() => (
  <Form>
    <ReferenceCodeFormDropdown
      fluid
      label='Locations'
      required
      onChange={action('change')}
      referenceTable='locations'
      value=''
    />
  </Form>
));
