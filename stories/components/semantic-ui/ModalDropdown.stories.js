// @flow

import React from 'react';
import { Modal } from 'semantic-ui-react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import ModalDropdown from '../../../src/semantic-ui/ModalDropdown';

export default {
  title: 'Components/Semantic UI/ModalDropdown',
  decorators: [withA11y]
};

export const Default = () => (
  <ModalDropdown
    onClear={action('clear')}
    renderModal={({ onClose, open }) => (
      <Modal
        closeIcon
        onClose={onClose}
        open={open}
        size='small'
      >
        <Modal.Header
          content='Custom modal'
        />
        <Modal.Content
          content='Custom content here'
        />
      </Modal>
    )}
  />
);
