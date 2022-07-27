// @flow

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import ReferenceCodeDropdown from '../../../semantic-ui/src/components/ReferenceCodeDropdown';

export default {
  title: 'Components/Semantic UI/ReferenceCodeDropdown',
  decorators: [withA11y, withKnobs]
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
