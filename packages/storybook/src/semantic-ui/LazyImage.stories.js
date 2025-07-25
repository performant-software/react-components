// @flow

import React from 'react';
import { action } from 'storybook/actions';
import { Button, Card, Item } from 'semantic-ui-react';
import image from '../assets/test-image.jpg';
import LazyImage from '../../../semantic-ui/src/components/LazyImage';
import portraitImage from '../assets/portrait-test-image.jpg';

export default {
  title: 'Components/Semantic UI/LazyImage'
};

export const Default = () => (
  <LazyImage
    image={{
      alt: 'Image'
    }}
    src={image}
  />
);

export const Placeholder = () => (
  <LazyImage />
);

export const ExtraButtons = () => (
  <LazyImage
    image={{
      alt: 'Test Image'
    }}
    src={image}
  >
    <Button
      color='green'
      content='Edit photo'
      icon='edit'
      onClick={action('edit')}
    />
    <Button
      color='orange'
      content='Change photo'
      icon='move'
      onClick={action('change')}
    />
    <Button
      color='red'
      content='Delete photo'
      icon='trash'
      onClick={action('delete')}
    />
  </LazyImage>
);

export const CardContent = () => (
  <Card.Group>
    <Card>
      <LazyImage
        image={{
          alt: 'Test Image'
        }}
        src={image}
      />
      <Card.Content
        header='Test 1'
      />
    </Card>
    <Card>
      <LazyImage
        image={{
          alt: 'Portrait Image'
        }}
        src={portraitImage}
      />
      <Card.Content
        header='Test 2'
      />
    </Card>
    <Card>
      <LazyImage
        image={{
          alt: 'Last Image'
        }}
      />
      <Card.Content
        header='Test 3'
      />
    </Card>
  </Card.Group>
);

export const ListContent = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <LazyImage
          image={{
            alt: 'First Image'
          }}
          src={image}
        />
      </Item.Image>
      <Item.Content
        header='Test 1'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyImage
          image={{
            alt: 'Portrait Image'
          }}
          src={portraitImage}
        />
      </Item.Image>
      <Item.Content
        image={{
          alt: 'Last Image'
        }}
        header='Test 2'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyImage />
      </Item.Image>
      <Item.Content
        header='Test 3'
      />
    </Item>
  </Item.Group>
);

export const ErrorSource = () => (
  <LazyImage
    image={{
      alt: 'Image'
    }}
    src='path/to/image.jpg'
  />
);

export const ErrorSourceWithPreview = () => (
  <LazyImage
    image={{
      alt: 'Image'
    }}
    preview={image}
    src='path/to/image.jpg'
  />
);

export const ErrorPreview = () => (
  <LazyImage
    image={{
      alt: 'Image'
    }}
    preview='path/to/image.jpg'
    src={image}
  />
);

export const ErrorPreviewAndSource = () => (
  <LazyImage
    image={{
      alt: 'Image'
    }}
    preview='path/to/image.jpg'
    src='path/to/image.jpg'
  />
);

export const Downloadable = () => (
  <LazyImage
    downloadUrl={image}
    name='Image.jpg'
    image={{
      alt: 'Image'
    }}
    src={image}
  />
);
