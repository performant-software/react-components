// @flow

import { action } from 'storybook/actions';
import React from 'react';
import FacetClearButton from '../../../semantic-ui/src/components/FacetClearButton';

export default {
  title: 'Components/Semantic UI/FacetClearButton',
  component: FacetClearButton
};

const useClearRefinements = () => ({
  canRefine: true,
  refine: action('Refine')
});

export const Default = () => (
  <FacetClearButton
    content='Clear'
    icon='times'
    useClearRefinements={useClearRefinements}
  />
);
