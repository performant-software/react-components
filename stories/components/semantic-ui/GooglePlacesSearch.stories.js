import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { Input } from 'semantic-ui-react';
import GooglePlacesSearch from '../../../src/semantic-ui/GooglePlacesSearch';

export default {
  title: 'Components/Semantic UI/GooglePlacesSearch',
  decorators: [withA11y]
};

export const Default = () => (
  <GooglePlacesSearch
    onLocationSelection={action('location-selection')}
    style={{ display: 'inline' }}
  >
    <Input type='text' aria-label='places-search' />
  </GooglePlacesSearch>
);

export const CustomInput = () => (
  <GooglePlacesSearch
    onLocationSelection={action('location-selection')}
    style={{ display: 'inline' }}
  >
    <Input type='text' icon='world' size='large' aria-label='places-search' />
  </GooglePlacesSearch>
);
