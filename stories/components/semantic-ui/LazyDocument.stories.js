import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import LazyDocument from '../../../src/semantic-ui/LazyDocument';
import image from '../../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/LazyDocument',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyDocument
    src={image}
  />
);

export const WithPreview = () => (
  <LazyDocument
    preview={image}
    src={image}
  />
);
