// @flow

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { feature, type FeatureCollection, type GeometryCollection } from '@turf/turf';
import maplibregl from 'maplibre-gl';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Node
} from 'react';
import Map, {
  FullscreenControl,
  type MapboxMap,
  NavigationControl
} from 'react-map-gl/maplibre';
import _ from 'underscore';
import DrawControl from './DrawControl';
import GeocodingControl from './GeocodingControl';
import MapUtils from '../utils/Map';

import '@maptiler/geocoding-control/style.css';
import './MapDraw.css';

// Override the MapboxDraw components to use MapLibre styles
MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';

type Props = {
  /**
   * MapTiler API key.
   */
  apiKey?: string,

  /**
   * The number of miles to buffer the GeoJSON data.
   */
  buffer?: number,

  /**
   * Additional child nodes to render.
   */
  children?: Node,

  /**
   * If `true`, the map will require CTRL + scroll to zoom.
   */
  cooperativeGestures?: boolean,

  /**
   * GeoJSON structured data to be displayed on the map.
   */
  data: GeometryCollection | FeatureCollection,

  /**
   * If `true`, a control will be rendered to put the map in full screen mode.
   */
  fullscreen?: boolean,

  /**
   * Controls the type of GeoJSON data returned from the MapTiler Geocoding API.
   */
  geocoding?: undefined | 'point' | 'polygon',

  /**
   * URL of the map style to render. This URL should contain any necessary API keys.
   */
  mapStyle: string,

  /**
   * The maximum pitch of the map (0-85).
   */
  maxPitch?: number,

  /**
   * If `true`, the navigation controls will display.
   */
  navigation?: boolean,

  /**
   * Callback fired when the map geometries are changed.
   *
   * @param features
   */
  onChange: (features: Array<any>) => void,

  /**
   * Callback fired when an item is selected from the geocoding dropdown.
   */
  onGeocodingSelection?: (data: any) => void,

  /**
   * If `true`, the map's canvas can be exported to a PNG using `map.getCanvas().toDataURL()`.
   */
  preserveDrawingBuffer?: boolean,

  /**
   * Map style object.
   */
  style?: any,

  /**
   * The time in milliseconds to zoom into the location.
   */
  zoomDuration?: number
};

const DEFAULT_BUFFER = 2;
const DEFAULT_ZOOM_DELAY = 1000;

const GeometryTypes = {
  geometryCollection: 'GeometryCollection',
  point: 'Point',
  polygon: ['Polygon', 'MultiPolygon']
};

/**
 * This component renders a map with controls for drawing one or more geometries. Geometries can be a point (lat/long),
 * a line, or a polygon.
 */
const MapDraw = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  const drawRef = useRef<MapboxDraw>();
  const mapRef = useRef<MapboxMap>();

  /**
   * Returns true if the passed geometry type is valid. MapTiler fires the onSelection callback twice: Once after
   * selecting the record from the list (with a point geometry), and once after making a call to the server for the
   * full record (polygon geometry). We should on fire the onGeocodingSelection callback and add the geometry to the
   * map once.
   *
   * @type {function({geometry: {type: *}}): *}
   */
  const isValid = useCallback((detail) => {
    if (!detail) {
      return false;
    }

    const { geometry: { type } } = detail;

    return (props.geocoding === 'point' && type === GeometryTypes.point)
      || (props.geocoding === 'polygon' && GeometryTypes.polygon.includes(type));
  }, [props.geocoding]);

  /**
   * Calls the onChange prop with all of the geometries in the current drawer.
   *
   * @type {(function(): void)|*}
   */
  const onChange = useCallback(() => props.onChange(drawRef.current.getAll()), [props.onChange]);

  /**
   * Adds the selected geometry to the map.
   *
   * @type {(function({detail: *}): void)|*}
   */
  const onSelection = useCallback(({ detail }) => {
    if (isValid(detail)) {
      // Add the geometry to the map
      drawRef.current.add(detail.geometry);

      // Trigger the onChange prop
      onChange();

      // Call the onGeocoding selection callback
      if (props.onGeocodingSelection) {
        props.onGeocodingSelection(detail);
      }
    }
  }, [isValid, onChange, props.onGeocodingSelection]);

  /**
   * Sets the map style URL.
   *
   * @type {string}
   */
  const mapStyleUrl = useMemo(() => `${props.mapStyle}?key=${props.apiKey}`, [props.apiKey, props.mapStyle]);

  /**
   * Sets the element map style.
   *
   * @type {{width: string, height: number}}
   */
  const style = useMemo(() => ({ height: 500, width: '100%', ...(props.style || {}) }), [props.style]);

  /**
   * Updates the map bounding box and drawer when the geometry is changed.
   */
  useEffect(() => {
    if (loaded && props.data) {
      // Sets the bounding box for the current geometry
      const bbox = MapUtils.getBoundingBox(props.data, props.buffer);

      if (bbox) {
        mapRef.current.fitBounds(bbox, { duration: props.zoomDuration });
      }

      // Handle special cases for geometry collection (not supported by mabox-gl-draw) and point
      if (props.data.type === GeometryTypes.geometryCollection) {
        _.each(props.data.geometries, (geometry) => {
          drawRef.current.add(feature(geometry));
        });
      } else {
        drawRef.current.add(props.data);
      }
    }
  }, [loaded, props.data]);

  return (
    <Map
      attributionControl={false}
      cooperativeGestures={props.cooperativeGestures}
      mapLib={maplibregl}
      maxPitch={props.maxPitch}
      onLoad={() => setLoaded(true)}
      preserveDrawingBuffer={props.preserveDrawingBuffer}
      ref={mapRef}
      style={style}
      mapStyle={mapStyleUrl}
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
        position='bottom-left'
      />
      { props.geocoding && (
        <GeocodingControl
          apiKey={props.apiKey}
          marker={false}
          position='top-left'
          onSelection={onSelection}
          showFullGeometry={props.geocoding === 'polygon'}
          showResultMarkers={false}
          key={props.geocoding}
        />
      )}
      { props.navigation && (
        <NavigationControl />
      )}
      { props.fullscreen && (
        <FullscreenControl />
      )}
      { props.children }
    </Map>
  );
};

MapDraw.defaultProps = {
  buffer: DEFAULT_BUFFER,
  cooperativeGestures: true,
  preserveDrawingBuffer: false,
  zoomDuration: DEFAULT_ZOOM_DELAY
};

export default MapDraw;
