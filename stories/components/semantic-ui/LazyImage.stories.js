// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { Button } from 'semantic-ui-react';
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

export const ExtraButtons = () => (
  <LazyImage
    src={image}
  >
    <Button
      color='green'
      content='Edit photo'
      icon='edit'
      onClick={action('edit')}
    />
    <Button
      color='orange'
      content='Change photo'
      icon='move'
      onClick={action('change')}
    />
    <Button
      color='red'
      content='Delete photo'
      icon='trash'
      onClick={action('delete')}
    />
  </LazyImage>
);
