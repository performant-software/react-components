// @flow

import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import './AudioPlayer.css';

type Props = {
  centered?: boolean,
  onClose: () => void,
  open: boolean,
  src: string
};

const AudioPlayer = (props: Props) => (
  <Modal
    centered={props.centered}
    className='audio-player'
    open={props.open}
  >
    <Modal.Content>
      <audio
        controls
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
);

export default AudioPlayer;
