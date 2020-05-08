import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, color, number } from "@storybook/addon-knobs";
import ColorButton from '../../../src/semantic-ui/ColorButton';

export default {
  title: 'Components/Semantic UI/ColorButton',
  decorators: [withKnobs]
}

export const Default = () => (
  <ColorButton
    color={color('Color', '#e5e5e5e5')}
    height={number('Height', 50)}
    onClick={action('click')}
    width={number('Width', 50)}
  />
);