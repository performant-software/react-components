// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import _ from 'underscore';
import LazyImage from '../../../src/semantic-ui/LazyImage';
import image from '../../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/LazyImage',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyImage
    src={image}
  />
);

export const Placeholder = () => (
  <LazyImage />
);
