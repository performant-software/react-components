import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import useEditPage from '../../../src/semantic-ui/EditPage';
import useEditContainer from '../../../src/common/EditContainer';

export default {
  title: 'Components/Semantic UI/EditPage',
  decorators: [withA11y, withKnobs]
};

const Site = () => (
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

const EditPage = useEditContainer(useEditPage(Site));

export const Default = () => (
  <EditPage
    item={{ id: 12 }}
    onClose={action('close')}
    onInitialize={() => new Promise((resolve) => resolve({ id: 12, name: 'Test' }))}
    onSave={action('save')}
  />
);
