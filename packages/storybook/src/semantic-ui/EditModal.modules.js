// @flow

import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import {
  Button,
  Form,
  Icon,
  Message,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import Api from '../services/Api';
import AssociatedDropdown from '../../../semantic-ui/src/components/AssociatedDropdown';
import EditModal from '../../../semantic-ui/src/components/EditModal';
import items from '../data/Companies.json';

import type { EditContainerProps } from '../../../shared/src/components/EditContainer';

const withWrapper = (WrappedComponent) => (props) => {
  const [modal, setModal] = useState(false);

  const onClose = useCallback(() => {
    setModal(false);
    action('close')();
  }, []);

  const onSave = useCallback(() => {
    setModal(false);
    action('save')();
    return Promise.resolve();
  }, []);

  return (
    <>
      <Button
        content='Open'
        primary
        onClick={() => setModal(true)}
      />
      <WrappedComponent
        {...props}
        onClose={onClose}
        onSave={onSave}
        open={modal}
      />
    </>
  );
};

export const Default = withWrapper((props) => (
  <EditModal
    component={(innerProps: EditContainerProps) => (
      <Modal
        as={Form}
        open={props.open}
      >
        <Modal.Header
          content='Add Record'
        />
        <Modal.Content>
          <Form.Input
            label='Name'
          />
          <Form.Input
            label='Address'
          />
          <Form.Input
            label='Phone'
          />
        </Modal.Content>
        { innerProps.children }
      </Modal>
    )}
    onClose={props.onClose}
    onSave={props.onSave}
  />
));

export const Loading = withWrapper((props) => (
  <EditModal
    component={(innerProps: EditContainerProps) => (
      <Modal
        as={Form}
        open={props.open}
      >
        <Modal.Header
          content='Add Record'
        />
        <Modal.Content>
          <Form.Input
            label='Name'
          />
          <Form.Input
            label='Address'
          />
          <Form.Input
            label='Phone'
          />
        </Modal.Content>
        { innerProps.children }
      </Modal>
    )}
    item={{ id: 1 }}
    onClose={props.onClose}
    onInitialize={() => new Promise((resolve) => {
      _.delay(resolve.bind(this, {}), 5000);
    })}
    onSave={props.onSave}
  />
));

export const SaveError = withWrapper((wrapperProps) => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open={wrapperProps.open}
        noValidate
      >
        <Modal.Header
          content='Add Record'
        />
        <Modal.Content>
          <Form.Input
            required={props.isRequired('name')}
            error={props.isError('name')}
            label='Name'
            onChange={props.onTextInputChange.bind(this, 'name')}
          />
          <Form.Input
            required={props.isRequired('address')}
            error={props.isError('address')}
            label='Address'
            onChange={props.onTextInputChange.bind(this, 'address')}
          />
          <Form.Input
            required={props.isRequired('phone')}
            error={props.isError('phone')}
            onChange={props.onTextInputChange.bind(this, 'phone')}
            label='Phone'
          />
        </Modal.Content>
        { props.children }
      </Modal>
    )}
    onClose={wrapperProps.onClose}
    onSave={wrapperProps.onSave}
    required={['phone', 'name', 'address']}
  />
));

export const Toaster = withWrapper((props) => (
  <EditModal
    component={(innerProps: EditContainerProps) => (
      <Modal
        as={Form}
        open={props.open}
      >
        <Modal.Header
          content='Add Record'
        />
        <Modal.Content>
          <Form.Input
            label='Name'
          />
          <Form.Input
            label='Address'
          />
          <Form.Input
            label='Phone'
          />
          <Form.Input
            label='Field'
            required
          >
            <AssociatedDropdown
              collectionName='items'
              modal={{
                component: AddModal,
                onSave: () => {
                  action('save')();
                  return Promise.resolve({});
                }
              }}
              onSearch={(search) => Api.onLoad({ items, search })}
              onSelection={action('selection')}
              renderOption={(item) => ({
                key: item.id,
                value: item.id,
                text: item.company,
                description: item.country
              })}
              upward={boolean('Open upward', false)}
            />
          </Form.Input>
        </Modal.Content>
        { innerProps.children }
      </Modal>
    )}
    onClose={props.onClose}
    onSave={props.onSave}
  />
));

export const UnsavedChanges = withWrapper((wrapperProps) => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open={wrapperProps.open}
      >
        <Modal.Header
          content='Add record'
        />
        <Modal.Content>
          <Message
            warning
            visible={props.dirty}
          >
            <Message.Header>
              <Icon
                name='exclamation triangle'
              />
              Warning
            </Message.Header>
            <p>You have unsaved changes.</p>
          </Message>
          <Form.Input
            label='Name'
            onChange={props.onTextInputChange.bind(this, 'name')}
            value={props.item.name || ''}
          />
          <Form.Input
            label='Address'
            onChange={props.onTextInputChange.bind(this, 'address')}
            value={props.item.address || ''}
          />
          <Form.Input
            label='Phone'
            onChange={props.onTextInputChange.bind(this, 'phone')}
            value={props.item.phone || ''}
          />
        </Modal.Content>
        { props.children }
      </Modal>
    )}
    item={{
      id: 1,
      name: 'Test',
      address: '123 Main St',
      phone: null
    }}
    onClose={wrapperProps.onClose}
    onSave={wrapperProps.onSave}
  />
));
