// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Item } from 'semantic-ui-react';
import image from '../assets/test-image.jpg';
import LazyDocument from '../../../semantic-ui/src/components/LazyDocument';

export default {
  title: 'Components/Semantic UI/LazyDocument',
  decorators: [withA11y]
};

export const Default = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <LazyDocument
          src={image}
        />
      </Item.Image>
      <Item.Content
        header='Test'
      />
    </Item>
  </Item.Group>
);

export const WithPreview = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <LazyDocument
          image={{
            alt: 'Image'
          }}
          preview={image}
          src={image}
        />
      </Item.Image>
      <Item.Content
        header='Test'
      />
    </Item>
  </Item.Group>
);
