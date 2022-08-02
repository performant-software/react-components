// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import audio from '../assets/SampleAudio.mp3';
import LazyAudio from '../../../semantic-ui/src/components/LazyAudio';
import FileInputButton from '../../../semantic-ui/src/components/FileInputButton';

export default {
  title: 'Components/Semantic UI/LazyAudio',
  decorators: [withA11y, withKnobs]
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
