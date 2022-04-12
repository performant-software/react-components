// @flow

import { useEditContainer, type EditContainerProps } from '@react-components/shared';
import React from 'react';
import { Form, Modal } from 'semantic-ui-react';

type Props = EditContainerProps & {
  item: {
    test: string
  }
};

const FilterModal = (props: Props) => (
  <Modal
    as={Form}
    open
  >
    <Modal.Header>Add Filter</Modal.Header>
    <Modal.Content>
      <Form.Input
        label='Test'
        onChange={props.onTextInputChange.bind(this, 'test')}
        value={props.item.test || ''}
      />
    </Modal.Content>
    { props.children }
  </Modal>
);

export default useEditContainer(FilterModal);
