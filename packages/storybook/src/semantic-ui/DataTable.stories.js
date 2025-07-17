// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import {
  Confirm,
  Header,
  Modal,
  Button
} from 'semantic-ui-react';
import DataTable from '../../../semantic-ui/src/components/DataTable';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/DataTable',
  decorators: [withKnobs]
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

const columns = [{
  name: 'last_name',
  label: 'Last name',
  sortable: false
}, {
  name: 'first_name',
  label: 'First name',
  sortable: false
}, {
  name: 'email',
  label: 'Email',
  sortable: false
}, {
  name: 'ip_address',
  label: 'IP address',
  sortable: false
}, {
  name: 'country',
  label: 'Country',
  sortable: false
}];

const items = [{
  last_name: 'Skittle',
  first_name: 'Kyle',
  email: 'kskittle0@gmpg.org',
  gender: 'Male',
  ip_address: '51.229.4.38',
  country: 'Macedonia'
}, {
  last_name: 'Brood',
  first_name: 'Edik',
  email: 'ebrood1@latimes.com',
  gender: 'Male',
  ip_address: '66.239.219.247',
  country: 'Macedonia'
}, {
  last_name: 'Noli',
  first_name: 'Dewie',
  email: 'dnoli2@mit.edu',
  gender: 'Male',
  ip_address: '182.92.3.18',
  country: 'Samoa'
}, {
  last_name: 'Hazlehurst',
  first_name: 'Garv',
  email: 'ghazlehurst3@salon.com',
  gender: 'Male',
  ip_address: '36.76.163.147',
  country: 'Philippines'
}, {
  last_name: 'Ridout',
  first_name: 'Tobe',
  email: 'tridout4@privacy.gov.au',
  gender: 'Male',
  ip_address: '10.212.244.216',
  country: 'Pakistan'
}, {
  last_name: 'Carlan',
  first_name: 'Justus',
  email: 'jcarlan5@privacy.gov.au',
  gender: 'Male',
  ip_address: '71.140.156.168',
  country: 'Sweden'
}, {
  last_name: 'Antoniades',
  first_name: 'Enrique',
  email: 'eantoniades6@stanford.edu',
  gender: 'Male',
  ip_address: '160.3.77.37',
  country: 'China'
}, {
  last_name: 'Evangelinos',
  first_name: 'Rheba',
  email: 'revangelinos7@eepurl.com',
  gender: 'Female',
  ip_address: '111.227.166.224',
  country: 'Botswana'
}, {
  last_name: 'Ceeley',
  first_name: 'Kirsten',
  email: 'kceeley8@t.co',
  gender: 'Female',
  ip_address: '62.21.163.232',
  country: 'Indonesia'
}, {
  last_name: 'Swoffer',
  first_name: 'Amalee',
  email: 'aswoffer9@hugedomains.com',
  gender: 'Female',
  ip_address: '140.166.164.147',
  country: 'China'
}];

export const Default = useDragDrop(() => (
  <DataTable
    actions={actions}
    buttons={[
      {
        render: () => <Button key='1'>Test</Button>
      }
    ]}
    columns={columns}
    items={items}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
  />
));

export const Empty = useDragDrop(() => (
  <DataTable
    actions={actions}
    columns={columns}
    items={[]}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
  />
));

export const AddButton = useDragDrop(() => (
  <DataTable
    actions={actions}
    columns={columns}
    items={items}
    modal={{
      component: (props) => (
        <Modal
          open
        >
          <Modal.Header>Add</Modal.Header>
          <Modal.Content>Add some stuff here</Modal.Content>
          { props.children }
        </Modal>
      )
    }}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <DataTable
    actions={actions}
    columns={columns}
    items={[]}
    modal={{
      component: (props) => (
        <Modal
          open
        >
          <Modal.Header>Add</Modal.Header>
          <Modal.Content>Add some stuff here</Modal.Content>
          { props.children }
        </Modal>
      )
    }}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
  />
));

export const CustomActions = useDragDrop(() => (
  <DataTable
    actions={[{
      name: 'view',
      icon: 'picture',
      onClick: action('view-click')
    }, {
      name: 'history',
      icon: 'history',
      onClick: action('history-click')
    }, {
      name: 'coffee',
      icon: 'coffee',
      onClick: action('coffee-click')
    }, {
      as: 'a',
      asProps: () => ({
        href: 'https://performantsoftware.com',
        target: '_blank'
      }),
      name: 'link',
      icon: 'linkify'
    }]}
    columns={columns}
    items={items}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
  />
));

export const Pagination = useDragDrop(() => (
  <DataTable
    actions={actions}
    columns={columns}
    items={items}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    page={number('Page', 1)}
    pages={number('Pages', 10)}
    showRecordCount
  />
));

export const CsvExport = useDragDrop(() => (
  <DataTable
    actions={actions}
    buttons={[
      {
        render: () => <Button key='1'>Test</Button>
      }
    ]}
    columns={columns}
    csvExportButton={{
      color: 'blue',
      location: 'bottom'
    }}
    items={items}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
  />
));

export const CustomDeleteModal = useDragDrop(() => (
  <DataTable
    actions={actions}
    columns={columns}
    items={items}
    onColumnClick={action('column-click')}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDeleteModal={({ onCancel, onConfirm }) => (
      <Confirm
        content='Yo, do you really want to delete this?'
        header={<Header icon='hand paper outline' content='Really?' />}
        onCancel={onCancel}
        onConfirm={onConfirm}
        open
      />
    )}
  />
));
