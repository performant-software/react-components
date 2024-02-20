// @flow

import React, { useState } from 'react';
import LazyVideo from '../../../semantic-ui/src/components/LazyVideo';
import VideoFrameSelector from '../../../semantic-ui/src/components/VideoFrameSelector';
// import video from '../assets/SampleVideo.mp4';

const video = 'https://file-examples.com/storage/fe9379915f65d3c76997f7c/2017/04/file_example_MP4_1920_18MG.mp4';

export default {
  title: 'Components/Semantic UI/VideoFrameSelector'
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
