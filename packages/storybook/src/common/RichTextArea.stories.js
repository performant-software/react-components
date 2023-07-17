// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RichTextArea from '../../../shared/src/components/RichTextArea';

export default {
  title: 'Components/Common/RichTextArea',
  decorators: [withKnobs]
};

export const Default = () => (
  <RichTextArea
    onChange={() => {}}
    value=''
  />
);
