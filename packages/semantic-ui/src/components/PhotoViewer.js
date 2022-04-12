// @flow

import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import './PhotoViewer.css';

type Props = {
  image: string,
  onClose: () => void,
  open: boolean,
  size?: string
};

const PhotoViewer = (props: Props) => (
  <Modal
    centered={false}
    className='photo-viewer'
    closeIcon
    onClose={props.onClose.bind(this)}
    open={props.open}
    size={props.size}
  >
    <Modal.Content>
      <Image
        fluid
        src={props.image}
      />
    </Modal.Content>
  </Modal>
);

PhotoViewer.defaultProps = {
  size: 'small'
};

export default PhotoViewer;
