// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Toaster from '../../../semantic-ui/src/components/Toaster';

export default  {
  title: 'Components/Semantic UI/Toaster',
  component: Toaster,
  decorators: [withKnobs]
};

export const Info = () => {
  return (
    <>
      <Toaster type='info' timeout={3000}>
        <>
          I am Info Toast!
        </>
      </Toaster>
    </>
  );
};

export const Positive = () => {
  return (
    <>
      <Toaster type='positive' timeout={3000}>
        <>
          I am Positive Toast!
        </>
      </Toaster>
    </>
  );
};

export const Negative = () => {
  return (
    <>
      <Toaster type='negative' timeout={3000}>
        <>
          I am Negative Toast!
        </>
      </Toaster>
    </>
  );
};

export const Warning = () => {
  return (
    <>
      <Toaster type='warning' timeout={3000}>
        <>
          I am Warning Toast!
        </>
      </Toaster>
    </>
  );
};
