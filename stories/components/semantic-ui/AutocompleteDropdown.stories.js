// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import _ from 'underscore';
import AutocompleteDropdown from '../../../src/semantic-ui/AutocompleteDropdown';

export default {
  title: 'Components/Semantic UI/AutocompleteDropdown',
  decorators: [withKnobs]
};

const data = [
  'Red',
  'Blue',
  'Orange',
  'Green',
  'Yellow',
  'Black',
  'White',
  'Purple',
  'Pink'
];

const onLoad = () => new Promise((resolve) => resolve(_.map(data, (i) => ({ key: i, value: i, text: i }))));

export const Default = () => (
  <AutocompleteDropdown
    fluid={boolean('Fluid', false)}
    multiple={boolean('Multiple', false)}
    onLoad={onLoad.bind(this)}
    onSelection={action('selected')}
    value={undefined}
  />
);
