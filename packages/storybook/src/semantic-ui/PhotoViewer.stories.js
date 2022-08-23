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

export const Error = () => (
  <PhotoViewer
    alt='Test Image'
    image='/path/to/image.jpg'
    onClose={action('close')}
    open
  />
);

export const ErrorLongURL = () => (
  <PhotoViewer
    alt='Test Image'
    image='http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0lEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--05fcfd55941c73ff139611bcc194a158f08fe5a5/sample_640x426.tiff'
    onClose={action('close')}
    open
  />
);
