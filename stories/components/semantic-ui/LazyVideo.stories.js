// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import LazyVideo from '../../../src/semantic-ui/LazyVideo';
import image from '../../assets/test-image.jpg';
import video from '../../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/LazyVideo',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyVideo
    preview={image}
    src={video}
  />
);

export const NoPreview = () => (
  <LazyVideo
    src={video}
  />
);

export const Placeholder = () => (
  <LazyVideo />
);
