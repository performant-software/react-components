// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import {
  Form,
  Icon,
  Message,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import EditModal from '../../../src/semantic-ui/EditModal';
import AssociatedDropdown from '../../../src/semantic-ui/AssociatedDropdown';
import AddModal from '../AddModal';
import Api from '../../services/Api';

import type { EditContainerProps } from '../../../src/common/EditContainer';

export default {
  title: 'Components/Semantic UI/EditModal',
  decorators: [withA11y, withKnobs]
};

const onClose = action('close');

const onSave = () => {
  action('save')();
  return Promise.resolve();
};

export const Default = () => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open
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
        { props.children }
      </Modal>
    )}
    onClose={onClose}
    onSave={onSave}
  />
);

const items = [{
  id: 1,
  company: 'Bradtke LLC',
  email: 'smccunn0@symantec.com',
  card: '4913389273457809',
  country: 'China'
}, {
  id: 2,
  company: 'Jacobi Inc',
  email: 'rrivard1@abc.net.au',
  card: '30460843005398',
  country: 'Zimbabwe'
}, {
  id: 3,
  company: 'Mraz, Blanda and Hettinger',
  email: 'rrummins2@fastcompany.com',
  card: '6709016072353592810',
  country: 'Iran'
}, {
  id: 4,
  company: 'Rutherford, King and Bergstrom',
  email: 'dkrauss3@mit.edu',
  card: '374288311284433',
  country: 'Bosnia and Herzegovina'
}];

export const WithToaster = () => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open
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
        { props.children }
      </Modal>
    )}
    onClose={onClose}
    onSave={onSave}
  />
);

export const WithSaveError = () => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open
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
    onClose={onClose}
    onSave={onSave}
    required={['phone', 'name', 'address']}
  />
);

export const WithLoading = () => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open
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
        { props.children }
      </Modal>
    )}
    item={{ id: 1 }}
    onClose={onClose}
    onInitialize={() => new Promise((resolve) => {
      _.delay(resolve.bind(this, {}), 5000);
    })}
    onSave={onSave}
  />
);

export const WithUnsavedChanged = () => (
  <EditModal
    component={(props: EditContainerProps) => (
      <Modal
        as={Form}
        open
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
    onClose={onClose}
    onSave={onSave}
  />
);
