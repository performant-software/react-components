// @flow

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { Button, Modal } from 'semantic-ui-react';
import LazyVideo from '../../../src/semantic-ui/LazyVideo';
import image from '../../assets/test-image.jpg';
import video from '../../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/LazyVideo',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyVideo
    preview={image}
    src={video}
  />
);

export const NoPreview = () => (
  <LazyVideo
    src={video}
  />
);

export const Placeholder = () => (
  <LazyVideo />
);

export const ExtraButtons = () => (
  <LazyVideo
    preview={image}
    src={video}
  >
    <Button
      color='green'
      content='Edit video'
      icon='edit'
      onClick={action('edit')}
    />
    <Button
      color='orange'
      content='Change video'
      icon='move'
      onClick={action('change')}
    />
    <Button
      color='red'
      content='Delete video'
      icon='trash'
      onClick={action('delete')}
    />
  </LazyVideo>
);

export const onBlur = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LazyVideo
        preview={image}
        src={video}
      >
        <Button
          color='green'
          content='Edit video'
          icon='edit'
          onClick={() => setModal(true)}
        />
      </LazyVideo>
      { modal && (
        <Modal
          open
        >
          <Modal.Header>Edit video</Modal.Header>
          <Modal.Content>Edit</Modal.Content>
          <Modal.Actions>
            <Button
              content='Close'
              onClick={() => setModal(false)}
            />
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};
