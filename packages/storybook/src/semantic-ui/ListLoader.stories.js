// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ListLoader from '../../../semantic-ui/src/components/ListLoader';

export default {
  title: 'Components/Semantic UI/ListLoader',
  component: ListLoader,
  decorators: [withKnobs]
};

export const Default = () => (
  <ListLoader
    active
  />
);
