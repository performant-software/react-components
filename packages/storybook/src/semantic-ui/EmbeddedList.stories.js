// @flow

import { action } from 'storybook/actions';
import React, { useState } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import EditModal from '../../../semantic-ui/src/components/EditModal';
import EmbeddedList, { SORT_DESCENDING } from '../../../semantic-ui/src/components/EmbeddedList';
import items from '../data/Movies.json';
import TabbedModal from '../../../semantic-ui/src/components/TabbedModal';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/EmbeddedList',
  component: EmbeddedList
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}];

const columns = [{
  name: 'movie',
  label: 'Movie'
}, {
  name: 'genre',
  label: 'Genre'
}, {
  name: 'date',
  label: 'Date'
}, {
  name: 'country',
  label: 'Country'
}, {
  name: 'gross',
  label: 'Gross'
}];

export const Default = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={items}
  />
));

export const AddButton = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={items}
    modal={{
      component: AddModal
    }}
  />
));

export const DefaultSort = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    columns={columns}
    defaultSort='country'
    defaultSortDirection={SORT_DESCENDING}
    onDelete={action('delete')}
    items={items}
  />
));

export const DragAndDropRows = useDragDrop(() => {
  const [list, setList] = useState(items);

  return (
    <EmbeddedList
      actions={actions}
      onDelete={action('delete')}
      columns={[{
        name: 'drag-drop',
        label: '',
        render: () => (
          <div
            style={{ textAlign: 'center' }}
          >
            <Icon name='bars' />
          </div>
        )
      }, ...columns]}
      items={list}
      onDrag={(dragIndex, hoverIndex) => {
        const temp = [...list];
        const item = temp[dragIndex];

        temp.splice(dragIndex, 1);
        temp.splice(hoverIndex, 0, item);

        setList(temp);
      }}
    />
  );
});

export const Empty = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={[]}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={[]}
    modal={{
      component: AddModal
    }}
  />
));

export const NoSortableColumns = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={_.map(columns, (c) => ({ ...c, sortable: false }))}
    items={items}
  />
));

export const RecordCount = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={items}
    showRecordCount
  />
));

export const Selectable = useDragDrop(() => (
  <EmbeddedList
    selectable
    isRowSelected={() => false}
    onRowSelect={action('row selected')}
    selectedRows={[{ id: 5 }, { id: 6 }, { id: 7 }]}
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={items}
  />
));

type EmbeddedListModalProps = {
  open: boolean,
  children: Node
};

const EmbeddedListModal = (props: EmbeddedListModalProps) => (
  <TabbedModal
    centered={false}
    header='This is a Test'
    inlineTabs={false}
    open={props.open}
  >
    <TabbedModal.Tab
      name='Tab 1'
    >
      <EmbeddedList
        actions={actions}
        onDelete={action('delete')}
        columns={columns}
        items={items}
        modal={{
          component: AddModal
        }}
      />
    </TabbedModal.Tab>
    { _.times(20, (i) => (
      <TabbedModal.Tab
        key={i + 2}
        name={`Tab ${i + 2}`}
      >
        { `Tab ${i + 2}` }
      </TabbedModal.Tab>
    ))}
    { props.children }
  </TabbedModal>
);

export const TabbedModalConfig = useDragDrop(() => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Button
        content='Open Modal'
        icon='plus'
        onClick={() => setShowModal(true)}
      />
      <EditModal
        component={EmbeddedListModal}
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => new Promise((resolve) => resolve(setShowModal(false)))}
      />
    </Container>
  );
});

export const NoColumnSelector = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    configurable={false}
    onDelete={action('delete')}
    columns={columns}
    items={items}
    showRecordCount
  />
));
