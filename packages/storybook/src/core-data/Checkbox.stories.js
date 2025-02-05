// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import Checkbox from '../../../core-data/src/components/Checkbox';

export default {
  title: 'Components/Core Data/Checkbox',
  component: Checkbox
};

export const Default = () => (
  <Checkbox
    onClick={action('click')}
    label='Option 1'
  />
);
