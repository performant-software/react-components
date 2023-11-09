// @flow

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {
  bbox,
  feature,
  type FeatureCollection,
  type GeometryCollection
} from '@turf/turf';
import maplibregl from 'maplibre-gl';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import Map, { MapRef } from 'react-map-gl';
import _ from 'underscore';
import DrawControl from './DrawControl';
import './MapDraw.css';

type Props = {
  /**
   * GeoJSON structured data to be displayed on the map.
   */
  data: GeometryCollection | FeatureCollection,

  /**
   * URL of the map style to render. This URL should contain any necessary API keys.
   */
  mapStyle: string,

  /**
   * Callback fired when the map geometries are changed.
   *
   * @param features
   */
  onChange: (features: Array<any>) => void,

  /**
   * Map style object.
   */
  style?: any
};

/**
 * This component renders a map with controls for drawing one or more geometries. Geometries can be a point (lat/long),
 * a line, or a polygon.
 */
const MapDraw = (props: Props) => {
  const drawRef = useRef<MapboxDraw>();
  const mapRef = useRef<MapRef>();

  /**
   * Calls the onChange prop with all of the geometries in the current drawer.
   *
   * @type {(function(): void)|*}
   */
  const onChange = useCallback(() => {
    props.onChange(drawRef.current.getAll());
  }, [props.onChange]);

  /**
   * Sets the map style.
   *
   * @type {{width: string, height: number}}
   */
  const style = useMemo(() => ({ height: 500, width: '100%', ...(props.style || {}) }), [props.style]);

  /**
   * Updates the map bounding box and drawer when the geometry is changed.
   */
  useEffect(() => {
    if (props.data) {
      // Sets the bounding box for the current geometry.
      const boundingBox = bbox(props.data);

      if (_.every(boundingBox, _.isFinite)) {
        const [minLng, minLat, maxLng, maxLat] = boundingBox;
        const bounds = [[minLng, minLat], [maxLng, maxLat]];

        mapRef.current.fitBounds(bounds, { padding: 40, duration: 1000 });
      }

      // Handle special case for geometry collection (not supported by mabox-gl-draw)
      if (props.data.type === 'GeometryCollection') {
        _.each(props.data.geometries, (geometry) => {
          drawRef.current.add(feature(geometry));
        });
      } else {
        drawRef.current.add(props.data);
      }
    }
  }, [props.data]);

  return (
    <Map
      attributionControl={false}
      mapLib={maplibregl}
      ref={mapRef}
      style={style}
      mapStyle={props.mapStyle}
    >
      <DrawControl
        ref={drawRef}
        controls={{
          line_string: true,
          point: true,
          polygon: true,
          trash: true
        }}
        displayControlsDefault={false}
        onCreate={onChange}
        onUpdate={onChange}
        onDelete={onChange}
      />
    </Map>
  );
};

export default MapDraw;
