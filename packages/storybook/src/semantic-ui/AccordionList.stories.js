// @flow

import React from 'react';
import { action } from 'storybook/actions';
import _ from 'underscore';
import { Button } from 'semantic-ui-react';
import AccordionList from '../../../semantic-ui/src/components/AccordionList';
import AddModal from '../components/AddModal';
import Api from '../services/Api';

export default {
  title: 'Components/Semantic UI/AccordionList',
  component: AccordionList
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
      }
    ]}
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
