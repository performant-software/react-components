// @flow

import { Items } from '@react-components/semantic-ui';
import { useDragDrop } from '@react-components/shared';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { number, withKnobs } from '@storybook/addon-knobs';
import {
  Confirm,
  Header,
  Image,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import image from '../assets/test-image.jpg';

export default {
  title: 'Components/Semantic UI/Items',
  decorators: [withA11y, withKnobs]
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

const items = _.times(20, (i) => ({ id: i, header: `Test ${i}`, image }));

export const Default = useDragDrop(() => (
  <Items
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
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
    renderImage={(item) => <Image src={item.image} />}
    renderHeader={(item) => <Header content={item.header} />}
    renderMeta={(item) => item.id}
  />
));
