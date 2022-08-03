// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import LazyIIIF from '../../../semantic-ui/src/components/LazyIIIF';
import image from '../assets/test-image.jpg';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Semantic UI/LazyIIIF',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <LazyIIIF
    contentType='image/jpeg'
    manifest={manifest}
  />
);

export const Preview = () => (
  <LazyIIIF
    contentType='image/jpeg'
    preview={image}
    manifest={manifest}
    src={image}
  />
);
