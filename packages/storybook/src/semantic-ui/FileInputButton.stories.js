// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/FileInputButton',
  component: FileInputButton,
  decorators: [withKnobs]
};
export const Default = () => {

  return (
    <FileInputButton
      content='Select a file to upload'
      multiple={false}
      icon='file'
      onSelection={action('files-added')}
    />
  );
};
