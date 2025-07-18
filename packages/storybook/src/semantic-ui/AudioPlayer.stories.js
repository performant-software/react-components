// @flow

import React from 'react';
import { action } from 'storybook/actions';
import AudioPlayer from '../../../semantic-ui/src/components/AudioPlayer';
import audio from '../assets/SampleAudio.mp3';

export default {
  title: 'Components/Semantic UI/AudioPlayer',
  component: AudioPlayer
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

export const ErrorLongURL = () => (
  <AudioPlayer
    onClose={action('close')}
    open
    src='http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0lEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--05fcfd55941c73ff139611bcc194a158f08fe5a5/sample_640x426.mp3'
  />
)
