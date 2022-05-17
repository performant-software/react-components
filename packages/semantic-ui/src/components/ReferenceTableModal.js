// @flow

import type { EditContainerProps } from '@performant-software/shared-components';
import React from 'react';
import { Form, Header, Modal } from 'semantic-ui-react';
import EmbeddedList from './EmbeddedList';
import ReferenceCodeModal from './ReferenceCodeModal';
import i18n from '../i18n/i18n';

const ReferenceTableModal = (props: EditContainerProps) => (
  <Modal
    as={Form}
    centered={false}
    className='reference-table-modal'
    open
  >
    <Modal.Header
      content={props.item.id
        ? i18n.t('ReferenceTableModal.title.edit')
        : i18n.t('ReferenceTableModal.title.add')}
    />
    <Modal.Content>
      <Form.Input
        error={props.isError('name')}
        label={i18n.t('ReferenceTableModal.labels.name')}
        onChange={props.onTextInputChange.bind(this, 'name')}
        required={props.isRequired('name')}
        value={props.item.name}
      />
      <Form.Input
        error={props.isError('key')}
        label={i18n.t('ReferenceTableModal.labels.key')}
        onChange={props.onTextInputChange.bind(this, 'key')}
        required={props.isRequired('key')}
        value={props.item.key}
      />
      <Header
        content={i18n.t('ReferenceTableModal.labels.referenceCodes')}
      />
      <EmbeddedList
        actions={[{
          name: 'edit'
        }, {
          name: 'copy'
        }, {
          name: 'delete'
        }]}
        columns={[{
          name: 'name',
          label: i18n.t('ReferenceTableModal.referenceCodes.columns.name')
        }]}
        items={props.item.reference_codes}
        modal={{
          component: ReferenceCodeModal,
          props: {
            required: ['name']
          }
        }}
        onDelete={props.onDeleteChildAssociation.bind(this, 'reference_codes')}
        onSave={props.onSaveChildAssociation.bind(this, 'reference_codes')}
      />
    </Modal.Content>
    { props.children }
  </Modal>
);

export default ReferenceTableModal;
