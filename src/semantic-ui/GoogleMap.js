// @flow

import React from 'react';
import {
  GoogleMap as MapComponent,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

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

export default withScriptjs(withGoogleMap(GoogleMap));
