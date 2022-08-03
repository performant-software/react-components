// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import AudioPlayer from '../../../semantic-ui/src/components/AudioPlayer';
import audio from '../assets/SampleAudio.mp3';

export default {
  title: 'Components/Semantic UI/AudioPlayer',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <AudioPlayer
    onClose={action('close')}
    open
    src={audio}
  />
);

export const Error = () => (
  <AudioPlayer
    onClose={action('close')}
    open
    src='/path/to/audio.mp3'
  />
);
