// @flow

import React from 'react';
import DescriptorField from '../../../semantic-ui/src/components/DescriptorField';

export default {
  title: 'Components/Semantic UI/DescriptorField',
  component: DescriptorField
};

export const Default = () => (
  <DescriptorField
    content='massa ultricies'
    popupContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
  />
);
