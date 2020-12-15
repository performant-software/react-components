// @flow

import React from 'react';
import { Modal } from 'semantic-ui-react';
import './VideoPlayer.css';

type Props = {
  onClose: () => void,
  open: boolean,
  size?: string,
  video: string
};

const VideoPlayer = (props: Props) => (
  <Modal
    centered={false}
    className='video-player'
    closeIcon
    onClose={props.onClose.bind(this)}
    open={props.open}
    size={props.size}
  >
    <Modal.Content>
      <video
        controls
        src={props.video}
      />
    </Modal.Content>
  </Modal>
);

VideoPlayer.defaultProps = {
  size: 'small'
};

export default VideoPlayer;
