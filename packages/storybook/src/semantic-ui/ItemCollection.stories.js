// @flow

import React, { createRef, useEffect, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import {
  Button,
  Container,
  Dropdown,
  Header
} from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import { SemanticColors } from '../services/Colors';
import EditModal from '../../../semantic-ui/src/components/EditModal';
import ItemCollection from '../../../semantic-ui/src/components/ItemCollection';
import TabbedModal from '../../../semantic-ui/src/components/TabbedModal';
import useDragDrop from '../../../shared/src/utils/DragDrop';

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
  movie: 'Robinson in Space',
  genre: 'Documentary|Sci-Fi',
  date: '3/2/1910',
  country: 'China',
  gross: '$1910101.82'
}, {
  id: 2,
  movie: 'We Live in Public',
  genre: 'Documentary',
  date: '8/3/1998',
  country: 'Peru',
  gross: '$6485511.29'
}, {
  id: 3,
  movie: 'Map of the Sounds of Tokyo',
  genre: 'Drama|Thriller',
  date: '3/10/1998',
  country: 'Uganda',
  gross: '$4564944.94'
}, {
  id: 4,
  movie: 'Marvin Hamlisch: What He Did for Love',
  genre: 'Documentary|Musical',
  date: '2/19/2001',
  country: 'Denmark',
  gross: '$429177.98'
}, {
  id: 5,
  movie: 'Mélo',
  genre: 'Drama|Romance',
  date: '8/30/1953',
  country: 'Myanmar',
  gross: '$3237889.86'
}, {
  id: 6,
  movie: 'Jungle Creature: Hugo, The (Jungledyret) (Go Hugo Go)',
  genre: 'Animation|Children|Musical|Romance',
  date: '8/17/1965',
  country: 'Canada',
  gross: '$2986786.12'
}, {
  id: 7,
  movie: 'Me and Morrison (Minä ja Morrison)',
  genre: 'Romance',
  date: '5/7/2013',
  country: 'Indonesia',
  gross: '$9630314.96'
}, {
  id: 8,
  movie: 'Army of Darkness',
  genre: 'Action|Adventure|Comedy|Fantasy|Horror',
  date: '4/16/1950',
  country: 'Thailand',
  gross: '$1298926.22'
}, {
  id: 9,
  movie: 'Zen',
  genre: 'Drama',
  date: '2/6/1988',
  country: 'China',
  gross: '$4940875.82'
}, {
  id: 10,
  movie: 'The Walking Stick',
  genre: 'Crime|Drama|Romance',
  date: '11/3/1953',
  country: 'Vietnam',
  gross: '$878261.41'
}, {
  id: 11,
  movie: 'Solo Sunny',
  genre: 'Drama|Musical|Romance',
  date: '7/18/1991',
  country: 'China',
  gross: '$8576387.38'
}, {
  id: 12,
  movie: 'Necessities of Life, The (Ce qu\'il faut pour vivre)',
  genre: 'Drama',
  date: '8/11/1924',
  country: 'China',
  gross: '$7056408.21'
}, {
  id: 13,
  movie: 'At Land',
  genre: '(no genres listed)',
  date: '5/8/1951',
  country: 'Russia',
  gross: '$8352326.48'
}, {
  id: 14,
  movie: 'Alien Nation: The Enemy Within',
  genre: 'Sci-Fi',
  date: '3/21/1909',
  country: 'Portugal',
  gross: '$4205944.76'
}, {
  id: 15,
  movie: 'Bedtime Stories',
  genre: 'Adventure|Children|Comedy',
  date: '2/13/1962',
  country: 'Bulgaria',
  gross: '$8510830.84'
}, {
  id: 16,
  movie: 'Story of Louis Pasteur, The',
  genre: 'Drama',
  date: '1/6/1928',
  country: 'Malaysia',
  gross: '$9666164.00'
}, {
  id: 17,
  movie: 'Inkheart',
  genre: 'Adventure|Fantasy',
  date: '9/21/1920',
  country: 'Russia',
  gross: '$1588984.00'
}, {
  id: 18,
  movie: 'Good, the Bad and the Ugly, The (Buono, il brutto, il cattivo, Il)',
  genre: 'Action|Adventure|Western',
  date: '4/2/1904',
  country: 'Indonesia',
  gross: '$2238129.98'
}, {
  id: 19,
  movie: 'First $20 Million Is Always the Hardest, The',
  genre: 'Comedy',
  date: '1/31/1908',
  country: 'Poland',
  gross: '$9035879.24'
}, {
  id: 20,
  movie: 'Still Mine',
  genre: 'Drama',
  date: '7/16/1937',
  country: 'China',
  gross: '$1116071.68'
}, {
  id: 21,
  movie: 'Young Lions, The',
  genre: 'Drama|War',
  date: '1/14/1940',
  country: 'Portugal',
  gross: '$8692281.57'
}, {
  id: 22,
  movie: 'Take Care of My Cat (Goyangileul butaghae)',
  genre: 'Drama',
  date: '9/14/1949',
  country: 'Senegal',
  gross: '$221844.90'
}, {
  id: 23,
  movie: 'Go for It',
  genre: 'Action|Adventure|Comedy',
  date: '1/31/2005',
  country: 'Palestinian Territory',
  gross: '$9167515.82'
}, {
  id: 24,
  movie: 'High Hopes',
  genre: 'Comedy',
  date: '8/8/1929',
  country: 'China',
  gross: '$2801618.88'
}, {
  id: 25,
  movie: 'Loneliness of the Long Distance Runner, The',
  genre: 'Drama',
  date: '4/25/1949',
  country: 'China',
  gross: '$5283671.78'
}, {
  id: 26,
  movie: 'And Life Goes On (a.k.a. Life and Nothing More) (Zendegi va digar hich)',
  genre: 'Drama',
  date: '6/17/1917',
  country: 'Indonesia',
  gross: '$907845.74'
}, {
  id: 27,
  movie: 'The Red Inn',
  genre: 'Comedy|Crime',
  date: '1/26/1962',
  country: 'Haiti',
  gross: '$4958727.46'
}, {
  id: 28,
  movie: 'World of Suzie Wong, The',
  genre: 'Drama|Romance',
  date: '7/16/2008',
  country: 'Syria',
  gross: '$7645650.99'
}, {
  id: 29,
  movie: 'State of Things, The (Stand der Dinge, Der)',
  genre: 'Drama',
  date: '5/15/1931',
  country: 'Philippines',
  gross: '$6304922.04'
}, {
  id: 30,
  movie: 'Farewell, The (Abschied - Brechts letzter Sommer)',
  genre: 'Drama',
  date: '7/21/2001',
  country: 'Czech Republic',
  gross: '$8525619.21'
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
        onClose={() => setShowModal(false)}
        onSave={() => new Promise((resolve) => resolve(setShowModal(false)))}
      />
    </Container>
  );
});

export const InfiniteScroll = useDragDrop(() => (
  <ItemCollection
    actions={actions}
    items={items}
    onCopy={action('copy')}
    onDelete={action('delete')}
    onSave={action('save')}
    perPage={10}
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

const genres = _.uniq(_.flatten(_.map(items, (i) => i.genre.split('|'))));

export const InfiniteScrollFilter = useDragDrop(() => {
  const [movies, setMovies] = useState(items);
  const [genre, setGenre] = useState(null);

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
        perPage={10}
        renderHeader={(item) => <Header content={item.movie} />}
        renderMeta={(item) => item.genre}
      />
    </>
  );
});
