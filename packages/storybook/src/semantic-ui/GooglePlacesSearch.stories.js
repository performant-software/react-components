// @flow

import { GooglePlacesSearch } from '@react-components/semantic-ui';
import { GoogleScript } from '@react-components/shared';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { Input } from 'semantic-ui-react';

export default {
  title: 'Components/Semantic UI/GooglePlacesSearch',
  decorators: [withA11y]
};

export const Default = () => (
  <GoogleScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
    libraries={['places']}
  >
    <GooglePlacesSearch
      onLocationSelection={action('location-selection')}
    >
      <Input
        type='text'
        aria-label='places-search'
      />
    </GooglePlacesSearch>
  </GoogleScript>
);

export const CustomInput = () => (
  <GoogleScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
    libraries={['places']}
  >
    <GooglePlacesSearch
      onLocationSelection={action('location-selection')}
    >
      <Input
        type='text'
        icon='world'
        size='large'
        aria-label='places-search'
      />
    </GooglePlacesSearch>
  </GoogleScript>
);
