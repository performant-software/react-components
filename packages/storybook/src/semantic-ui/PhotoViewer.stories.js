// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, files } from '@storybook/addon-knobs';
import image from '../assets/test-image.jpg';
import PhotoViewer from '../../../semantic-ui/src/components/PhotoViewer';

export default {
  title: 'Components/Semantic UI/PhotoViewer',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <PhotoViewer
    alt='Test Image'
    image={files('Image', '.png, .jpg, .jpeg', [image])}
    onClose={action('close')}
    open
  />
);
