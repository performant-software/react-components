// @flow

import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import BooleanIcon from '../../../semantic-ui/src/components/BooleanIcon';

export default {
  title: 'Components/Semantic UI/BooleanIcon',
  component: BooleanIcon,
  decorators: [withKnobs]
};

export const Default = () => (
  <BooleanIcon
    value={boolean('Value', true)}
  />
);
