// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import CurrentFacetLabels from '../../../semantic-ui/src/components/CurrentFacetLabels';

export default {
  title: 'Components/Semantic UI/CurrentFacetLabels',
  component: CurrentFacetLabels
};

const createItem = (label) => ({
  label,
  onClick: action(`${label} click`)
});

export const Default = () => (
  <CurrentFacetLabels
    items={[
      createItem('Red'),
      createItem('Blue'),
      createItem('Green')
    ]}
  />
);

export const Count = () => (
  <CurrentFacetLabels
    count={10}
    items={[
      createItem('Red'),
      createItem('Blue'),
      createItem('Green')
    ]}
    onShowMore={action('Show More')}
  />
);
