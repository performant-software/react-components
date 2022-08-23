// @flow

import React, { useState } from 'react';
import { Image, Message, Modal } from 'semantic-ui-react';
import ModalContext from '../context/ModalContext';
import './PhotoViewer.css';
import i18n from '../i18n/i18n';

type Props = {
  alt?: string,
  image: string,
  onClose: () => void,
  open: boolean,
  size?: string
};

const PhotoViewer = (props: Props) => {
  const [error, setError] = useState(false);

  return (
    <ModalContext.Consumer>
      {(mountNode) => (
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
            { error && (
              <Message
                content={i18n.t('PhotoViewer.errors.path.content', { path: props.image })}
                header={i18n.t('PhotoViewer.errors.path.header')}
                icon='exclamation circle'
              />
            )}
            { !error && (
              <Image
                alt={props.alt}
                fluid
                onError={() => setError(true)}
                src={props.image}
              />
            )}
          </Modal.Content>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

PhotoViewer.defaultProps = {
  size: 'small'
};

export default PhotoViewer;
