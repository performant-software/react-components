// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import Pill from '../../../core-data/src/components/Pill';

export default {
  title: 'Components/Core Data/Pill',
  component: Pill
};

export const Default = () => (
  <Pill
    label='Chip Text'
  />
);

export const OnRemove = () => (
  <Pill
    label='Chip Text'
    onRemove={action('click')}
  />
);

export const CustomColors = () => (
  <Pill
    className='bg-[#fc94af] text-white fill-purple-600'
    label='Chip Text'
    onRemove={action('click')}
  />
);

export const PrimaryColor = () => (
  <Pill
    primary
    label='Chip Text'
    onRemove={action('click')}
  />
);

export const SecondaryColor = () => (
  <Pill
    label='Chip Text'
    onRemove={action('click')}
    secondary
  />
);
