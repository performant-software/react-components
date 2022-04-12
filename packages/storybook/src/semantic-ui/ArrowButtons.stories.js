// @flow

import { ArrowButtons } from '@react-components/semantic-ui';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components/Semantic UI/ArrowButtons',
  decorators: [withA11y]
};

export const Default = () => (
  <ArrowButtons
    onLeft={action('left')}
    onRight={action('right')}
  />
);
