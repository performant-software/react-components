import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files } from "@storybook/addon-knobs";
import PhotoViewer from '../../../src/semantic-ui/PhotoViewer';
import image from '../../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/PhotoViewer',
  decorators: [withKnobs]
};

export const Default = () => (
  <PhotoViewer
    image={files('Image', '.png, .jpg, .jpeg', [image])}
    onClose={action('close')}
    open
  />
);