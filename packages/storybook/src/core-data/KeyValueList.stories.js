// @flow

import React from 'react';
import KeyValueList from '../../../core-data/src/components/KeyValueList';

export default {
  title: 'Components/Core Data/KeyValueList',
  component: KeyValueList
};

export const Default = () => (
  <KeyValueList
    items={[{
      label: 'Test',
      value: 'abc'
    }, {
      label: 'Another',
      value: '123'
    }]}
  />
);
