// @flow

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import LazyMedia from '../../../semantic-ui/src/components/LazyMedia';
import audio from '../assets/SampleAudio.mp3';
import image from '../assets/test-image.jpg';
import document from '../assets/sample2.pdf';
import video from '../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/LazyMedia',
  decorators: [withKnobs]
};

export const Default = () => (
  <LazyMedia />
);

export const Audio = () => (
  <LazyMedia
    contentType='audio/mp3'
    src={audio}
  />
);

export const Document = () => (
  <LazyMedia
    contentType='application/pdf'
    src={document}
  />
);

export const Image = () => (
  <LazyMedia
    contentType='image/jpg'
    src={image}
  />
);

export const Video = () => (
  <LazyMedia
    contentType='video/mp4'
    src={video}
  />
);

export const VideoWithCaptions = () => (
  <LazyMedia
    contentType='video/mp4'
    src={video}
    transcriptions={[{
      label: 'English',
      language: 'en',
      src: '/src/assets/test.vtt'
    }]}
  />
);

export const Uploadable = () => {
  const [file, setFile] = useState();

  return (
    <LazyMedia
      contentType={file && file.type}
      onUpload={(f) => setFile(f)}
      src={file && URL.createObjectURL(file)}
    />
  );
};
