// @flow

import React, { useState } from 'react';
import { action } from 'storybook/actions';
import ReferenceCodeDropdown from '../../../controlled-vocabulary/src/components/ReferenceCodeDropdown';

export default {
  title: 'Components/Controlled Vocabulary/ReferenceCodeDropdown',
  component: ReferenceCodeDropdown
};

export const Default = () => (
  <ReferenceCodeDropdown
    fluid
    label='Locations'
    required
    onChange={action('change')}
    referenceTable='locations'
    value=''
  />
);

export const Multiple = () => {
  const [value, setValue] = useState([]);

  return (
    <ReferenceCodeDropdown
      fluid
      label='Locations'
      multiple
      required
      onChange={(selected) => setValue(selected)}
      referenceTable='locations'
      value={value}
    />
  );
};

export const ExistingValues = () => {
  const [value, setValue] = useState([{
    reference_code_id: 1
  }, {
    reference_code_id: 2
  }]);

  return (
    <ReferenceCodeDropdown
      fluid
      label='Locations'
      multiple
      required
      onChange={(selected) => setValue(selected)}
      referenceTable='locations'
      value={value}
    />
  );
};
