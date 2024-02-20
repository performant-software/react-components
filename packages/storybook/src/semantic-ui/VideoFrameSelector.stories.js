// @flow

import React, { useState } from 'react';
import LazyVideo from '../../../semantic-ui/src/components/LazyVideo';
import VideoFrameSelector from '../../../semantic-ui/src/components/VideoFrameSelector';
// import video from '../assets/SampleVideo.mp4';

const video = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';

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
