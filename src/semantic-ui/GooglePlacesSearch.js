// @flow

import React, { Component } from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import _ from 'underscore';
import Google from '../config/Google';

type Props = {
  children: Component<{}>,
  onLocationSelection: ({ lat: number, lng: number }) => void
}

const GooglePlacesSearchBox = (props: Props) => {
  const refs = {};

  const onPlacesChanged = () => {
    const place = _.first(refs.searchBox.getPlaces());
    const { location } = place.geometry;

    const name = place.formatted_address;
    const lat = location.lat();
    const lng = location.lng();

    props.onLocationSelection({ name, lat, lng });
  };

  return (
    <StandaloneSearchBox
      ref={(searchBox) => {
        refs.searchBox = searchBox;
      }}
      onPlacesChanged={onPlacesChanged.bind(this)}
    >
      { props.children }
    </StandaloneSearchBox>
  );
};

const GooglePlacesSearchInput = withScriptjs(withGoogleMap(GooglePlacesSearchBox));

type WrapperProps = {
  children: Component<{}>,
  containerElement?: Component<{}>,
  loadingElement?: Component<{}>,
  mapElement?: Component<{}>,
  onLocationSelection: () => void,
  style?: any
};

const GooglePlacesSearch = (props: WrapperProps) => (
  <GooglePlacesSearchInput
    containerElement={props.containerElement}
    googleMapURL={Google.googleMapsUrl}
    loadingElement={props.loadingElement}
    mapElement={props.mapElement}
    onLocationSelection={props.onLocationSelection.bind(this)}
    style={props.style}
  >
    { props.children }
  </GooglePlacesSearchInput>
);

GooglePlacesSearch.defaultProps = {
  containerElement: <div style={{ height: '100%' }} />,
  loadingElement: <div style={{ height: '100%' }} />,
  mapElement: <div style={{ height: '0px' }} />,
  style: {
    display: 'inline'
  }
};

export default GooglePlacesSearch;
