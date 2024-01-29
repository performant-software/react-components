// @flow

import {
  Children,
  cloneElement,
  useEffect,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { MapboxMap, useControl } from 'react-map-gl';
import { IControl } from 'maplibre-gl';
import _ from 'underscore';

/**
 * Layer control implementation.
 */
class LayerControl implements IControl {
  _map: MapboxMap = null;
  _container: HTMLElement;
  _redraw: () => void;

  constructor(redraw: () => void) {
    this._redraw = redraw;
  }

  onAdd(map) {
    this._map = map;
    map.on('move', this._redraw);

    this._container = document.createElement('div');
    this._container.className = 'maplibregl-ctrl-group maplibregl-ctrl';
    this._redraw();
    return this._container;
  }

  onRemove() {
    this._container.remove();
    this._map.off('move', this._redraw);
    this._map = null;
  }

  getMap() {
    return this._map;
  }

  getElement() {
    return this._container;
  }
}

/**
 * Layer container.
 *
 * @param props
 *
 * @returns {React$Portal}
 */
const LayerMenuContainer = (props) => {
  const [, setVersion] = useState(0);

  const ctrl = useControl(() => {
    const forceUpdate = () => setVersion((v) => v + 1);
    return new LayerControl(forceUpdate);
  }, { position: props.position });

  const map = ctrl.getMap();

  const children = Children.map(_.compact(props.children), (child) => cloneElement(child, { map }));

  useEffect(() => {
    if (props.mapRef) {
      // eslint-disable-next-line no-param-reassign
      props.mapRef.current = map;
    }
  }, [map, props.mapRef]);

  return map && createPortal(children, ctrl.getElement());
};

export default LayerMenuContainer;
