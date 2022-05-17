// @flow

import type { EditContainerProps } from '@performant-software/shared-components';
import React from 'react';
import { Form, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

const ReferenceCodeModal = (props: EditContainerProps) => (
  <Modal
    as={Form}
    centered={false}
    open
  >
    <Modal.Header
      content={props.item.id
        ? i18n.t('ReferenceCodeModal.title.edit')
        : i18n.t('ReferenceCodeModal.title.add')}
    />
    <Modal.Content>
      <Form.Input
        error={props.isError('name')}
        label={i18n.t('ReferenceCodeModal.labels.name')}
        onChange={props.onTextInputChange.bind(this, 'name')}
        required={props.isRequired('name')}
        value={props.item.name}
      />
    </Modal.Content>
    { props.children }
  </Modal>
);

export default ReferenceCodeModal;
