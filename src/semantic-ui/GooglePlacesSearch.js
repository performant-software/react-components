// @flow

import React, { Component } from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import _ from 'underscore';

type Props = {
  children: Component,
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

export default withScriptjs(withGoogleMap(GooglePlacesSearchBox));
