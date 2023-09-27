// @flow

import React, { useCallback } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from 'semantic-ui-react';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/FileInputButton',
  component: FileInputButton,
  decorators: [withKnobs]
};
export const Default = () => {
  /**
   *
   * @type {}
   */
  const onSelection = useCallback((item) => {
    // Question: how does one get the file name from the item?
    // Question: once the file is selected, how to we start the upload?
  });

  return (
    <FileInputButton
      content='Select a file to upload'
      icon='times'
      multiple={false}
      onSelection={onSelection}
    />
  );
};
