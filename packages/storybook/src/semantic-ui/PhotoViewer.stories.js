// @flow

import { PhotoViewer } from '@react-components/semantic-ui';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, files } from '@storybook/addon-knobs';
import image from '../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/PhotoViewer',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <PhotoViewer
    image={files('Image', '.png, .jpg, .jpeg', [image])}
    onClose={action('close')}
    open
  />
);
