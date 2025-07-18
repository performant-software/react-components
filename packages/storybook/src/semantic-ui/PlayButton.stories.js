// @flow

import React from 'react';
import PlayButton from '../../../semantic-ui/src/components/PlayButton';
import { action } from 'storybook/actions';

const onClick = action('play');

export default {
  title: 'Components/Semantic UI/PlayButton',
  component: PlayButton
};

export const Default = () => (
  <PlayButton
    onClick={onClick}
  />
);

export const Mini = () => (
  <PlayButton
    onClick={onClick}
    size='mini'
  />
);

export const Purple = () => (
  <PlayButton
    onClick={onClick}
    style={{ color: 'purple' }}
  />
);
