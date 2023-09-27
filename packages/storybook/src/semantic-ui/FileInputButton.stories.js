// @flow

import React, { useCallback } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/FileInputButton',
  component: FileInputButton,
  decorators: [withKnobs]
};
export const Default = () => {
  const onSelection = useCallback((item) => {
    console.log(item);  
  });

  return (
    <FileInputButton
      content='Select a file to upload'
      multiple={false}
      icon='file'
      onSelection={onSelection}
    />
  );
};
