// @flow

import { ColorPickerModal } from '@performant-software/semantic-components';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'Components/Semantic UI/ColorPickerModal',
  decorators: [withA11y, withKnobs]
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
