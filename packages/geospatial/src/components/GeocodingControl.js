// @flow

import { GeocodingControl as MapTilerGeocoding } from '@maptiler/geocoding-control/maplibregl';
import maplibregl from 'maplibre-gl';
import { forwardRef, useImperativeHandle } from 'react';
import { useControl, type ControlPosition } from 'react-map-gl';
import './GeocodingControl.css';

type Props = {
  apiKey: string,
  onSelection: () => void,
  position?: ControlPosition
};

const GeocodingControl = forwardRef(({ position, ...props }: Props, ref) => {
  /**
   * Creates the drawer ref using MapboxDraw.
   */
  const geocodingRef = useControl(() => {
    const control = new MapTilerGeocoding({ ...props, maplibregl });
    control.addEventListener('pick', props.onSelection);

    return control;
  }, { position });

  /**
   * Exposes the ref for the MapboxDraw object.
   */
  useImperativeHandle(ref, () => geocodingRef, [geocodingRef]);

  return null;
});

export default GeocodingControl;
