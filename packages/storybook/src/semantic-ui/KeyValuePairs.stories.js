// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import KeyValuePairs from '../../../semantic-ui/src/components/KeyValuePairs';

export default {
  title: 'Components/Semantic UI/KeyValuePairs',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [value, setValue] = useState('[]');

  return (
    <KeyValuePairs
      items={JSON.parse(value)}
      onChange={(items) => setValue(JSON.stringify(items))}
    />
  );
};

export const withExistingValue = () => {
  const [value, setValue] = useState(JSON.stringify([{
    key: 'One',
    value: 'First record'
  }, {
    key: 'Two',
    value: 'Second record'
  }]));

  return (
    <KeyValuePairs
      items={JSON.parse(value)}
      onChange={(items) => setValue(JSON.stringify(items))}
    />
  );
};
