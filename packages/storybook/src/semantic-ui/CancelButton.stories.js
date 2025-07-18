// @flow

import React from 'react';
import { action } from 'storybook/actions';
import CancelButton from '../../../semantic-ui/src/components/CancelButton';

export default {
  title: 'Components/Semantic UI/CancelButton',
  component: CancelButton
};

export const Default = () => (
  <CancelButton
    onClick={action('click')}
  />
);

export const Disabled = () => (
  <CancelButton
    disabled
    onClick={action('click')}
  />
);
