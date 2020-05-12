import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import Google from '../../../src/config/Google';
import GoogleMap from '../../../src/semantic-ui/GoogleMap';

export default {
  title: 'Components/Semantic UI/GoogleMap',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <GoogleMap
    containerElement={<div style={{ height: '400px' }} />}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

export const DefaultCenter = () => (
  <GoogleMap
    containerElement={<div style={{ height: '400px' }} />}
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

export const DefaultZoom = () => (
  <GoogleMap
    containerElement={<div style={{ height: '400px' }} />}
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    zoom={12}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);