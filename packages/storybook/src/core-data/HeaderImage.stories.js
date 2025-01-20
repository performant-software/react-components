// @flow

import React from 'react';
import HeaderImage from '../../../core-data/src/components/HeaderImage';
import testImage from '../assets/test-image.jpg';

export default {
  title: 'Components/Core Data/HeaderImage',
  component: HeaderImage
};

export const Default = () => (
  <HeaderImage
    src={testImage}
  />
);
