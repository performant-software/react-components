// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import _ from 'underscore';
import EditPage from '../../../src/semantic-ui/EditPage';
import AssociatedDropdown from '../../../src/semantic-ui/AssociatedDropdown';
import AddModal from '../AddModal';
import Api from '../../services/Api';

export default {
  title: 'Components/Semantic UI/EditPage',
  decorators: [withA11y, withKnobs]
};

const TestForm = () => (
  <div>
    <Form.Input
      label='Name'
    />
    <Form.Input
      label='Address'
    />
    <Form.Input
      label='Phone'
    />
  </div>
);

export const Default = () => (
  <EditPage
    component={TestForm}
    onClose={action('close')}
    onSave={action('save')}
  />
);

export const WithMenu = () => (
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
    onClose={action('close')}
    onSave={action('save')}
  />
);

const items = [{
  "id": 1,
  "company": "Bradtke LLC",
  "email": "smccunn0@symantec.com",
  "card": "4913389273457809",
  "country": "China"
}, {
  "id": 2,
  "company": "Jacobi Inc",
  "email": "rrivard1@abc.net.au",
  "card": "30460843005398",
  "country": "Zimbabwe"
}, {
  "id": 3,
  "company": "Mraz, Blanda and Hettinger",
  "email": "rrummins2@fastcompany.com",
  "card": "6709016072353592810",
  "country": "Iran"
}, {
  "id": 4,
  "company": "Rutherford, King and Bergstrom",
  "email": "dkrauss3@mit.edu",
  "card": "374288311284433",
  "country": "Bosnia and Herzegovina"
}];

const ToasterForm = () => (
  <div>
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
  </div>
);

export const WithToaster = () => (
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
    onClose={action('close')}
    onSave={action('save')}
  />
);

export const WithSaveError = () => (
  <EditPage
    component={(props) => (
      <>
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
      </>
    )}
    onClose={action('close')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    required={['name', 'address', 'phone']}
  />
);

export const WithLoading = () => (
  <EditPage
    component={TestForm}
    item={{ id: 1 }}
    onClose={action('close')}
    onInitialize={() => new Promise((resolve) => {
      _.delay(resolve.bind(this), 5000);
    })}
    onSave={action('save')}
  />
);
