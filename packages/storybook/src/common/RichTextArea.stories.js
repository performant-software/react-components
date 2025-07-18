// @flow

import React from 'react';
import RichTextArea from '../../../shared/src/components/RichTextArea';

export default {
  title: 'Components/Common/RichTextArea',
  component: RichTextArea
};

export const Default = () => (
  <RichTextArea
    onChange={() => {}}
    value=''
  />
);
