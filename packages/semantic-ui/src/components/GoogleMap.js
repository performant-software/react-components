// @flow

import { Map } from '@performant-software/shared-components';
import {
  GoogleMap as MapComponent,
  Marker
} from '@react-google-maps/api';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

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

  /**
   * Set the zoom value based on the position and defaultZoom prop.
   *
   * @type {*}
   */
  const zoom = useMemo(() => {
    let value;

    if (position) {
      value = DEFAULT_ZOOM_MARKER;
    } else if (props.defaultZoom) {
      value = props.defaultZoom;
    } else {
      value = DEFAULT_ZOOM;
    }

    return value;
  }, [position, props.defaultZoom]);

  /**
   * Call the onDragEnd prop, passing the new location.
   *
   * @type {(function({latLng: *}): void)|*}
   */
  const onDragEnd = useCallback(({ latLng }) => {
    if (props.onDragEnd) {
      props.onDragEnd({
        lat: latLng.lat(),
        lng: latLng.lng()
      });
    }
  }, [props.onDragEnd]);

  /**
   * Sets the map object when the component mounts.
   *
   * @type {function(*): void}
   */
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
    <MapComponent
      center={center}
      mapContainerClassName={props.className}
      mapContainerStyle={props.containerStyle}
      onClick={onDragEnd}
      onLoad={onLoad}
      zoom={zoom}
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
  );
};

GoogleMap.defaultProps = {
  containerStyle: {
    height: '400px'
  },
  defaultCenter: {
    lat: 0,
    lng: 0
  }
};

export default GoogleMap;
