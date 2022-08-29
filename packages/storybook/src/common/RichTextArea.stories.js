// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import RichTextArea from '../../../shared/src/components/RichTextArea';

export default {
  title: 'Components/Common/RichTextArea',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <RichTextArea
    onChange={() => {}}
    value=''
  />
);
