// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import VideoPlayer from '../../../src/semantic-ui/VideoPlayer';
import video from '../../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/VideoPlayer',
  decorators: [withA11y]
};

export const Default = () => (
  <VideoPlayer
    onClose={action('close')}
    open
    video={video}
  />
);

export const Embedded = () => (
  <VideoPlayer
    embedded
    placeholder='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg'
    onClose={action('close')}
    open
    video='https://www.youtube.com/embed/YXiZ8OsS3kk'
  />
);
