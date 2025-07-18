// @flow

import { action } from 'storybook/actions';
import React from 'react';
import FileUpload from '../../../semantic-ui/src/components/FileUpload';

export default {
  title: 'Components/Semantic UI/FileUpload',
  component: FileUpload
};

export const Default = () => (
  <FileUpload
    onFilesAdded={action('files-added')}
  />
);

export const Size = () => (
  <FileUpload
    maxSize={10485760}
    onFilesAdded={action('files-added')}
  />
);

export const Types = () => (
  <FileUpload
    fileTypes={[
      'jpg',
      'jpeg',
      'png'
    ]}
    onFilesAdded={action('files-added')}
  />
);
