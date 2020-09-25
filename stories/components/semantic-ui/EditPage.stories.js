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

const TestForm = () => (
  <div>
    <Form.Input
      label='Name'
    />
    <Form.Input
      label='Address'
    />
    <Form.Input
      label='Phone'
    />
  </div>
);

export const Default = () => (
  <EditPage
    component={TestForm}
    onClose={action('close')}
    onSave={action('save')}
  />
);

export const WithMenu = () => (
  <EditPage
    component={TestForm}
    menu={{
      items: [{
        name: 'Details',
        key: 'details'
      }, {
        name: 'Technical',
        key: 'technical'
      }, {
        name: 'Other',
        key: 'other'
      }],
      pointing: true,
      secondary: true
    }}
    onClose={action('close')}
    onSave={action('save')}
  />
);
