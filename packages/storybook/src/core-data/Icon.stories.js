// @flow

import React from 'react';
import Icon from '../../../core-data/src/components/Icon';

export default {
  title: 'Components/Core Data/Icon',
  component: Icon
};

export const Default = () => (
  <Icon
    name='info'
  />
);

export const Color = () => (
  <Icon
    className='fill-blue-500'
    name='info'
  />
);

export const Size = () => (
  <Icon
    name='info'
    size={32}
  />
);

export const Export = () => (
  <Icon
    name='export'
  />
);
