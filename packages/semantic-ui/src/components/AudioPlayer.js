// @flow

import React, { useState } from 'react';
import { Button, Message, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import ModalContext from '../context/ModalContext';
import './AudioPlayer.css';

type Props = {
  centered?: boolean,
  onClose: () => void,
  open: boolean,
  src: string
};

const AudioPlayer = (props: Props) => {
  const [error, setError] = useState(false);

  return (
    <ModalContext.Consumer>
      {(mountNode) => (
        <Modal
          centered={props.centered}
          className='audio-player'
          mountNode={mountNode}
          open={props.open}
        >
          <Modal.Content>
            { error && (
              <Message
                content={i18n.t('AudioPlayer.errors.path.content', { path: props.src })}
                header={i18n.t('AudioPlayer.errors.path.header')}
                icon='exclamation circle'
              />
            )}
            <audio
              controls
              onError={() => setError(true)}
              src={props.src}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              content={i18n.t('Common.buttons.close')}
              onClick={props.onClose}
            />
          </Modal.Actions>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

export default AudioPlayer;
