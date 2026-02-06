// @flow

import { action } from 'storybook/actions';
import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'underscore';
import ListTable from '../../../semantic-ui/src/components/ListTable';
import Api from '../services/Api';
import AddModal from '../components/AddModal';
import FilterModal from '../components/FilterModal';
import items from '../data/Cars.json';
import ListFilters, { FilterOperators, FilterTypes } from '../../../semantic-ui/src/components/ListFilters';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/ListTable',
  component: ListTable
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

const columns = [{
  name: 'make',
  label: 'Make',
  sortable: true
}, {
  name: 'model',
  label: 'Model',
  sortable: true
}, {
  name: 'vin',
  label: 'Vin',
  sortable: true
}, {
  name: 'address',
  label: 'Address',
  sortable: true
}, {
  name: 'city',
  label: 'City',
  sortable: true
}, {
  name: 'state',
  label: 'State',
  sortable: true
}];

export const Default = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const AddButton = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const AddButtonEmpty = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={Api.onLoadEmpty.bind(this)}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const Count = useDragDrop(() => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        content={`Clicks: ${count}`}
        primary
        onClick={() => setCount((prevCount) => prevCount + 1)}
      />
      <ListTable
        actions={actions}
        collectionName='items'
        columns={[{
          name: 'make',
          label: 'Make',
          sortable: true
        }, {
          name: 'model',
          label: 'Model',
          sortable: true
        }, {
          name: 'vin',
          label: 'Vin',
          sortable: true
        }, {
          name: 'address',
          label: 'Address',
          sortable: true
        }, {
          name: 'city',
          label: 'City',
          sortable: true
        }, {
          name: 'state',
          label: 'State',
          sortable: true
        }]}
        onCopy={action('copy')}
        onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
        onDelete={action('delete')}
        onSave={action('save')}
        perPageOptions={[10, 25, 50, 100]}
        searchable
      />
    </>
  );
});

export const CsvExport = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    csvExportButton={{
      color: 'blue',
      location: 'bottom'
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const CustomizableColumns = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={[{
      name: 'make',
      label: 'Make',
      sortable: true
    }, {
      name: 'model',
      label: 'Model',
      sortable: true
    }, {
      name: 'vin',
      label: 'Vin',
      sortable: true,
      hidden: true
    }, {
      name: 'address',
      label: 'Address',
      sortable: true
    }, {
      name: 'city',
      label: 'City',
      sortable: true
    }, {
      name: 'state',
      label: 'State',
      sortable: true
    }]}
    filters={{
      component: AddModal
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const DeleteAllButton = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
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
      perPage: 10
    }))}
    onDelete={action('delete')}
    onDeleteAll={action('delete all')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const Empty = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    onCopy={action('copy')}
    onLoad={Api.onLoadEmpty.bind(this)}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const ExtraButtons = useDragDrop(() => (
  <ListTable
    actions={actions}
    buttons={[{
      render: (index) => (
        <Button
          content='Button 1'
          key={index}
          onClick={action('button1')}
        />
      )
    }, {
      location: 'bottom',
      render: (index) => (
        <Button
          content='Button 2'
          key={index}
          onClick={action('button2')}
        />
      )
    }]}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const Filters = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    filters={{
      component: FilterModal,
      props: {
        test: ''
      }
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const InitialSave = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
    saved
  />
));

export const ListFiltersModal = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    filters={{
      component: ListFilters,
      props: {
        filters: [{
          attributeName: 'test',
          label: 'Test',
          key: 'test',
          type: FilterTypes.string
        }]
      }
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const ListFiltersModalDefaults = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    filters={{
      component: ListFilters,
      defaults: {
        filters: [{
          key: 'test',
          operator: FilterOperators.equal,
          value: 'xyz'
        }]
      },
      props: {
        filters: [{
          attributeName: 'test',
          label: 'Test',
          key: 'test',
          type: FilterTypes.string
        }]
      }
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const ListFiltersModalWithLabels = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    filters={{
      component: ListFilters,
      props: {
        filters: [{
          attributeName: 'test',
          label: 'Test',
          key: 'test',
          type: FilterTypes.string
        }]
      },
      showLabels: true
    }}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const Loading = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    })))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    searchable
  />
));

export const Pagination = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    defaultPerPage={10}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
    onDelete={action('delete')}
    onSave={action('save')}
    pagination={['top', 'bottom']}
    perPageOptions={[10, 25, 50, 100]}
    searchable
  />
));

export const PerPage = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    defaultPerPage={10}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
    onDelete={action('delete')}
    onSave={action('save')}
    perPageOptions={[10, 25, 50, 100]}
    searchable
  />
));

export const PerPageNoDefault = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
    onDelete={action('delete')}
    onSave={action('save')}
    perPageOptions={[10, 25, 50, 100]}
    searchable
  />
));

export const Polling = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={() => Promise.resolve()}
    polling={5000}
    searchable
  />
));

export const RecordCount = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    defaultPerPage={10}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
    onDelete={action('delete')}
    onSave={action('save')}
    perPageOptions={[10, 25, 50, 100]}
    recordCount={['top', 'bottom']}
    searchable
  />
));

export const RecordCountLabel = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    defaultPerPage={10}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, { items }))}
    onDelete={action('delete')}
    onSave={action('save')}
    perPageOptions={[10, 25, 50, 100]}
    recordCount={['top', 'bottom']}
    recordCountLabel={(count) => `${count} bananas.`}
    searchable
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
    <ListTable
      actions={actions}
      collectionName='items'
      columns={columns}
      isRowSelected={isSelected.bind(this)}
      onCopy={action('copy')}
      onLoad={(params) => Api.onLoad(_.extend(params, {
        items,
        perPage: 10
      }))}
      onDelete={action('delete')}
      onRowSelect={onRowSelect.bind(this)}
      onSave={action('save')}
      searchable
      selectable
    />
  );
});

export const Unsortable = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns.map((c) => ({ ...c, sortable: false }))}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const SortDescending = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={_.map(columns, (column) => (
      column.name === 'vin' ? { ...column, sortDirection: 'descending' } : column))}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));

export const NoColumnSelector = useDragDrop(() => (
  <ListTable
    actions={actions}
    collectionName='items'
    columns={columns}
    configurable={false}
    onCopy={action('copy')}
    onLoad={(params) => Api.onLoad(_.extend(params, {
      items,
      perPage: 10
    }))}
    onDelete={action('delete')}
    onSave={action('save')}
    searchable
  />
));
