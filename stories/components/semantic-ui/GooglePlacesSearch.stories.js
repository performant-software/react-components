import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import { Input } from 'semantic-ui-react';
import Google from '../../../src/config/Google';
import GooglePlacesSearch from '../../../src/semantic-ui/GooglePlacesSearch';

export default {
  title: 'Components/Semantic UI/GooglePlacesSearch',
  decorators: [withKnobs]
};

export const Default = () => (
  <GooglePlacesSearch
    containerElement={<div style={{ height: '100%' }} />}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '0px' }} />}
    onLocationSelection={action('location-selection')}
    style={{ display: 'inline' }}
  >
    <Input type='text' />
  </GooglePlacesSearch>
);

export const CustomInput = () => (
  <GooglePlacesSearch
    containerElement={<div style={{ height: '100%' }} />}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '0px' }} />}
    onLocationSelection={action('location-selection')}
    style={{ display: 'inline' }}
  >
    <Input type='text' icon='world' size='large' />
  </GooglePlacesSearch>
);