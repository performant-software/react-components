// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ReferenceCodeFormLabel from '../../../controlled-vocabulary/src/components/ReferenceCodeFormLabel';

export default {
  title: 'Components/Controlled Vocabulary/ReferenceCodeFormLabel',
  decorators: [withKnobs]
};

export const Default = () => (
  <ReferenceCodeFormLabel
    label='Locations'
    onClick={action('click')}
    referenceTable='locations'
  />
);
