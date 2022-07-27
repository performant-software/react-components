// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Form } from 'semantic-ui-react';
import ReferenceCodeFormDropdown from '../../../semantic-ui/src/components/ReferenceCodeFormDropdown';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/ReferenceCodeFormDropdown',
  decorators: [withA11y, withKnobs]
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
