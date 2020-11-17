// @flow

import React, { useEffect, useState, type Element } from 'react';
import {
  GoogleMap as MapComponent,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import Google from '../utils/Google';
import Map from '../utils/Map';

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
  const { defaultPosition } = props;
  const [center, setCenter] = useState(defaultPosition);
  const [map, setMap] = useState();

  // If no default zoom is provided and a position is provided, set the default zoom to 12.
  let { defaultZoom } = props;

  if (!defaultZoom) {
    if (props.position) {
      defaultZoom = DEFAULT_ZOOM_MARKER;
    } else {
      defaultZoom = DEFAULT_ZOOM;
    }
  }

  // Convert the position props to floats to avoid Javascript errors.
  const position = Map.getPosition(props.position);

  // Call the onDragEnd prop, passing the new location.
  const onDragEnd = ({ latLng }) => {
    if (props.onDragEnd) {
      props.onDragEnd({
        lat: latLng.lat(),
        lng: latLng.lng()
      });
    }
  };

  // If the position is changed manually and the new location is outside of the current bounds, re-center the map.
  useEffect(() => {
    if (map && position) {
      const bounds = map.getBounds();
      if (bounds && !bounds.contains(position)) {
        setCenter(position);
      }
    }
  }, [props.position]);

  return (
    <MapComponent
      defaultZoom={defaultZoom}
      center={center}
      onClick={onDragEnd}
      ref={(m) => setMap(m)}
    >
      <Marker
        draggable={!!props.onDragEnd}
        onDragEnd={onDragEnd}
        position={position}
        visible={!!(position || props.defaultPosition)}
      />
    </MapComponent>
  );
};

GoogleMap.defaultProps = {
  defaultPosition: {
    lat: 0,
    lng: 0
  }
};

const GoogleMapElement = withScriptjs(withGoogleMap(GoogleMap));

type WrapperProps = {
  containerElement?: Element<any>,
  googleMapsApiKey: string,
  loadingElement?: Element<any>,
  mapElement?: Element<any>
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
