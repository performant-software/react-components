// @flow

import { ColorButton } from '@react-components/semantic-ui';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, color, number } from '@storybook/addon-knobs';

export default {
  title: 'Components/Semantic UI/ColorButton',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <ColorButton
    color={color('Color', '#e5e5e5e5')}
    height={number('Height', 50)}
    onClick={action('click')}
    width={number('Width', 50)}
  />
);
