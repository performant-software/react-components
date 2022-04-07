// @flow

import {
  GoogleMap as MapComponent,
  LoadScript,
  Marker
} from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';
import Map from '../utils/Map';

type LatLng = {
  lat: () => number,
  lng: () => number
};

type Props = {
  className?: string,
  containerStyle?: any,
  defaultCenter?: {
    lat: number,
    lng: number
  },
  defaultZoom?: number,
  googleMapsApiKey: string,
  onDragEnd?: (latLng: LatLng) => void,
  position?: {
    lat: number,
    lng: number
  }
};

const DEFAULT_ZOOM = 1;
const DEFAULT_ZOOM_MARKER = 12;

const GoogleMap = (props: Props) => {
  // Convert the position props to floats to avoid Javascript errors.
  const position = Map.getPosition(props.position);

  const [center, setCenter] = useState(position || props.defaultCenter);
  const [map, setMap] = useState();

  // If no default zoom is provided and a position is provided, set the default zoom to 12.
  let { defaultZoom } = props;

  if (!defaultZoom) {
    if (position) {
      defaultZoom = DEFAULT_ZOOM_MARKER;
    } else {
      defaultZoom = DEFAULT_ZOOM;
    }
  }

  // Call the onDragEnd prop, passing the new location.
  const onDragEnd = ({ latLng }) => {
    if (props.onDragEnd) {
      // $FlowFixMe - Not actually fixing, we're checking for presence here.
      props.onDragEnd({
        lat: latLng.lat(),
        lng: latLng.lng()
      });
    }
  };

  const onLoad = useCallback((m) => setMap(m), []);

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
    <LoadScript
      googleMapsApiKey={props.googleMapsApiKey}
    >
      <MapComponent
        center={center}
        mapContainerClassName={props.className}
        mapContainerStyle={props.containerStyle}
        onClick={onDragEnd}
        onLoad={onLoad}
        zoom={defaultZoom}
      >
        { position && (
          <Marker
            draggable={!!props.onDragEnd}
            onDragEnd={onDragEnd}
            position={position}
            visible
          />
        )}
      </MapComponent>
    </LoadScript>
  );
};

GoogleMap.defaultProps = {
  containerStyle: {
    height: '600px',
    width: '600px'
  },
  defaultCenter: {
    lat: 0,
    lng: 0
  }
};

export default GoogleMap;
