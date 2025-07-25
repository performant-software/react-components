// @flow

import { action } from 'storybook/actions';
import React from 'react';
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

export const CustomClasses = () => (
  <Button
    className='bg-blue-500 text-white'
  >
    This is blue
  </Button>
);

export const Disabled = () => (
  <Button
    onClick={action('click')}
    disabled
  >
    Button
  </Button>
);

export const Breakpoints = () => (
  <Button
    className='text-white bg-blue-500 md:bg-green-500 lg:bg-red-500'
  >
    Breakpoints
  </Button>
);
