// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Form } from 'semantic-ui-react';
import ReferenceCodeFormDropdown from '../../../controlled-vocabulary/src/components/ReferenceCodeFormDropdown';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Controlled Vocabulary/ReferenceCodeFormDropdown',
  decorators: [withKnobs]
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
