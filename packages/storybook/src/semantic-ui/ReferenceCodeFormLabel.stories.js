// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ReferenceCodeFormLabel from '../../../semantic-ui/src/components/ReferenceCodeFormLabel';

export default {
  title: 'Components/Semantic UI/ReferenceCodeFormLabel',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <ReferenceCodeFormLabel
    label='Locations'
    onClick={action('click')}
    referenceTable='locations'
  />
);
