// @flow

import React, { useState } from 'react';
import KeyValuePairs from '../../../semantic-ui/src/components/KeyValuePairs';

export default {
  title: 'Components/Semantic UI/KeyValuePairs',
  component: KeyValuePairs
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
