// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import LazyMedia from '../../../semantic-ui/src/components/LazyMedia';
import audio from '../assets/SampleAudio.mp3';
import image from '../assets/test-image.jpg';
import document from '../assets/sample2.pdf';

export default {
  title: 'Components/Semantic UI/LazyMedia',
  decorators: [withA11y, withKnobs]
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
