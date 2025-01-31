// @flow

import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import Button from '../../../core-data/src/components/Button';
import Icon from '../../../core-data/src/components/Icon';

export default {
  title: 'Components/Core Data/Button',
  component: Button
};

export const Default = () => (
  <Button
    onClick={action('click')}
  >
    Button
  </Button>
);

export const Rounded = () => (
  <Button
    onClick={action('click')}
    rounded
  >
    Button
  </Button>
);

export const Primary = () => (
  <Button
    onClick={action('click')}
    primary
  >
    Button
  </Button>
);

export const Secondary = () => (
  <Button
    onClick={action('click')}
    secondary
  >
    Button
  </Button>
);

export const IconWithText = () => (
  <Button
    onClick={action('click')}
    primary
    rounded
  >
    <Icon
      name='export'
    />
    Export
  </Button>
);

export const IconOnly = () => (
  <Button
    onClick={action('click')}
    icon
    primary
  >
    <Icon
      name='info'
    />
  </Button>
);
