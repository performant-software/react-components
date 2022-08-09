// @flow

import React from 'react';
import { Modal } from 'semantic-ui-react';
import { IIIFViewer } from '@performant-software/shared-components';

type Props = {
  onClose: () => void
};

const IIIFModal = ({ onClose, ...props }: Props) => (
  <Modal
    centered={false}
    closeIcon
    onClose={onClose}
    open
  >
    <Modal.Content>
      <IIIFViewer
        {...props}
      />
    </Modal.Content>
  </Modal>
);

export default IIIFModal;
