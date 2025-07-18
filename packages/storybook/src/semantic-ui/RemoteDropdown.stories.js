// @flow

import React, { useState } from 'react';
import _ from 'underscore';
import Api from '../services/Api';
import RemoteDropdown from '../../../semantic-ui/src/components/RemoteDropdown';

export default {
  title: 'Components/Semantic UI/RemoteDropdown',
  component: RemoteDropdown
};

const onAddItem = (options, setOptions, value) => new Promise(
  (resolve) => resolve(setOptions([...options, { value }]))
);

const renderOption = (item) => ({
  key: item.value,
  value: item.value,
  text: item.value,
  description: item.description
});

const colors = [{
  value: 'Red',
  description: 'Duis adipisicing ullamco aliqua dolore officiaDuis adipisicing ullamco aliqua dolore officiaDuis '
    + 'adipisicing ullamco aliqua dolore officiaDuis adipisicing ullamco aliqua dolore officiaDuis adipisicing '
    + 'ullamco aliqua dolore officia.'
}, {
  value: 'Blue',
  description: 'Duis adipisicing ullamco aliqua dolore officia.'
}, {
  value: 'Orange'
}, {
  value: 'Green'
}, {
  value: 'Yellow'
}, {
  value: 'Black'
}, {
  value: 'White'
}, {
  value: 'Purple'
}, {
  value: 'Pink'
}];

export const Default = () => {
  const [options, setOptions] = useState(colors);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <RemoteDropdown
      collectionName='items'
      onAddItem={onAddItem.bind(this, options, setOptions)}
      onLoad={(params) => Api.onLoad(_.extend(params, { items: options }))}
      onSelection={setSelectedValue.bind(this)}
      renderOption={renderOption.bind(this)}
      value={selectedValue}
    />
  );
};

export const SelectedValue = () => {
  const [options, setOptions] = useState(colors);
  const [selectedValue, setSelectedValue] = useState('Red');

  return (
    <RemoteDropdown
      collectionName='items'
      onAddItem={onAddItem.bind(this, options, setOptions)}
      onLoad={(params) => Api.onLoad(_.extend(params, { items: options }))}
      onSelection={setSelectedValue.bind(this)}
      renderOption={renderOption.bind(this)}
      value={selectedValue}
    />
  );
};

const movies = [{
  value: 'Coming Down the Mountain'
}, {
  value: 'Me and you (io e te)'
}, {
  value: 'Korengal'
}, {
  value: 'Jacques Brel Is Alive and Well and Living in Paris'
}, {
  value: 'Annie Get Your Gun'
}, {
  value: 'Appleseed (Appurushîdo)'
}, {
  value: 'Khroustaliov, My Car! (Khrustalyov, mashinu!)'
}, {
  value: 'Overboard'
}, {
  value: 'Friends of Eddie Coyle, The'
}, {
  value: 'Meet the Parents'
}, {
  value: 'Wedding Party, The (Die Bluthochzeit)'
}, {
  value: 'Beats Rhymes & Life: The Travels of a Tribe Called Quest'
}, {
  value: 'Northanger Abbey'
}, {
  value: 'In Vanda\'s Room (No Quarto da Vanda)'
}, {
  value: 'Asfalto'
}, {
  value: 'An Apology to Elephants'
}, {
  value: 'Cool Air'
}, {
  value: 'Blue Umbrella, The'
}, {
  value: 'Earth vs. the Spider'
}, {
  value: 'Son of Lassie'
}, {
  value: 'Presto'
}, {
  value: 'Prisoner of Paradise'
}, {
  value: '2-Headed Shark Attack'
}, {
  value: 'Shattered'
}, {
  value: 'My Life and Times With Antonin Artaud (En compagnie d\'Antonin Artaud)'
}, {
  value: 'Hell in the Pacific'
}, {
  value: 'Blades of Glory'
}, {
  value: 'Lodger, The'
}, {
  value: 'Anvil! The Story of Anvil'
}, {
  value: 'Please Give'
}, {
  value: 'Story of Three Loves, The'
}, {
  value: 'Simpsons: The Longest Daycare, The'
}, {
  value: 'Unsaid, The'
}, {
  value: 'Wisegirls'
}, {
  value: 'Enemy of the People, An'
}, {
  value: 'Virus'
}, {
  value: 'Blue Dahlia, The'
}, {
  value: 'Clouds of May (Mayis sikintisi)'
}, {
  value: 'Tracker, The'
}, {
  value: 'Trailer Park Boys'
}, {
  value: 'May 18 (Hwaryeohan hyuga)'
}, {
  value: 'Where Eagles Dare'
}, {
  value: 'Pocket Money'
}, {
  value: 'Charlie Chan\'s Chance'
}, {
  value: 'Cat Came Back, The'
}, {
  value: 'Good Night, and Good Luck.'
}, {
  value: 'White Reindeer'
}, {
  value: 'The Phantom of the Opera'
}, {
  value: 'Digimon: The Movie'
}, {
  value: 'Once Around'
}];

export const LargeList = () => {
  const [options, setOptions] = useState(movies);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <RemoteDropdown
      collectionName='items'
      onAddItem={onAddItem.bind(this, options, setOptions)}
      onLoad={(params) => Api.onLoad(_.extend(params, { items: options }))}
      onSelection={setSelectedValue.bind(this)}
      renderOption={renderOption.bind(this)}
      value={selectedValue}
    />
  );
};

export const Pagination = () => {
  const [options, setOptions] = useState(movies);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <RemoteDropdown
      collectionName='items'
      onAddItem={onAddItem.bind(this, options, setOptions)}
      onLoad={(params) => Api.onLoad(_.extend(params, { items: options, perPage: 10 }))}
      onSelection={setSelectedValue.bind(this)}
      renderOption={renderOption.bind(this)}
      value={selectedValue}
      style={{ width: 600 }}
    />
  );
};
