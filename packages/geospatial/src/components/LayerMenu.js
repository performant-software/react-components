// @flow

import React, {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { BsStack } from 'react-icons/bs';
import { IoCheckmarkOutline } from 'react-icons/io5';
import _ from 'underscore';
import MapControl from './MapControl';
import './LayerMenu.css';

type Props = {
  children: Node,
  className?: string,
  names: Array<string>,
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right'
};

const MENU_PADDING = 30;

const LayerMenu = (props: Props) => {
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [visible, setVisible] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const mapRef = useRef();

  /**
   * Returns the name of the layer at the passed index.
   *
   * @type {unknown}
   */
  const getLayerName = useCallback((index) => (
    props.names && props.names.length > index && props.names[index]
  ), [props.names]);

  /**
   * Returns true if the child element at the passed index is visible.
   *
   * @type {function(*): *}
   */
  const isVisible = useCallback((index) => _.includes(visible, index), [visible]);

  /**
   * Returns a memoized array of the child elements.
   *
   * @type {Array<$NonMaybeType<unknown>>}
   */
  const children = useMemo(() => Children.toArray(props.children), [props.children]);

  /**
   * Returns a memoized array of visible child elements.
   */
  const visibleChildren = useMemo(() => _.filter(children, (child, index) => isVisible(index)), [children, isVisible]);

  /**
   * Toggles the visibility for the child element at the passed index.
   *
   * @type {(function(*): void)|*}
   */
  const toggleVisibility = useCallback((index) => {
    let value;

    if (isVisible(index)) {
      value = _.without(visible, index);
    } else {
      value = [...visible, index];
    }

    setVisible(value);
  }, [isVisible, visible]);

  /**
   * Sets all of the child elements to be visible when the component mounts.
   */
  useEffect(() => {
    setVisible(_.times(children.length, (index) => index));
  }, []);

  /**
   * Sets the map canvas height.
   */
  useEffect(() => {
    const { current: instance } = mapRef;

    if (instance && instance._canvas) {
      const { offsetHeight = 0 } = mapRef.current._canvas;
      setCanvasHeight(offsetHeight);
    }
  }, [mapRef.current]);

  if (_.isEmpty(children)) {
    return null;
  }

  return (
    <>
      <MapControl
        mapRef={mapRef}
        position={props.position}
      >
        <button
          aria-label='Toggle Menu'
          className={props.className || 'mapbox-gl-draw_ctrl-draw-btn layer-button'}
          onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
          type='button'
        >
          <BsStack
            size='1.25em'
          />
        </button>
        { menuOpen && (
          <div
            className='layer-menu'
            style={{
              maxHeight: `calc(${canvasHeight}px - ${MENU_PADDING}px)`
            }}
          >
            <div
              className='menu'
            >
              { _.map(children, (child, index) => (
                <div
                  aria-selected={isVisible(index)}
                  className='option'
                  role='option'
                  onClick={() => toggleVisibility(index)}
                  onKeyDown={() => toggleVisibility(index)}
                  tabIndex={index}
                >
                  <div
                    className='checkmark-container'
                  >
                    { isVisible(index) && (
                      <IoCheckmarkOutline
                        size='1em'
                      />
                    )}
                  </div>
                  { getLayerName(index) }
                </div>
              ))}
            </div>
          </div>
        )}
      </MapControl>
      { visibleChildren }
    </>
  );
};

LayerMenu.defaultProps = {
  position: 'top-left'
};

export default LayerMenu;
