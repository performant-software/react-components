// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import MediaGrid from '../../../semantic-ui/src/components/MediaGrid';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/MediaGrid',
  decorators: [withA11y, withKnobs]
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
