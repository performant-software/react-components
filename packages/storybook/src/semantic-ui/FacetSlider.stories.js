// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import FacetSlider from '../../../semantic-ui/src/components/FacetSlider';

export default {
  title: 'Components/Semantic UI/FacetSlider',
  component: FacetSlider
};

export const Default = () => (
  <FacetSlider
    title='Date Range'
    useRangeSlider={() => ({
      start: [],
      range: {
        min: -2000,
        max: 2023
      },
      refine: action('refine')
    })}
  />
);
