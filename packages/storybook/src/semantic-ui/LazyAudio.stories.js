// @flow

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import audio from '../assets/SampleAudio.mp3';
import LazyAudio from '../../../semantic-ui/src/components/LazyAudio';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';
import image from '../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/LazyAudio',
  decorators: [withKnobs]
};

export const Default = () => (
  <LazyAudio
    src={audio}
  />
);

export const Placeholder = () => (
  <LazyAudio />
);

export const Upload = () => {
  const [file, setFile] = useState();

  return (
    <LazyAudio
      src={file && URL.createObjectURL(file)}
    >
      <FileInputButton
        content='Upload'
        icon='cloud upload'
        onSelection={(files) => setFile(_.first(files))}
        primary
      />
    </LazyAudio>
  );
};

export const Preview = () => (
  <LazyAudio
    preview={image}
    src={audio}
  />
);

export const ErrorPreview = () => (
  <LazyAudio
    preview='/path/to/preview.jpg'
    src={audio}
  />
);

export const ErrorSource = () => (
  <LazyAudio
    preview={image}
    src='/path/to/audio.mp3'
  />
);

export const ErrorPreviewAndSource = () => (
  <LazyAudio
    preview='/path/to/preview.jpg'
    src='/path/to/audio.mp3'
  />
);

export const Downloadable = () => (
  <LazyAudio
    download={audio}
    name='Audio.mp3'
    src={audio}
  />
);
