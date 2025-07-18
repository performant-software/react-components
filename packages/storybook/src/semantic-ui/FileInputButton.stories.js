// @flow

import { action } from 'storybook/actions';
import React from 'react';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/FileInputButton',
  component: FileInputButton
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
