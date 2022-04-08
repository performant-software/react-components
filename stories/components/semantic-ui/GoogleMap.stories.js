// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Form } from 'semantic-ui-react';
import GoogleMap from '../../../src/semantic-ui/GoogleMap';
import GoogleScript from '../../../src/common/GoogleScript';

export default {
  title: 'Components/Semantic UI/GoogleMap',
  decorators: [withA11y]
};

export const Default = () => (
  <GoogleScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  >
    <GoogleMap />
  </GoogleScript>
);

export const DefaultCenter = () => (
  <GoogleScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  >
    <GoogleMap
      defaultCenter={{
        lat: 42.3601,
        lng: -71.0589
      }}
    />
  </GoogleScript>
);

export const DefaultZoom = () => (
  <GoogleScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
  >
    <GoogleMap
      defaultCenter={{
        lat: 42.3601,
        lng: -71.0589
      }}
      defaultZoom={12}
    />
  </GoogleScript>
);

export const WithMapMarker = () => {
  const DEFAULT_POSITION = { lat: 42.3601, lng: -71.0589 };
  const DEFAULT_ZOOM = 12;
  const [position, setPosition] = useState<any>(DEFAULT_POSITION);

  return (
    <>
      <GoogleScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      >
        <GoogleMap
          defaultCenter={DEFAULT_POSITION}
          defaultPosition={DEFAULT_POSITION}
          defaultZoom={DEFAULT_ZOOM}
          onDragEnd={(p) => setPosition(p)}
          position={position}
        />
      </GoogleScript>
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
      <GoogleScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      >
        <GoogleMap
          onDragEnd={(p) => setPosition(p)}
          position={position}
        />
      </GoogleScript>
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
      <GoogleScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      >
        <GoogleMap
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
          onDragEnd={(p) => setPosition(p)}
          position={position}
        />
      </GoogleScript>
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
