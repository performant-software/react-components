// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Button } from 'semantic-ui-react';
import AccordionDataList from '../../../src/semantic-ui/AccordionDataList';
import AddModal from '../AddModal';
import Api from '../../services/Api';

export default {
  title: 'Components/Semantic UI/AccordionDataList',
  decorators: [withA11y, withKnobs]
};

const data = [{
  id: 1,
  name: 'Parent 1',
  children: [{
    id: 3,
    name: 'Child 1',
  }, {
    id: 4,
    name: 'Child 2',
  }]
}, {
  id: 2,
  name: 'Parent 2',
  children: [{
    id: 5,
    name: 'Child 3',
    children: [{
      id: 6,
      name: 'Grandchild 1',
      parent_id: 5
    }]
  }]
}];

export const Default = () => (
  <AccordionDataList
    actions={[{
      name: 'edit',
      accept: () => boolean('Can edit', true)
    }, {
      name: 'copy',
      accept: () => boolean('Can copy', true)
    }, {
      name: 'delete',
      accept: () => boolean('Can delete', true)
    }]}
    collectionName='items'
    getChildItems={(items, item) => item.children}
    getRootItems={(items) => items}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onLoad={(params) => Api.onLoad({ ...params, items: data })}
    renderItem={(item) => item.name}
    showToggle={() => true}
  />
);

export const WithRecordCount = () => (
  <AccordionDataList
    actions={[{
      name: 'edit',
      accept: () => boolean('Can edit', true)
    }, {
      name: 'copy',
      accept: () => boolean('Can copy', true)
    }, {
      name: 'delete',
      accept: () => boolean('Can delete', true)
    }]}
    collectionName='items'
    getChildItems={(items, item) => item.children}
    getRootItems={(items) => items}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onLoad={(params) => Api.onLoad({ ...params, items: data })}
    renderItem={(item) => item.name}
    showRecordCount
    showToggle={() => true}
  />
);

export const Sortable = () => (
  <AccordionDataList
    actions={[{
      name: 'edit',
      accept: () => boolean('Can edit', true)
    }, {
      name: 'copy',
      accept: () => boolean('Can copy', true)
    }, {
      name: 'delete',
      accept: () => boolean('Can delete', true)
    }]}
    collectionName='items'
    getChildItems={(items, item) => item.children}
    getRootItems={(items) => items}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onLoad={(params) => Api.onLoad({ ...params, items: data })}
    renderItem={(item) => item.name}
    showToggle={() => true}
    sort={[{
      key: 'name',
      value: 'name',
      text: 'Name'
    }, {
      key: 'date',
      value: 'date',
      text: 'Date'
    }]}
  />
);

export const Selectable = () => (
  <AccordionDataList
    actions={[{
      name: 'edit',
      accept: () => boolean('Can edit', true)
    }, {
      name: 'copy',
      accept: () => boolean('Can copy', true)
    }, {
      name: 'delete',
      accept: () => boolean('Can delete', true)
    }]}
    buttons={[
      {
        render: () => <Button key='1'>Test</Button>
      },
      {
        render: () => <Button key='2'>Test 2</Button>
      },
    ]}
    collectionName='items'
    getChildItems={(items, item) => item.children}
    getRootItems={(items) => items}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onLoad={(params) => Api.onLoad({ ...params, items: data })}
    onRowSelect={action('row selected')}
    renderItem={(item) => item.name}
    selectable
    selectedRows={[{ id: 1 }, { id: 2 }, { id: 3 }]}
    showToggle={() => true}
  />
);
