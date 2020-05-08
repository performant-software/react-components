import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, number } from "@storybook/addon-knobs";
import FileUpload from '../../../src/semantic-ui/FileUpload';

export default {
  title: 'Components/Semantic UI/FileUpload',
  decorators: [withKnobs]
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