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
   * Saves the passed item. If the item already exists in the list, the item is updated.
   *
   * @type {}
   */
  const onSelection = useCallback((item) => {
  });

  return (
    <FileInputButton
      multiple={false}
      onSelection={onSelection}
    />
  );
};