// @flow

import React from 'react';
import { action } from 'storybook/actions';
import image from '../assets/test-image.jpg';
import PhotoViewer from '../../../semantic-ui/src/components/PhotoViewer';

export default {
  title: 'Components/Semantic UI/PhotoViewer',
  component: PhotoViewer
};

export const Default = () => (
  <PhotoViewer
    alt='Test Image'
    image={image}
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
