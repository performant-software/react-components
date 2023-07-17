// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';
import ColorPickerModal from '../../../semantic-ui/src/components/ColorPickerModal';

export default {
  title: 'Components/Semantic UI/ColorPickerModal',
  decorators: [withKnobs]
};

export const Default = () => (
  <ColorPickerModal
    onClose={action('close')}
    onSave={action('save')}
    open={boolean('Open', true)}
    color={color('Color', '#d62c29')}
    t={() => {}}
  />
);
