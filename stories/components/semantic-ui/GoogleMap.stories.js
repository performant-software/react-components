import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import GoogleMap from '../../../src/semantic-ui/GoogleMap';

export default {
  title: 'Components/Semantic UI/GoogleMap',
  decorators: [withA11y]
};

export const Default = () => (
  <GoogleMap
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
  />
);

export const DefaultCenter = () => (
  <GoogleMap
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
  />
);

export const DefaultZoom = () => (
  <GoogleMap
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    zoom={12}
  />
);
