// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import LazyIIIF from '../../../semantic-ui/src/components/LazyIIIF';
import image from '../assets/test-image.jpg';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Semantic UI/LazyIIIF',
  decorators: [withKnobs]
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

export const StringManifest = () => (
  <LazyIIIF
    contentType='image/jpeg'
    manifest='https://iiif.io/api/cookbook/recipe/0009-book-1/manifest.json'
  />
);

export const Colored = () => (
  <LazyIIIF
    color='red'
    contentType='image/jpeg'
    manifest={manifest}
  />
);
