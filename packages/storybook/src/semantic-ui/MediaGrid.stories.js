// @flow

import React from 'react';
import { action } from 'storybook/actions';
import MediaGrid from '../../../semantic-ui/src/components/MediaGrid';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/MediaGrid',
  component: MediaGrid
};

const IMAGE_COUNT = 20;

export const Default = withImages((props) => (
  <MediaGrid
    items={props.images}
  />
), IMAGE_COUNT);

export const OnClick = withImages((props) => (
  <MediaGrid
    items={props.images}
    onClick={action('click image')}
  />
), IMAGE_COUNT);
