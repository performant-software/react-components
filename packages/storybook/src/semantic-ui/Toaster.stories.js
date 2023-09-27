// @flow

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from 'semantic-ui-react';
import Toaster from '../../../semantic-ui/src/components/Toaster';

export default  {
  title: 'Components/Semantic UI/Toaster',
  component: Toaster,
  decorators: [withKnobs]
};

export const Info = () => {
  const [index, setIndex] = useState(0);

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
  const [index, setIndex] = useState(0);

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
  const [index, setIndex] = useState(0);

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
  const [index, setIndex] = useState(0);

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
