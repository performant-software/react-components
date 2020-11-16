// @flow

import React, { Component } from 'react';
import {
  GoogleMap as MapComponent,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import Google from '../utils/Google';

type LatLng = {
  lat: () => number,
  lng: () => number
};

type Props = {
  defaultCenter?: {
    lat: number,
    lng: number
  },
  defaultPosition?: {
    lat: number,
    lng: number
  },
  defaultZoom?: number,
  onDragEnd: (latLng: LatLng) => ({ lat: number, lng: number }),
  position: {
    lat: number,
    lng: number
  }
};

const DEFAULT_ZOOM = 3;
const DEFAULT_ZOOM_MARKER = 12;

const GoogleMap = (props: Props) => {
  let { defaultZoom } = props;

  // If no default zoom is provided and a position is provided, set the default zoom to 12.
  if (!defaultZoom) {
    if (props.position) {
      defaultZoom = DEFAULT_ZOOM_MARKER;
    } else {
      defaultZoom = DEFAULT_ZOOM;
    }
  }

  const onPositionChange = ({ latLng }) => {
    if (props.onDragEnd) {
      props.onDragEnd({ lat: latLng.lat(), lng: latLng.lng() });
    }
  };

  return (
    <MapComponent
      defaultCenter={props.defaultCenter}
      defaultZoom={defaultZoom}
      onClick={onPositionChange.bind(this)}
    >
      <Marker
        draggable={!!props.onDragEnd}
        onDragEnd={onPositionChange.bind(this)}
        position={props.position}
        visible={!!(props.position || props.defaultPosition)}
      />
    </MapComponent>
  );
};

GoogleMap.defaultProps = {
  defaultCenter: {
    lat: 0,
    lng: 0
  }
};

const GoogleMapElement = withScriptjs(withGoogleMap(GoogleMap));

type WrapperProps = {
  containerElement?: Component<{}>,
  googleMapsApiKey: string,
  loadingElement?: Component<{}>,
  mapElement?: Component<{}>
};

const GoogleMapWrapper = ({
  containerElement,
  googleMapsApiKey,
  loadingElement,
  mapElement,
  ...rest
}: WrapperProps) => (
  <GoogleMapElement
    {...rest}
    containerElement={containerElement}
    googleMapURL={Google.getGoogleMapsUrl(googleMapsApiKey)}
    loadingElement={loadingElement}
    mapElement={mapElement}
  />
);

GoogleMapWrapper.defaultProps = {
  containerElement: <div style={{ height: '400px' }} />,
  loadingElement: <div style={{ height: '100%' }} />,
  mapElement: <div style={{ height: '100%' }} />

};

export default GoogleMapWrapper;
