// @flow

import React from 'react';
import { action } from 'storybook/actions';
import ColorPickerModal from '../../../semantic-ui/src/components/ColorPickerModal';

export default {
  title: 'Components/Semantic UI/ColorPickerModal',
  component: ColorPickerModal
};

export const Default = () => (
  <ColorPickerModal
    onClose={action('close')}
    onSave={action('save')}
    t={() => {}}
  />
);
