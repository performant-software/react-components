import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Button, Container, Header } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../AddModal';
import { SemanticColors } from '../../services/Colors';
import EditModal from '../../../src/semantic-ui/EditModal';
import TabbedModal from '../../../src/semantic-ui/TabbedModal';
import useDragDrop from '../../../src/utils/DragDrop';
import ItemCollection from '../../../src/semantic-ui/ItemCollection';

export default {
  title: 'Components/Semantic UI/ItemCollection',
  decorators: [withA11y, withKnobs]
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
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
  <ItemCollection
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

export const Empty = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    items={[]}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

export const AddButton = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    addButton={{
      location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
      color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
    }}
    items={items}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

export const EmptyAddButton = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    addButton={{
      location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
      color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
    }}
    items={[]}
    modal={{
      component: AddModal
    }}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

export const DragAndDropRows = useDragDrop(() => {
  const [list, setList] = useState(items);

  return (
    <ItemCollection
      actions={actions}
      items={list}
      onDrag={(dragIndex, hoverIndex) => {
        const temp = [...list];
        const item = temp[dragIndex];

        temp.splice(dragIndex, 1);
        temp.splice(hoverIndex, 0, item);

        setList(temp);
      }}
      onCopy={action('copy')}
      onDelete={action('delete')}
      onSave={action('save')}
      renderHeader={(item) => <Header content={item.movie} />}
      renderMeta={(item) => item.genre}
    />
  );
});

const ItemCollectionModal = (props: any) => (
  <TabbedModal
    centered={false}
    header='This is a Test'
    inlineTabs={false}
    open={props.open}
  >
    <TabbedModal.Tab
      name='Tab 1'
    >
      <ItemCollection
        actions={actions}
        addButton={{
          location: options('Location', { Bottom: 'bottom', Top: 'top' }, 'top', { display: 'inline-radio' }),
          color: options('Colors', SemanticColors, 'gray', { display: 'inline-radio' })
        }}
        items={items}
        modal={{
          component: AddModal
        }}
        onCopy={action('copy')}
        onDelete={action('delete')}
        onSave={action('save')}
        renderHeader={(item) => <Header content={item.movie} />}
        renderMeta={(item) => item.genre}
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
        component={ItemCollectionModal}
        open={showModal}
        onClose={() => new Promise((resolve) => resolve(setShowModal(false)))}
        onSave={() => new Promise((resolve) => resolve(setShowModal(false)))}
      />
    </Container>
  );
});
