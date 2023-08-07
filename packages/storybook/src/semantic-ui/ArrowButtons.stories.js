// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import ArrowButtons from '../../../semantic-ui/src/components/ArrowButtons';

export default {
  title: 'Components/Semantic UI/ArrowButtons',
  component: ArrowButtons
};

export const Default = () => (
  <ArrowButtons
    onLeft={action('onLeft')}
    onRight={action('onRight')}
  />
);
