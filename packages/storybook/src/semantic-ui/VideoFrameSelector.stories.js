// @flow

import { LazyVideo, VideoFrameSelector } from '@performant-software/semantic-components';
import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import video from '../assets/SampleVideo.mp4';

export default {
  title: 'Components/Semantic UI/VideoFrameSelector',
  decorators: [withA11y]
};

export const Default = () => {
  const [image, setImage] = useState(null);

  return (
    <>
      <LazyVideo
        preview={image}
        src={video}
      />
      <VideoFrameSelector
        onSelect={(file) => setImage(URL.createObjectURL(file))}
        src={video}
      />
    </>
  );
};
