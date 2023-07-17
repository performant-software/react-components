// @flow

import React from 'react';
import DownloadButton from '../../../semantic-ui/src/components/DownloadButton';
import image from '../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/DownloadButton'
};

export const Default = () => (
  <DownloadButton
    primary
    url={image}
  />
);

export const LargeFile = () => (
  <DownloadButton
    primary
    url='https://speed.hetzner.de/100MB.bin'
  />
);

export const WithFilename = () => (
  <DownloadButton
    filename='Test12345'
    primary
    url={image}
  />
);

export const Basic = () => (
  <DownloadButton
    basic
    primary
    url={image}
  />
);

export const Colored = () => (
  <DownloadButton
    color='red'
    url={image}
  />
);

export const Compact = () => (
  <DownloadButton
    compact
    primary
    url={image}
  />
);

export const Secondary = () => (
  <DownloadButton
    secondary
    url={image}
  />
);

export const Large = () => (
  <DownloadButton
    size='large'
    url={image}
  />
);
