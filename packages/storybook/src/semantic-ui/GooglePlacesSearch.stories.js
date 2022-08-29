// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { Form, Input } from 'semantic-ui-react';
import GooglePlacesSearch from '../../../semantic-ui/src/components/GooglePlacesSearch';
import GoogleScript from '../../../shared/src/components/GoogleScript';

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

export const FormInput = () => (
  <Form>
    <GoogleScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={['places']}
    >
      <Form.Field>
        <GooglePlacesSearch
          onLocationSelection={action('location-selection')}
        >
          <Form.Input
            aria-label='places-search'
            label='Place'
            type='text'
          />
        </GooglePlacesSearch>
      </Form.Field>
    </GoogleScript>
    <Form.Input
      aria-label='places-search'
      label='Description'
      type='text'
    />
  </Form>
);
