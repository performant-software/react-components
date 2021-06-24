// @flow

import React, { type Element } from 'react';
import { Embed, Modal } from 'semantic-ui-react';
import './VideoPlayer.css';

type Props = {
  embedded?: boolean,
  icon?: string | Element<any>,
  onClose: () => void,
  open: boolean,
  placeholder?: ?string,
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
      { props.embedded && (
        <Embed
          icon={props.icon}
          placeholder={props.placeholder}
          url={props.video}
        />
      )}
      { !props.embedded && (
        <video
          controls
          src={props.video}
        />
      )}
    </Modal.Content>
  </Modal>
);

VideoPlayer.defaultProps = {
  embedded: false,
  icon: 'right circle arrow',
  size: 'small'
};

export default VideoPlayer;
