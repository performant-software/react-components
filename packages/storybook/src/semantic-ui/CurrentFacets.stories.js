// @flow

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CurrentFacets from '../../../semantic-ui/src/components/CurrentFacets';

export default {
  title: 'Components/Semantic UI/CurrentFacets',
  component: CurrentFacets,
  decorators: [withKnobs]
};

const createRefinement = (label) => ({
  label,
  onClick: action(`click ${label}`)
});

export const Default = () => (
  <CurrentFacets
    useCurrentRefinements={() => ({
      items: [{
        label: 'Color',
        refine: action('refine'),
        refinements: [
          createRefinement('Red'),
          createRefinement('Blue'),
          createRefinement('Green')
        ]
      }]
    })}
  />
);

export const Limit = () => (
  <CurrentFacets
    limit={3}
    useCurrentRefinements={() => ({
      items: [{
        label: 'Color',
        refine: action('refine'),
        refinements: [
          createRefinement('Red'),
          createRefinement('Blue'),
          createRefinement('Green'),
          createRefinement('Purple'),
          createRefinement('Orange'),
          createRefinement('Yellow')
        ]
      }]
    })}
  />
);
