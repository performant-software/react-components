import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Form, Modal } from 'semantic-ui-react';
import EditModal from '../../../src/semantic-ui/EditModal';
import Toaster from '../../../src/semantic-ui/Toaster';
import i18n from '../../../src/i18n/i18n';
import AssociatedDropdown from '../../../src/semantic-ui/AssociatedDropdown';
import AddModal from '../AddModal';
import Api from '../../services/Api';

export default {
  title: 'Components/Semantic UI/EditModal',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <EditModal
    component={(props) => (
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

export const WithToaster = () => (
  <EditModal
    component={(props) => (
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
    onClose={action('close')}
    onSave={action('save')}
  />
);

export const WithSaveError = () => (
  <EditModal
    component={(props) => (
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
    onClose={action('close')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    required={['phone', 'name', 'address']}
  />
);
