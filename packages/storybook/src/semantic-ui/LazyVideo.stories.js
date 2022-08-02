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
import _ from 'underscore';
import image from '../assets/test-image.jpg';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';
import LazyVideo from '../../../semantic-ui/src/components/LazyVideo';
import portraitImage from '../assets/portrait-test-image.jpg';
import video from '../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/LazyVideo',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyVideo
    image={{
      alt: 'Test Image'
    }}
    preview={image}
    src={video}
  />
);

export const Placeholder = () => (
  <LazyVideo />
);

export const ExtraButtons = () => (
  <LazyVideo
    image={{
      alt: 'Test Image'
    }}
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
        image={{
          alt: 'Test Image'
        }}
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
      <LazyVideo
        image={{
          alt: 'First Image'
        }}
        preview={image}
        src={video}
      />
      <Card.Content
        header='Test 1'
      />
    </Card>
    <Card>
      <LazyVideo
        image={{
          alt: 'Portrait Image'
        }}
        preview={portraitImage}
        src={video}
      />
      <Card.Content
        header='Test 2'
      />
    </Card>
    <Card>
      <LazyVideo
        image={{
          alt: 'Third Image'
        }}
        src={video}
      />
      <Card.Content
        header='Test 3'
      />
    </Card>
    <Card>
      <LazyVideo />
      <Card.Content
        header='Test 4'
      />
    </Card>
  </Card.Group>
);

export const ListContent = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <LazyVideo
          image={{
            alt: 'First Image'
          }}
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
          image={{
            alt: 'Portrait Image'
          }}
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
          image={{
            alt: 'Third Image'
          }}
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

export const Embedded = () => (
  <LazyVideo
    image={{
      alt: 'YouTube Image'
    }}
    embedded
    preview='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg'
    src='https://www.youtube.com/embed/YXiZ8OsS3kk'
  />
);

export const Upload = () => {
  const [file, setFile] = useState();

  return (
    <>
      <LazyVideo
        src={file && URL.createObjectURL(file)}
      >
        <FileInputButton
          content='Upload'
          icon='file outline'
          onSelection={(files) => setFile(_.first(files))}
        />
      </LazyVideo>
    </>
  );
};
