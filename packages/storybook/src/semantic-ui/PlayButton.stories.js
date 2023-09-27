// @flow

import React from 'react';
import PlayButton from '../../../semantic-ui/src/components/PlayButton';

export default {
  title: 'Components/Semantic UI/PlayButton',
  component: PlayButton
};

export const Default = () => (
  <PlayButton
    onClick={() => console.log('click!')}
  />
);

export const Mini = () => (
  <PlayButton
    onClick={() => console.log('click!')}
    size='mini'
  />
);

export const Purple = () => (
  <PlayButton
    onClick={() => console.log('click!')}
    style={{ color: 'purple' }}
  />
);
