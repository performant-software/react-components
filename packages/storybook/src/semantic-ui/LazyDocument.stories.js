// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Card, Item } from 'semantic-ui-react';
import _ from 'underscore';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';
import image from '../assets/test-image.jpg';
import LazyDocument from '../../../semantic-ui/src/components/LazyDocument';
import portraitImage from '../assets/portrait-test-image.jpg';

export default {
  title: 'Components/Semantic UI/LazyDocument',
  decorators: [withA11y]
};

export const Default = () => (
  <LazyDocument
    src={image}
  />
);

export const WithPreview = () => (
  <LazyDocument
    image={{
      alt: 'Image'
    }}
    preview={image}
    src={image}
  />
);

export const Upload = () => {
  const [file, setFile] = useState();

  return (
    <LazyDocument
      pdf={file && file.type === 'application/pdf'}
      src={file && URL.createObjectURL(file)}
    >
      <FileInputButton
        content='Upload'
        icon='cloud upload'
        onSelection={(files) => setFile(_.first(files))}
        primary
      />
    </LazyDocument>
  );
};

export const CardContent = () => (
  <Card.Group>
    <Card>
      <LazyDocument
        image={{
          alt: 'Test Image'
        }}
        preview={image}
        src={image}
      />
      <Card.Content
        header='Test 1'
      />
    </Card>
    <Card>
      <LazyDocument
        image={{
          alt: 'Portrait Image'
        }}
        preview={portraitImage}
        src={portraitImage}
      />
      <Card.Content
        header='Test 2'
      />
    </Card>
    <Card>
      <LazyDocument
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
        <LazyDocument
          image={{
            alt: 'First Image'
          }}
          preview={image}
          src={image}
        />
      </Item.Image>
      <Item.Content
        header='Test 1'
      />
    </Item>
    <Item>
      <Item.Image>
        <LazyDocument
          image={{
            alt: 'Portrait Image'
          }}
          preview={portraitImage}
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
        <LazyDocument />
      </Item.Image>
      <Item.Content
        header='Test 3'
      />
    </Item>
  </Item.Group>
);

export const PreviewError = () => (
  <LazyDocument
    preview='/path/to/doc.preview.jpg'
    src='/path/to/doc.txt'
  />
);
