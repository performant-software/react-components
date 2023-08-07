// @flow

import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import React from 'react';
import {
  Confirm,
  Header,
  Image,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import Items from '../../../semantic-ui/src/components/Items';
import image from '../assets/test-image.jpg';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/Items',
  component: Items
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

const items = _.times(5, (i) => ({
  id: i,
  header: `Test ${i}`,
  image,
  image_alt: `Test ${i}`
}));

export const Default = useDragDrop(() => (
  <Items
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const AddButton = useDragDrop(() => (
  <Items
    actions={actions}
    items={items}
    modal={{
      component: (props: any) => (
        <Modal
          open
        >
          <Modal.Header>Add</Modal.Header>
          <Modal.Content>Add some stuff here</Modal.Content>
          { props.children }
        </Modal>
      )
    }}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const CustomActions = useDragDrop(() => (
  <Items
    actions={[{
      basic: true,
      label: 'View',
      name: 'view',
      icon: 'picture',
      onClick: action('view-click')
    }, {
      basic: true,
      label: 'History',
      name: 'history',
      icon: 'history',
      onClick: action('history-click')
    }, {
      basic: true,
      label: 'Coffee',
      name: 'coffee',
      icon: 'coffee',
      onClick: action('coffee-click')
    }]}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const CustomDeleteModal = useDragDrop(() => (
  <Items
    actions={actions}
    items={items}
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
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const Empty = useDragDrop(() => (
  <Items
    actions={actions}
    items={[]}
    onCopy={action('copy')}
    onDelete={action('delete')}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <Items
    actions={actions}
    items={[]}
    modal={{
      component: (props: any) => (
        <Modal
          open
        >
          <Modal.Header>Add</Modal.Header>
          <Modal.Content>Add some stuff here</Modal.Content>
          { props.children }
        </Modal>
      )
    }}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));

export const Pagination = useDragDrop(() => (
  <Items
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    page={number('Page', 1)}
    pages={number('Pages', 10)}
    renderImage={(item) => <Image alt={item.image_alt} src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));
