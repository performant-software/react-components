// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { Form } from 'semantic-ui-react';
import FileUploadModal from '../../../semantic-ui/src/components/FileUploadModal';

export default {
  title: 'Components/Semantic UI/FileUploadModal',
  decorators: [withA11y]
};

export const Default = () => (
  <FileUploadModal
    button='Upload files'
    itemComponent={({ item }) => (
      <Form.Input
        label='Name'
        value={item.name || ''}
      />
    )}
    onAddFile={(file) => file}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
);

export const NoButton = () => (
  <FileUploadModal
    button='Upload files'
    includeButton={false}
    itemComponent={({ item }) => (
      <Form.Input
        label='Name'
        value={item.name || ''}
      />
    )}
    onAddFile={(file) => file}
    onClose={action('close')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
);
