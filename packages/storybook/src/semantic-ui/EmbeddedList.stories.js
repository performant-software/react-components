// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Button, Container, Icon } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import { SemanticColors } from '../services/Colors';
import EditModal from '../../../semantic-ui/src/components/EditModal';
import EmbeddedList, { SORT_DESCENDING } from '../../../semantic-ui/src/components/EmbeddedList';
import TabbedModal from '../../../semantic-ui/src/components/TabbedModal';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/EmbeddedList',
  decorators: [withA11y, withKnobs]
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

const items = [{
  id: 1,
  movie: 'Breakout',
  genre: 'Action|Adventure',
  date: '04/09/1979',
  country: 'China',
  gross: '$97877758344.93'
}, {
  id: 2,
  movie: 'Ladykillers, The',
  genre: 'Comedy|Crime',
  date: '05/17/2018',
  country: 'China',
  gross: '$9759970621.35'
}, {
  id: 3,
  movie: 'Wilson',
  genre: 'Drama',
  date: '01/05/1981',
  country: 'Indonesia',
  gross: '$32929566919.13'
}, {
  id: 4,
  movie: 'Macon County Line',
  genre: 'Action|Drama',
  date: '10/26/1935',
  country: 'Philippines',
  gross: '$32422166052.64'
}, {
  id: 5,
  movie: 'Bless Me, Ultima',
  genre: 'Drama|War',
  date: '04/01/1942',
  country: 'Israel',
  gross: '$25860349604.38'
}, {
  id: 6,
  movie: 'Julius Caesar',
  genre: 'Drama',
  date: '12/15/1980',
  country: 'China',
  gross: '$96267131975.97'
}, {
  id: 7,
  movie: 'Left-Hand Side of the Fridge, The (Moitié gauche du frigo, La)',
  genre: 'Comedy',
  date: '09/14/1970',
  country: 'China',
  gross: '$86302448886.10'
}, {
  id: 8,
  movie: 'London Conspiracy',
  genre: 'Action|Mystery',
  date: '09/30/1995',
  country: 'Norway',
  gross: '$70230233914.51'
}, {
  id: 9,
  movie: 'Cat Run 2',
  genre: 'Action',
  date: '04/10/1923',
  country: 'Latvia',
  gross: '$64514647938.68'
}, {
  id: 10,
  movie: 'Lady in the Water',
  genre: 'Drama|Fantasy|Mystery',
  date: '12/07/1919',
  country: 'China',
  gross: '$90456213202.89'
}];

export const Default = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={items}
  />
));

export const WithRecordCount = useDragDrop(() => (
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

export const Empty = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={columns}
    items={[]}
  />
));

export const AddButton = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    addButton={{
      location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
      color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
    }}
    onDelete={action('delete')}
    columns={columns}
    items={items}
    modal={{
      component: AddModal
    }}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    addButton={{
      location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
      color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
    }}
    onDelete={action('delete')}
    columns={columns}
    items={[]}
    modal={{
      component: AddModal
    }}
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
        addButton={{
          location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
          color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
        }}
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

export const NoSortableColumns = useDragDrop(() => (
  <EmbeddedList
    actions={actions}
    onDelete={action('delete')}
    columns={_.map(columns, (c) => ({ ...c, sortable: false }))}
    items={items}
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
