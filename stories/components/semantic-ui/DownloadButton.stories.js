// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import DownloadButton from '../../../src/semantic-ui/DownloadButton';
import image from '../../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/DownloadButton',
  decorators: [withA11y]
};

export const Default = () => (
  <DownloadButton
    content='Download'
    icon='cloud download'
    primary
    url={image}
  />
);

export const LargeFile = () => (
  <DownloadButton
    content='Download'
    icon='cloud download'
    primary
    url='https://speed.hetzner.de/100MB.bin'
  />
);

export const WithFilename = () => (
  <DownloadButton
    content='Download'
    filename='Test12345'
    icon='cloud download'
    primary
    url={image}
  />
);
