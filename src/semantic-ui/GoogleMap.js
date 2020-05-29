// @flow

import React, { Component } from 'react';
import {
  GoogleMap as MapComponent,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import Google from '../utils/Google';

type Props = {
  center: {
    lat: number,
    lng: number
  },
  defaultCenter?: {
    lat: number,
    lng: number
  },
  defaultZoom?: number,
  zoom?: number
}

const GoogleMap = (props: Props) => (
  <MapComponent
    center={props.center || props.defaultCenter}
    defaultCenter={props.defaultCenter}
    defaultZoom={props.defaultZoom}
    zoom={props.zoom}
  >
    <Marker
      position={props.center}
      visible={!!props.center}
    />
  </MapComponent>
);

GoogleMap.defaultProps = {
  defaultCenter: { lat: 30.0444, lng: 31.2357 }, // Cairo, Egypt
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
