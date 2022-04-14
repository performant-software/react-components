// @flow

import { AccordionList } from '@performant-software/semantic-components';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import _ from 'underscore';
import { Button } from 'semantic-ui-react';
import AddModal from '../components/AddModal';
import Api from '../services/Api';

export default {
  title: 'Components/Semantic UI/AccordionList',
  decorators: [withA11y, withKnobs]
};

const data = [{
  id: 1,
  name: 'Parent 1',
  parent_id: null
}, {
  id: 2,
  name: 'Parent 2',
  parent_id: null
}, {
  id: 3,
  name: 'Child 1',
  parent_id: 1
}, {
  id: 4,
  name: 'Child 2',
  parent_id: 1
}, {
  id: 5,
  name: 'Child 3',
  parent_id: 2
}, {
  id: 6,
  name: 'Grandchild 1',
  parent_id: 5
}];

export const Default = () => (
  <AccordionList
    canAddItem={() => boolean('Can add', true)}
    canDeleteItem={() => boolean('Can delete', true)}
    canEditItem={() => boolean('Can edit', true)}
    collectionName='items'
    getChildItems={(items, item) => _.where(items, { parent_id: item.id })}
    getRootItems={(items) => _.where(items, { parent_id: null })}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onSearch={(parentId, search) => Api.onNestedLoad({
      items: data, parentId, parentKey: 'parent_id', search
    })}
    renderItem={(item) => item.name}
    showToggle={() => true}
  />
);

export const WithRecordCount = () => (
  <AccordionList
    canAddItem={() => boolean('Can add', true)}
    canDeleteItem={() => boolean('Can delete', true)}
    canEditItem={() => boolean('Can edit', true)}
    collectionName='items'
    getChildItems={(items, item) => _.where(items, { parent_id: item.id })}
    getRootItems={(items) => _.where(items, { parent_id: null })}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onSearch={(parentId, search) => Api.onNestedLoad({
      items: data, parentId, parentKey: 'parent_id', search
    })}
    renderItem={(item) => item.name}
    showToggle={() => true}
  />
);

export const Selectable = () => (
  <AccordionList
    buttons={[
      {
        render: () => <Button key='1'>Test</Button>
      },
      {
        render: () => <Button key='2'>Test 2</Button>
      },
    ]}
    canAddItem={() => boolean('Can add', true)}
    canDeleteItem={() => boolean('Can delete', true)}
    canEditItem={() => boolean('Can edit', true)}
    collectionName='items'
    getChildItems={(items, item) => _.where(items, { parent_id: item.id })}
    getRootItems={(items) => _.where(items, { parent_id: null })}
    modal={{
      component: AddModal
    }}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    onSearch={(parentId, search) => Api.onNestedLoad({
      items: data, parentId, parentKey: 'parent_id', search
    })}
    renderItem={(item) => item.name}
    selectable
    selectedRows={[{ id: 1 }]}
    onRowSelect={action('row selected')}
    onSelectAll={action('select all')}
    showToggle={() => true}
  />
);
