// @flow

import { IControl } from 'maplibre-gl';
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { type MapboxMap, useControl } from 'react-map-gl/maplibre';
import _ from 'underscore';

/**
 * Class to implement the IControl interface to allow custom controls to be drawn on the map.
 */
class IControlImpl implements IControl {
  _map: MapboxMap = null;
  _container: HTMLElement;
  _redraw: () => void;

  /**
   * Constructs a new IControlImpl object.
   *
   * @param redraw
   */
  constructor(redraw: () => void) {
    this._redraw = redraw;
  }

  /**
   * Creates the container when the component is added to the passed map.
   *
   * @param map
   *
   * @returns {HTMLElement}
   */
  onAdd(map) {
    this._map = map;
    map.on('move', this._redraw);

    this._container = document.createElement('div');
    this._container.className = 'maplibregl-ctrl-group maplibregl-ctrl';
    this._redraw();
    return this._container;
  }

  /**
   * Removes the container when the component is removed from the map.
   */
  onRemove() {
    this._container.remove();
    this._map.off('move', this._redraw);
    this._map = null;
  }

  /**
   * Returns the map instance.
   *
   * @returns {mapboxgl.Map}
   */
  getMap() {
    return this._map;
  }

  /**
   * Returns the container instance.
   *
   * @returns {HTMLElement}
   */
  getElement() {
    return this._container;
  }
}

const MapControl = (props) => {
  const [, setVersion] = useState(0);

  /**
   * Forces the component to re-render on map move.
   *
   * @type {function(): void}
   */
  const forceUpdate = useCallback(() => setVersion((v) => v + 1), []);

  /**
   * Creates the map control.
   *
   * @type {IControlImpl}
   */
  const ctrl = useControl(() => new IControlImpl(forceUpdate), { position: props.position });

  /**
   * Sets the map instance.
   *
   * @type {mapboxgl.Map}
   */
  const map = ctrl.getMap();

  /**
   * Creates the list of children to be added to the map instance.
   *
   * @type {Array<$NonMaybeType<*>>}
   */
  const children = Children.map(_.compact(Children.toArray(props.children)), (child) => cloneElement(child, { map }));

  /**
   * Sets the map ref.
   */
  useEffect(() => {
    if (props.mapRef) {
      props.mapRef.current = map;
    }
  }, [map, props.mapRef]);

  return map && createPortal(children, ctrl.getElement());
};

export default MapControl;
