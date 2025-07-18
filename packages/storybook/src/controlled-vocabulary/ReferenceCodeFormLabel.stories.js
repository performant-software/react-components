// @flow

import React from 'react';
import { action } from 'storybook/actions';
import ReferenceCodeFormLabel from '../../../controlled-vocabulary/src/components/ReferenceCodeFormLabel';

export default {
  title: 'Components/Controlled Vocabulary/ReferenceCodeFormLabel',
  component: ReferenceCodeFormLabel
};

export const Default = () => (
  <ReferenceCodeFormLabel
    label='Locations'
    onClick={action('click')}
    referenceTable='locations'
  />
);
