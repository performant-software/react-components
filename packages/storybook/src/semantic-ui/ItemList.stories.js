// @flow

import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import React, { useCallback, useState } from 'react';
import { Button, Header } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import Api from '../services/Api';
import ItemList from '../../../semantic-ui/src/components/ItemList';
import items from '../data/Cars.json';
import FilterModal from '../components/FilterModal';
import useDragDrop from '../../../shared/src/utils/DragDrop';
import { Views } from '../../../semantic-ui/src/components/ItemsToggle';

export default {
  title: 'Components/Semantic UI/ItemList',
  component: ItemList
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

export const Default = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const AddButton = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const DefaultView = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    defaultView={Views.grid}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 20)
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const DeleteAllButton = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    deleteButton={{
      color: 'red',
      location: 'top'
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onDeleteAll={action('delete all')}
    onSave={() => Promise.resolve()}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const Empty = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={Api.onLoadEmpty.bind(this)}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={Api.onLoadEmpty.bind(this)}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const ExtraButtons = useDragDrop(() => (
  <ItemList
    actions={actions}
    buttons={[{
      render: () => (
        <Button
          content='Button 1'
          onClick={action('button1')}
        />
      )
    }, {
      location: 'bottom',
      render: () => (
        <Button
          content='Button 2'
          onClick={action('button2')}
        />
      )
    }]}
    collectionName='items'
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const Filters = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    filters={{
      component: FilterModal
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const InitialSave = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
    saved
  />
));

export const Loading = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    })))}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const Polling = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    polling={5000}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const Sortable = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
    sort={[{
      key: 'make',
      value: 'make',
      text: 'Make'
    }, {
      key: 'model',
      value: 'model',
      text: 'Model'
    }, {
      key: 'vin',
      value: 'vin',
      text: 'VIN'
    }]}
  />
));

export const Selectable = useDragDrop(() => {
  const [selectedItems, setSelectedItems] = useState([]);

  /**
   * Returns true if the passed item is in the list of selected items.
   *
   * @type {function(*): *}
   */
  const isSelected = useCallback((item) => _.contains(selectedItems, item.id), [selectedItems]);

  /**
   * Removes the passed item from the list of selected items if selected. Adds the passed item to the list of selected
   * items if not selected.
   *
   * @type {(function(*=): void)|*}
   */
  const onRowSelect = useCallback((item) => {
    if (isSelected(item)) {
      setSelectedItems((prevItems) => _.filter(prevItems, (id) => id !== item.id));
    } else {
      setSelectedItems((prevItems) => ([...prevItems, item.id]));
    }
  }, [selectedItems]);

  return (
    <ItemList
      actions={actions}
      collectionName='items'
      isRowSelected={isSelected.bind(this)}
      modal={{
        component: AddModal
      }}
      onCopy={action('copy')}
      onLoad={(params) => Api.onLoad(_.extend(params, {
        items,
        perPage: number('Per page', 10)
      }))}
      onDelete={action('delete')}
      onRowSelect={onRowSelect.bind(this)}
      onSave={action('save')}
      renderDescription={(item) => item.vin}
      renderExtra={(item) => item.address}
      renderHeader={(item) => <Header content={item.model} />}
      renderMeta={(item) => item.make}
      searchable={boolean('Searchable', true)}
      selectable
    />
  );
});

export const SortDescending = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
    sort={[{
      key: 'make',
      value: 'make',
      text: 'Make',
      direction: 'descending'
    }, {
      key: 'model',
      value: 'model',
      text: 'Model'
    }, {
      key: 'vin',
      value: 'vin',
      text: 'VIN',
      direction: 'descending'
    }]}
  />
));

export const CustomListHeader = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    hideToggle
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderListHeader={() => (
      <Button
        icon='world'
        onClick={action('custom-list-header')}
      />
    )}
    renderMeta={(item) => item.make}
    searchable={boolean('Searchable', true)}
  />
));

export const NoListHeader = useDragDrop(() => (
  <ItemList
    actions={actions}
    collectionName='items'
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: number('Per page', 10)
    }))}
    hideToggle
    onDelete={action('delete')}
    onSave={action('save')}
    renderDescription={(item) => item.vin}
    renderExtra={(item) => item.address}
    renderHeader={(item) => <Header content={item.model} />}
    renderMeta={(item) => item.make}
    searchable={false}
  />
));
