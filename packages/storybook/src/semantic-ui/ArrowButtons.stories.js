// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import ArrowButtons from '../../../semantic-ui/src/components/ArrowButtons';

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
