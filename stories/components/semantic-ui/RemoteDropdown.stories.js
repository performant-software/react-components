// @flow

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import _ from 'underscore';
import RemoteDropdown from '../../../src/semantic-ui/RemoteDropdown';

export default {
  title: 'Components/Semantic UI/RemoveDropdown',
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

const onLoad = (options) => new Promise((resolve) => resolve(_.map(options, (o) => ({ key: o, value: o, text: o }))));

export const Default = () => {
  const [options, setOptions] = useState(data);

  return (
    <RemoteDropdown
      allowAdditions={boolean('Allow additions', false)}
      fluid={boolean('Fluid', false)}
      multiple={boolean('Multiple', false)}
      onAddItem={(e, { value }) => new Promise((resolve) => resolve(setOptions([...options, value])))}
      onLoad={onLoad.bind(this, options)}
      onSelection={action('selected')}
      value={undefined}
    />
  );
};
