// @flow

import React, { type Node } from 'react';
import { Modal } from 'semantic-ui-react';

type Props = {
  children: Node
};

const AddModal = (props: Props) => (
  <Modal
    open
  >
    <Modal.Header>Add</Modal.Header>
    <Modal.Content>Add something here</Modal.Content>
    { props.children }
  </Modal>
);

export default AddModal;
