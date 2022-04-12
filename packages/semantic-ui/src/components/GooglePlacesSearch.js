// @flow

import { StandaloneSearchBox } from '@react-google-maps/api';
import React, { useCallback, useState, type Element } from 'react';
import _ from 'underscore';

type Props = {
  children: Element<any>,
  onLocationSelection: ({ lat: number, lng: number }) => void
}

const GooglePlacesSearch = (props: Props) => {
  const [searchBox, setSearchBox] = useState();

  const onPlacesChanged = useCallback(() => {
    if (searchBox) {
      const place = _.first(searchBox.getPlaces());
      const { location } = place.geometry;

      const name = place.formatted_address;
      const lat = location.lat();
      const lng = location.lng();

      props.onLocationSelection({
        name,
        lat,
        lng,
        result: place
      });
    }
  }, [searchBox, props.onLocationSelection]);

  return (
    <StandaloneSearchBox
      onLoad={(s) => setSearchBox(s)}
      onPlacesChanged={onPlacesChanged}
    >
      { props.children }
    </StandaloneSearchBox>
  );
};

export default GooglePlacesSearch;
