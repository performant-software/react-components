import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import EditPage from '../../../src/semantic-ui/EditPage';

export default {
  title: 'Components/Semantic UI/EditPage',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <EditPage
    onClose={action('close')}
    onSave={action('save')}
  >
    <Form.Input
      label='Name'
    />
    <Form.Input
      label='Address'
    />
    <Form.Input
      label='Phone'
    />
  </EditPage>
);
