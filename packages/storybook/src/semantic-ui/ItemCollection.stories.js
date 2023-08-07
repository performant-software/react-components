// @flow

import { action } from '@storybook/addon-actions';
import { optionsKnob as options } from '@storybook/addon-knobs';
import React, {
  createRef,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Button,
  Container,
  Dropdown,
  Header
} from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import EditModal from '../../../semantic-ui/src/components/EditModal';
import ItemCollection from '../../../semantic-ui/src/components/ItemCollection';
import items from '../data/Movies.json';
import { SemanticColors } from '../services/Colors';
import TabbedModal from '../../../semantic-ui/src/components/TabbedModal';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/ItemCollection',
  component: ItemCollection
};

const actions = [{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
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

export const Delete = useDragDrop(() => {
  const [list, setList] = useState(items);

  return (
    <ItemCollection
      actions={actions}
      items={list}
      onCopy={action('copy')}
      onDelete={(item) => setList((prevList) => (
        _.map(prevList, (i) => (i !== item ? i : ({ ...i, _destroy: true })))
      ))}
      onSave={action('save')}
      renderHeader={(item) => <Header content={item.movie} />}
      renderMeta={(item) => item.genre}
    />
  );
});

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

export const InfiniteScroll = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    perPage={5}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

export const InfiniteScrollDiv = useDragDrop(() => {
  const containerRef = createRef();
  return (
    <div
      ref={containerRef}
      style={{
        maxHeight: '400px',
        overflow: 'scroll'
      }}
    >
      <ItemCollection
        actions={actions}
        context={containerRef}
        items={items}
        onCopy={action('copy')}
        onDelete={action('delete')}
        onSave={action('save')}
        perPage={5}
        renderHeader={(item) => <Header content={item.movie} />}
        renderMeta={(item) => item.genre}
      />
    </div>
  );
});

export const InfiniteScrollFilter = useDragDrop(() => {
  const [movies, setMovies] = useState(items);
  const [genre, setGenre] = useState(null);

  const genres = useMemo(() => _.uniq(_.flatten(_.map(items, (i) => i.genre.split('|')))), []);

  useEffect(() => {
    let records;

    if (genre && genre.length) {
      records = _.filter(items, (i) => i.genre && i.genre.indexOf(genre) > 0);
    } else {
      records = [...items];
    }

    setMovies(records);
  }, [genre]);

  return (
    <>
      <ItemCollection
        actions={actions}
        buttons={[{
          render: () => (
            <Dropdown
              clearable
              placeholder='Genre'
              search
              searchInput={{
                'aria-label': 'Search'
              }}
              selection
              onChange={(e, { value }) => setGenre(value)}
              options={_.map(genres, (g) => ({ key: g, value: g, text: g }))}
            />
          )
        }]}
        items={movies}
        onCopy={action('copy')}
        onDelete={action('delete')}
        onSave={action('save')}
        perPage={4}
        renderHeader={(item) => <Header content={item.movie} />}
        renderMeta={(item) => item.genre}
      />
    </>
  );
});

export const Loading = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    items={items}
    loading
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    renderHeader={(item) => <Header content={item.movie} />}
    renderMeta={(item) => item.genre}
  />
));

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
        onClose={() => setShowModal(false)}
        onSave={() => new Promise((resolve) => resolve(setShowModal(false)))}
      />
    </Container>
  );
});
