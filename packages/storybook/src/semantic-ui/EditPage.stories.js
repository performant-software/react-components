// @flow

import { action } from 'storybook/actions';
import React from 'react';
import { Form } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import Api from '../services/Api';
import AssociatedDropdown from '../../../semantic-ui/src/components/AssociatedDropdown';
import EditPage from '../../../semantic-ui/src/components/EditPage';
import type { EditContainerProps } from '../../../shared/src/components/EditContainer';
import items from '../data/Companies.json';

export default {
  title: 'Components/Semantic UI/EditPage',
  component: EditPage
};

const onClose = action('close');

const onSave = () => {
  action('save')();
  return Promise.resolve();
};

const TestForm = () => (
  <div>
    <Form.Input
      aria-label='Name'
      label='Name'
    />
    <Form.Input
      aria-label='Address'
      label='Address'
    />
    <Form.Input
      aria-label='Phone'
      label='Phone'
    />
  </div>
);

export const Default = () => (
  <EditPage
    component={TestForm}
    onClose={onClose}
    onSave={onSave}
  />
);

export const Loading = () => (
  <EditPage
    component={TestForm}
    item={{ id: 1 }}
    onClose={onClose}
    onInitialize={() => new Promise((resolve) => {
      _.delay(resolve.bind(this, { id: 1 }), 5000);
    })}
    onSave={onSave}
  />
);

export const Menu = () => (
  <EditPage
    component={TestForm}
    menu={{
      items: [{
        name: 'Details',
        key: 'details'
      }, {
        name: 'Technical',
        key: 'technical'
      }, {
        name: 'Other',
        key: 'other'
      }]
    }}
    onClose={onClose}
    onSave={onSave}
  />
);

export const SaveError = () => (
  <EditPage
    component={(props: EditContainerProps) => (
      <>
        <Form.Input
          id='name'
          required={props.isRequired('name')}
          error={props.isError('name')}
          label='Name'
          onChange={props.onTextInputChange.bind(this, 'name')}
        />
        <Form.Input
          id='address'
          required={props.isRequired('address')}
          error={props.isError('address')}
          label='Address'
          onChange={props.onTextInputChange.bind(this, 'address')}
        />
        <Form.Input
          id='phone'
          required={props.isRequired('phone')}
          error={props.isError('phone')}
          onChange={props.onTextInputChange.bind(this, 'phone')}
          label='Phone'
        />
      </>
    )}
    onClose={onClose}
    onSave={onSave}
    required={['name', 'address', 'phone']}
  />
);

const ToasterForm = () => (
  <div>
    <Form.Input
      id='name'
      label='Name'
    />
    <Form.Input
      id='address'
      label='Address'
    />
    <Form.Input
      id='phone'
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
      />
    </Form.Input>
  </div>
);

export const Toaster = () => (
  <EditPage
    component={ToasterForm}
    menu={{
      items: [{
        name: 'Details',
        key: 'details'
      }, {
        name: 'Technical',
        key: 'technical'
      }, {
        name: 'Other',
        key: 'other'
      }]
    }}
    onClose={onClose}
    onSave={onSave}
  />
);
