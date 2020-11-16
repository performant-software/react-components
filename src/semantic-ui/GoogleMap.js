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
}

const GoogleMap = (props: Props) => (
  <MapComponent
    defaultCenter={props.defaultCenter}
    defaultZoom={props.defaultZoom}
  >
    <Marker
      draggable={!!props.onDragEnd}
      onDragEnd={({ latLng }) => {
        if (props.onDragEnd) {
          props.onDragEnd({ lat: latLng.lat(), lng: latLng.lng() });
        }
      }}
      position={props.position}
      visible={props.position || props.defaultPosition}
    />
  </MapComponent>
);

GoogleMap.defaultProps = {
  defaultZoom: 3,
  zoom: 3
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
