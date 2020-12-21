// @flow

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import {
  Button,
  Card,
  Item,
  Modal
} from 'semantic-ui-react';
import LazyVideo from '../../../src/semantic-ui/LazyVideo';
import image from '../../assets/test-image.jpg';
import video from '../../assets/SampleVideo.mp4';
import portraitImage from '../../assets/portrait-test-image.jpg';

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

export const CardContent = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <LazyVideo
          preview={image}
          src={video}
        />
        <Card.Header>Test 1</Card.Header>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <LazyVideo
          preview={portraitImage}
          src={video}
        />
        <Card.Header>Test 2</Card.Header>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <LazyVideo
          src={video}
        />
        <Card.Header>Test 3</Card.Header>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <LazyVideo />
        <Card.Header>Test 4</Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
);

export const ListContent = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <LazyVideo
          preview={image}
          src={video}
        />
      </Item.Image>
      <Item.Content
        header='Test 1'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo
          preview={portraitImage}
          src={video}
        />
      </Item.Image>
      <Item.Content
        header='Test 2'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo
          src={video}
        />
      </Item.Image>
      <Item.Content
        header='Test 3'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo />
      </Item.Image>
      <Item.Content
        header='Test 4'
      />
    </Item>
  </Item.Group>
);
