// @flow

import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import Env from '../utils/Environment';
import GoogleMap from '../../../semantic-ui/src/components/GoogleMap';
import GoogleScript from '../../../shared/src/components/GoogleScript';

const googleMapsApiKey = Env.getGoogleMapsApiKey() || '';

export default {
  title: 'Components/Semantic UI/GoogleMap'
};

export const Default = () => (
  <GoogleScript
    googleMapsApiKey={googleMapsApiKey}
  >
    <GoogleMap />
  </GoogleScript>
);

export const DefaultCenter = () => (
  <GoogleScript
    googleMapsApiKey={googleMapsApiKey}
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
    googleMapsApiKey={googleMapsApiKey}
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
  const [position, setPosition] = useState(DEFAULT_POSITION);

  return (
    <>
      <GoogleScript
        googleMapsApiKey={googleMapsApiKey}
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
  const [position, setPosition] = useState();

  return (
    <Form>
      <GoogleScript
        googleMapsApiKey={googleMapsApiKey}
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
  const [position, setPosition] = useState({ lat: 42.3601, lng: -71.0589 });

  return (
    <Form>
      <GoogleScript
        googleMapsApiKey={googleMapsApiKey}
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

export const DefaultZoomWithMapMarker = () => {
  const DEFAULT_ZOOM = 3;
  const [position, setPosition] = useState({});

  return (
    <>
      <GoogleScript
        googleMapsApiKey={googleMapsApiKey}
      >
        <GoogleMap
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
