// @flow

import { action } from 'storybook/actions';
import React, { useState } from 'react';
import Button from '../../../core-data/src/components/Button';
import Notification from '../../../core-data/src/components/Notification';

export default {
  title: 'Components/Core Data/Notification',
  component: Notification
};

export const Default = () => (
  <div
    className='h-[500px]'
  >
    <Notification
      content='Anyone with a link can now view this file.'
      header='Successfully saved!'
      onClose={action('close')}
      open
    />
  </div>
);

export const Icon = () => (
  <div
    className='h-[500px]'
  >
    <Notification
      content='Anyone with a link can now view this file.'
      header='Successfully saved!'
      icon={{
        className: 'fill-green-400',
        name: 'info',
        size: 24
      }}
      onClose={action('close')}
      open
    />
  </div>
);

export const Transition = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        Open
      </Button>
      <Notification
        content='Anyone with a link can now view this file.'
        header='Successfully saved!'
        icon={{
          className: 'fill-green-400',
          name: 'info',
          size: 24
        }}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export const Timeout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        Open
      </Button>
      <Notification
        content='Anyone with a link can now view this file.'
        header='Successfully saved!'
        icon={{
          className: 'fill-green-400',
          name: 'info',
          size: 24
        }}
        onClose={() => setOpen(false)}
        open={open}
        timeout={2000}
      />
    </>
  );
};
