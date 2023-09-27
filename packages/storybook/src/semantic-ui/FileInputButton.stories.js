// @flow

import { withKnobs } from '@storybook/addon-knobs';
import React, { useCallback, useState } from 'react';
import _ from 'underscore';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/FileInputButton',
  component: FileInputButton,
  decorators: [withKnobs]
};
export const Default = () => {
  /**
   * Allows the user to select files from their file system.
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