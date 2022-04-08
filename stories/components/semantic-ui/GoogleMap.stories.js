// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Form } from 'semantic-ui-react';
import GoogleMap from '../../../src/semantic-ui/GoogleMap';

export default {
  title: 'Components/Semantic UI/GoogleMap',
  decorators: [withA11y]
};

export const Default = () => (
  <GoogleMap
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  />
);

export const DefaultCenter = () => (
  <GoogleMap
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  />
);

export const DefaultZoom = () => (
  <GoogleMap
    defaultCenter={{
      lat: 42.3601,
      lng: -71.0589
    }}
    defaultZoom={12}
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  />
);

export const WithMapMarker = () => {
  const DEFAULT_POSITION = { lat: 42.3601, lng: -71.0589 };
  const DEFAULT_ZOOM = 12;
  const [position, setPosition] = useState<any>(DEFAULT_POSITION);

  return (
    <>
      <GoogleMap
        defaultCenter={DEFAULT_POSITION}
        defaultPosition={DEFAULT_POSITION}
        defaultZoom={DEFAULT_ZOOM}
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
        onDragEnd={(p) => setPosition(p)}
        position={position}
      />
      <div>
        <strong>Latitude: </strong>
        { position.lat }
      </div>
      <div>
        <strong>Longitude: </strong>
        { position.lng }
      </div>
    </>
  );
};

export const EditableCooridnates = () => {
  const [position, setPosition] = useState<any>();

  return (
    <Form>
      <GoogleMap
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
        onDragEnd={(p) => setPosition(p)}
        position={position}
      />
      <Form.Input
        label='Latitude'
        onChange={(e, { value }) => setPosition({ ...position, lat: value })}
        value={(position && position.lat) || ''}
      />
      <Form.Input
        label='Longitude'
        onChange={(e, { value }) => setPosition({ ...position, lng: value })}
        value={(position && position.lng) || ''}
      />
    </Form>
  );
};

export const EditableCoordinatesWithDefaults = () => {
  const [position, setPosition] = useState<any>({ lat: 42.3601, lng: -71.0589 });

  return (
    <Form>
      <GoogleMap
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
        onDragEnd={(p) => setPosition(p)}
        position={position}
      />
      <Form.Input
        label='Latitude'
        onChange={(e, { value }) => setPosition({ ...position, lat: value })}
        value={(position && position.lat) || ''}
      />
      <Form.Input
        label='Longitude'
        onChange={(e, { value }) => setPosition({ ...position, lng: value })}
        value={(position && position.lng) || ''}
      />
    </Form>
  );
};
