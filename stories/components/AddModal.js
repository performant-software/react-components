import React from 'react';
import { Modal } from 'semantic-ui-react';

const AddModal = (props) => (
  <Modal
    open
  >
    <Modal.Header>Add</Modal.Header>
    <Modal.Content>Add something here</Modal.Content>
    { props.children }
  </Modal>
);

export default AddModal;