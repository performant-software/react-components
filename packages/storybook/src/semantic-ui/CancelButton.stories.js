// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CancelButton from '../../../semantic-ui/src/components/CancelButton';

export default {
  title: 'Components/Semantic UI/CancelButton',
  decorators: [withKnobs],
  component: CancelButton
};

export const Default = () => (
  <CancelButton
    disabled={boolean('Disabled', false)}
    onClick={action('click')}
  />
);

export const Disabled = () => (
  <CancelButton
    disabled={boolean('Disabled', true)}
    onClick={action('click')}
  />
);
