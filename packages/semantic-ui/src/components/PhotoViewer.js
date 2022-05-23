// @flow

import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import ModalContext from '../context/ModalContext';
import './PhotoViewer.css';

type Props = {
  alt?: string,
  image: string,
  onClose: () => void,
  open: boolean,
  size?: string
};

const PhotoViewer = (props: Props) => (
  <ModalContext.Consumer>
    { (mountNode) => (
      <Modal
        centered={false}
        className='photo-viewer'
        closeIcon
        mountNode={mountNode}
        onClose={props.onClose.bind(this)}
        open={props.open}
        size={props.size}
      >
        <Modal.Content>
          <Image
            alt={props.alt}
            fluid
            src={props.image}
          />
        </Modal.Content>
      </Modal>
    )}
  </ModalContext.Consumer>
);

PhotoViewer.defaultProps = {
  size: 'small'
};

export default PhotoViewer;
