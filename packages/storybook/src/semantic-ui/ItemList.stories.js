// @flow

import React, { useCallback, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { Button, Header } from 'semantic-ui-react';
import _ from 'underscore';
import AddModal from '../components/AddModal';
import Api from '../services/Api';
import FilterModal from '../components/FilterModal';
import ItemList from '../../../semantic-ui/src/components/ItemList';
import useDragDrop from '../../../shared/src/utils/DragDrop';

export default {
  title: 'Components/Semantic UI/ItemList',
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
  make: 'Subaru',
  model: 'Loyale',
  vin: 'WDDEJ7KB0BA520650',
  address: '75033 Schurz Point',
  city: 'Buffalo',
  state: 'New York'
}, {
  id: 2,
  make: 'Infiniti',
  model: 'J',
  vin: '3D4PG1FG9BT061845',
  address: '7 Algoma Alley',
  city: 'Wilmington',
  state: 'Delaware'
}, {
  id: 3,
  make: 'Ford',
  model: 'E150',
  vin: '1GD11XEG6FF110083',
  address: '53798 Ilene Plaza',
  city: 'Akron',
  state: 'Ohio'
}, {
  id: 4,
  make: 'Hyundai',
  model: 'Sonata',
  vin: '1G6DV1EP0E0587728',
  address: '25 Truax Terrace',
  city: 'Oceanside',
  state: 'California'
}, {
  id: 5,
  make: 'Lotus',
  model: 'Elise',
  vin: '5N1AR1NB3AC436461',
  address: '48 Del Sol Point',
  city: 'Nashville',
  state: 'Tennessee'
}, {
  id: 6,
  make: 'Pontiac',
  model: 'Vibe',
  vin: 'JN8AZ2NC6D9272180',
  address: '6512 Village Green Terrace',
  city: 'Colorado Springs',
  state: 'Colorado'
}, {
  id: 7,
  make: 'Audi',
  model: '100',
  vin: '5UXFB33503L412708',
  address: '82693 Nobel Park',
  city: 'Salt Lake City',
  state: 'Utah'
}, {
  id: 8,
  make: 'Toyota',
  model: 'Matrix',
  vin: '5NPDH4AE2CH775953',
  address: '743 Almo Junction',
  city: 'Philadelphia',
  state: 'Pennsylvania'
}, {
  id: 9,
  make: 'Dodge',
  model: 'Ram 2500',
  vin: 'WDDHF2EB2BA355858',
  address: '676 Mayfield Drive',
  city: 'Lawrenceville',
  state: 'Georgia'
}, {
  id: 10,
  make: 'Isuzu',
  model: 'Hombre Space',
  vin: '3D4PG9FV5AT271273',
  address: '7665 Fair Oaks Hill',
  city: 'Dayton',
  state: 'Ohio'
}, {
  id: 11,
  make: 'Chevrolet',
  model: '3500',
  vin: 'WAUGL68E55A176260',
  address: '45510 Anderson Place',
  city: 'Corpus Christi',
  state: 'Texas'
}, {
  id: 12,
  make: 'Buick',
  model: 'LeSabre',
  vin: 'WAUGL78E18A037401',
  address: '15002 Sloan Crossing',
  city: 'Philadelphia',
  state: 'Pennsylvania'
}, {
  id: 13,
  make: 'Hyundai',
  model: 'Elantra',
  vin: 'WAUKFAFL7BN993756',
  address: '5752 Dunning Drive',
  city: 'Santa Fe',
  state: 'New Mexico'
}, {
  id: 14,
  make: 'Ford',
  model: 'Thunderbird',
  vin: '5NPE24AF7FH573130',
  address: '75082 Beilfuss Hill',
  city: 'Buffalo',
  state: 'New York'
}, {
  id: 15,
  make: 'Ford',
  model: 'Aerostar',
  vin: 'WAUJT64B83N807008',
  address: '20600 Eastlawn Crossing',
  city: 'Stockton',
  state: 'California'
}, {
  id: 16,
  make: 'Toyota',
  model: 'Tacoma',
  vin: '1C4RDHEG9FC740024',
  address: '38983 Bunker Hill Pass',
  city: 'Trenton',
  state: 'New Jersey'
}, {
  id: 17,
  make: 'Subaru',
  model: 'BRZ',
  vin: '5FPYK1F2XAB204018',
  address: '713 Browning Lane',
  city: 'Atlanta',
  state: 'Georgia'
}, {
  id: 18,
  make: 'Ford',
  model: 'Taurus',
  vin: 'KMHHT6KD8AU630397',
  address: '636 Utah Court',
  city: 'Albany',
  state: 'New York'
}, {
  id: 19,
  make: 'Mercedes-Benz',
  model: 'E-Class',
  vin: 'WA1YD64B82N754785',
  address: '8628 Sheridan Parkway',
  city: 'Norfolk',
  state: 'Virginia'
}, {
  id: 20,
  make: 'BMW',
  model: 'X5',
  vin: 'WA1YD64B72N141248',
  address: '25 Dovetail Hill',
  city: 'Hicksville',
  state: 'New York'
}, {
  id: 21,
  make: 'Ford',
  model: 'EXP',
  vin: 'WDDHF0EB9EA900883',
  address: '738 Petterle Avenue',
  city: 'Sparks',
  state: 'Nevada'
}, {
  id: 22,
  make: 'Pontiac',
  model: 'Grand Prix',
  vin: 'WBAUN7C59CV891154',
  address: '0025 Arrowood Road',
  city: 'Hayward',
  state: 'California'
}, {
  id: 23,
  make: 'Chevrolet',
  model: 'Venture',
  vin: '1N4AA5AP7CC533109',
  address: '36002 Beilfuss Park',
  city: 'Riverside',
  state: 'California'
}, {
  id: 24,
  make: 'Cadillac',
  model: 'SRX',
  vin: 'TRUSC28N231502752',
  address: '59 Eagle Crest Center',
  city: 'El Paso',
  state: 'Texas'
}, {
  id: 25,
  make: 'Isuzu',
  model: 'VehiCROSS',
  vin: '3VW1K7AJ8BM483362',
  address: '537 South Avenue',
  city: 'Philadelphia',
  state: 'Pennsylvania'
}, {
  id: 26,
  make: 'Lincoln',
  model: 'Continental Mark VII',
  vin: 'WBAEV33434K698229',
  address: '939 Brentwood Street',
  city: 'Akron',
  state: 'Ohio'
}, {
  id: 27,
  make: 'Chevrolet',
  model: 'Cavalier',
  vin: '3GYFNGE31ES333552',
  address: '9 Manley Center',
  city: 'New Orleans',
  state: 'Louisiana'
}, {
  id: 28,
  make: 'Chevrolet',
  model: 'Tahoe',
  vin: '1G6DK5ED6B0611287',
  address: '6245 Forster Park',
  city: 'Nashville',
  state: 'Tennessee'
}, {
  id: 29,
  make: 'Subaru',
  model: 'Impreza',
  vin: '1G6DA8E58D0769467',
  address: '3081 Spohn Place',
  city: 'Pinellas Park',
  state: 'Florida'
}, {
  id: 30,
  make: 'Plymouth',
  model: 'Laser',
  vin: '1C4AJWAG0FL066491',
  address: '1 Roxbury Terrace',
  city: 'Monticello',
  state: 'Minnesota'
}, {
  id: 31,
  make: 'Acura',
  model: 'CL',
  vin: '1GYUKDEF0AR622718',
  address: '00081 Park Meadow Way',
  city: 'Newport News',
  state: 'Virginia'
}, {
  id: 32,
  make: 'Chevrolet',
  model: 'Lumina',
  vin: '1FTWX3D55AE885813',
  address: '46363 Mccormick Alley',
  city: 'Cincinnati',
  state: 'Ohio'
}, {
  id: 33,
  make: 'BMW',
  model: '8 Series',
  vin: 'JM3TB2BA6E0664553',
  address: '6 Susan Trail',
  city: 'Topeka',
  state: 'Kansas'
}, {
  id: 34,
  make: 'GMC',
  model: 'Sierra 1500',
  vin: 'WBAVM1C55DV245292',
  address: '25968 Ramsey Road',
  city: 'Omaha',
  state: 'Nebraska'
}, {
  id: 35,
  make: 'Toyota',
  model: 'Camry',
  vin: 'WBAYB6C59ED600634',
  address: '809 Lukken Circle',
  city: 'Rochester',
  state: 'New York'
}, {
  id: 36,
  make: 'Nissan',
  model: 'Maxima',
  vin: '5N1AN0NU9AC916477',
  address: '504 Eliot Circle',
  city: 'San Jose',
  state: 'California'
}, {
  id: 37,
  make: 'Mercedes-Benz',
  model: 'SLR McLaren',
  vin: '1G6AX5S34E0104439',
  address: '1557 Holy Cross Court',
  city: 'Hartford',
  state: 'Connecticut'
}, {
  id: 38,
  make: 'Lincoln',
  model: 'Town Car',
  vin: '1FMNE1BW9AD271737',
  address: '24557 High Crossing Court',
  city: 'Billings',
  state: 'Montana'
}, {
  id: 39,
  make: 'Pontiac',
  model: 'Grand Prix',
  vin: 'WD3PE7DC8F5011542',
  address: '47811 Magdeline Circle',
  city: 'Gary',
  state: 'Indiana'
}, {
  id: 40,
  make: 'Bentley',
  model: 'Continental',
  vin: '3VW4A7AT2CM707695',
  address: '4052 Ridgeview Place',
  city: 'New Orleans',
  state: 'Louisiana'
}, {
  id: 41,
  make: 'Mazda',
  model: 'Tribute',
  vin: '5FRYD4H94GB067194',
  address: '56987 Luster Trail',
  city: 'Salt Lake City',
  state: 'Utah'
}, {
  id: 42,
  make: 'Mitsubishi',
  model: 'Pajero',
  vin: '1N4AL2AP0CC115435',
  address: '85274 Carioca Avenue',
  city: 'Harrisburg',
  state: 'Pennsylvania'
}, {
  id: 43,
  make: 'Lincoln',
  model: 'MKX',
  vin: 'WBA6A0C57FD161040',
  address: '2820 Victoria Circle',
  city: 'Phoenix',
  state: 'Arizona'
}, {
  id: 44,
  make: 'Dodge',
  model: 'Dakota',
  vin: '1FTEW1CF4FF081680',
  address: '56 Elmside Road',
  city: 'Jeffersonville',
  state: 'Indiana'
}, {
  id: 45,
  make: 'BMW',
  model: '3 Series',
  vin: '5J6YH1H33AL810569',
  address: '7892 Maryland Court',
  city: 'Evansville',
  state: 'Indiana'
}, {
  id: 46,
  make: 'Volkswagen',
  model: 'Jetta III',
  vin: '5UXZW0C55C0639698',
  address: '03 Talisman Park',
  city: 'Macon',
  state: 'Georgia'
}, {
  id: 47,
  make: 'Ford',
  model: 'Bronco II',
  vin: '137FA90381E748394',
  address: '9 Monument Junction',
  city: 'Charlotte',
  state: 'North Carolina'
}, {
  id: 48,
  make: 'Ford',
  model: 'F250',
  vin: 'WAU2GBFC3DN752346',
  address: '47268 Schmedeman Place',
  city: 'San Antonio',
  state: 'Texas'
}, {
  id: 49,
  make: 'Ford',
  model: 'E-Series',
  vin: 'WA1DGAFP8EA527447',
  address: '436 Menomonie Way',
  city: 'South Lake Tahoe',
  state: 'California'
}, {
  id: 50,
  make: 'Chevrolet',
  model: 'Malibu',
  vin: '1G6EC12912B957438',
  address: '517 Jay Park',
  city: 'South Park',
  state: 'Georgia'
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

export const AddButtonEmpty = useDragDrop(() => (
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

export const WithFilters = useDragDrop(() => (
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

export const WithPolling = useDragDrop(() => (
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

export const WithExtraButtons = useDragDrop(() => (
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

export const WithDeleteAllButton = useDragDrop(() => (
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

export const WithInitialSave = useDragDrop(() => (
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
