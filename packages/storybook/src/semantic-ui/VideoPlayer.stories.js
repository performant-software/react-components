// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'semantic-ui-react';
import VideoPlayer from '../../../semantic-ui/src/components/VideoPlayer';
import video from '../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/VideoPlayer'
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
    placeholderAlt='Placeholder Image'
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
    placeholderAlt='Placeholder Image'
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

export const Error = () => (
  <VideoPlayer
    onClose={action('close')}
    open
    video='/path/to/video.mp4'
  />
);

export const ErrorLongURL = () => (
  <VideoPlayer
    onClose={action('close')}
    open
    video='http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0lEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--05fcfd55941c73ff139611bcc194a158f08fe5a5/sample_640x426.mp4'
  />
);
