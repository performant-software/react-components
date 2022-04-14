// @flow

import { VideoPlayer } from '@performant-software/semantic-components';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { Button } from 'semantic-ui-react';
import video from '../assets/SampleVideo.mp4';

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

export const CustomIcon = () => (
  <VideoPlayer
    embedded
    icon={(
      <div
        className='icon'
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          zIndex: '2'
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            content='Test'
          />
        </div>
      </div>
    )}
    placeholder='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg'
    onClose={action('close')}
    open
    video='https://www.youtube.com/embed/YXiZ8OsS3kk'
  />
);

export const AutoPlay = () => (
  <VideoPlayer
    autoPlay
    onClose={action('close')}
    open
    video={video}
  />
);

export const EmbeddedAutoPlay = () => (
  <VideoPlayer
    autoPlay
    embedded
    placeholder='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg'
    onClose={action('close')}
    open
    video='https://www.youtube.com/embed/YXiZ8OsS3kk'
  />
);
