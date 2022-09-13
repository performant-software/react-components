// @flow

import React, { useCallback, type ComponentType, type Element } from 'react';
import { localPoint } from '@visx/event';
import { Zoom } from '@visx/zoom';
import i18n from '../i18n/i18n';
import './Zoom.css';

type Props = {
  initialTransform?: {
    skewX: number,
    skewY: number,
    scaleX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  },
  parentHeight: number,
  parentWidth: number,
  scaleXMax?: number,
  scaleXMin?: number,
  scaleYMax?: number,
  scaleYMin?: number
};

type WithZoomType = (WrappedComponent: ComponentType<any>) => (props: Props) => Element<any>;

const DEFAULT_INITIAL_TRANSFORM = {
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  skewX: 0,
  skewY: 0,
};

const withZoom: WithZoomType = (WrappedComponent: ComponentType<any>) => (props: Props) => {
  const { parentWidth: width, parentHeight: height } = props;
  const { scaleXMin = 1 / 2, scaleXMax = 4 } = props;
  const { scaleYMin = 1 / 2, scaleYMax = 4 } = props;
  const { initialTransform = DEFAULT_INITIAL_TRANSFORM } = props;

  /**
   * Renders the container with zoom controls.
   *
   * @type {unknown}
   */
  const renderZoomContainer = useCallback((zoom) => (
    <rect
      width={width}
      height={height}
      rx={14}
      fill='transparent'
      onTouchStart={zoom.dragStart}
      onTouchMove={zoom.dragMove}
      onTouchEnd={zoom.dragEnd}
      onMouseDown={zoom.dragStart}
      onMouseMove={zoom.dragMove}
      onMouseUp={zoom.dragEnd}
      onMouseLeave={() => {
        if (zoom.isDragging) zoom.dragEnd();
      }}
      onDoubleClick={(event) => {
        const point = localPoint(event) || { x: 0, y: 0 };
        zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
      }}
    />
  ), [width, height]);

  return (
    <Zoom
      width={width}
      height={height}
      scaleXMin={scaleXMin}
      scaleXMax={scaleXMax}
      scaleYMin={scaleYMin}
      scaleYMax={scaleYMax}
      initialTransformMatrix={initialTransform}
    >
      { (zoom) => (
        <div
          className='zoom'
        >
          <WrappedComponent
            {...props}
            renderZoomContainer={renderZoomContainer.bind(this, zoom)}
            zoom={zoom}
          />
          <div
            className='controls'
          >
            <button
              type='button'
              className='btn btn-zoom'
              onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
            >
              { i18n.t('Zoom.buttons.zoomIn') }
            </button>
            <button
              type='button'
              className='btn btn-zoom btn-bottom'
              onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
            >
              { i18n.t('Zoom.buttons.zoomOut') }
            </button>
            <button
              type='button'
              className='btn btn-lg'
              onClick={zoom.center}
            >
              { i18n.t('Zoom.buttons.center') }
            </button>
            <button
              type='button'
              className='btn btn-lg'
              onClick={zoom.reset}
            >
              { i18n.t('Zoom.buttons.reset') }
            </button>
            <button
              type='button'
              className='btn btn-lg'
              onClick={zoom.clear}
            >
              { i18n.t('Zoom.buttons.clear') }
            </button>
          </div>
        </div>
      )}
    </Zoom>
  );
};

export default withZoom;

export type ZoomProps = {
  renderZoomContainer: () => Element<any>,
  zoom: typeof Zoom
};
