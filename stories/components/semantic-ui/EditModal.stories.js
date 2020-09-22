import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Modal } from 'semantic-ui-react';
import EditModal from '../../../src/semantic-ui/EditModal';

export default {
  title: 'Components/Semantic UI/EditModal',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <EditModal
    component={(props) => (
      <Modal
        as={Form}
        open
      >
        <Modal.Header
          content='Add Record'
        />
        <Modal.Content>
          <Form.Input
            label='Name'
          />
          <Form.Input
            label='Address'
          />
          <Form.Input
            label='Phone'
          />
        </Modal.Content>
        { props.children }
      </Modal>
    )}
    onClose={action('close')}
    onSave={action('save')}
  />
);
