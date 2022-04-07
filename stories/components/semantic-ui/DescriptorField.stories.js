// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import DescriptorField from '../../../src/semantic-ui/DescriptorField';

export default {
  title: 'Components/Semantic UI/DescriptorField',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <DescriptorField
    content={text('Content', 'massa ultricies')}
    popupContent={text('Popup content', 'Lorem ipsum dolor sit amet, '
      + 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna '
      + 'aliqua. Pharetra et ultrices neque ornare aenean euismod elementum.')}
    delayInterval={number('Delay', 500)}
  />
);
