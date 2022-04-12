// @flow

import { FileUpload } from '@react-components/semantic-ui';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, number } from '@storybook/addon-knobs';

export default {
  title: 'Components/Semantic UI/FileUpload',
  decorators: [withA11y, withKnobs]
};

const fileTypes = [
  'jpg',
  'jpeg',
  'png'
];

const maxFileSize = 10485760;

export const Default = () => (
  <FileUpload
    fileTypes={array('File types', fileTypes)}
    maxSize={number('Max size (bytes)', maxFileSize)}
    onFilesAdded={action('files-added')}
  />
);
