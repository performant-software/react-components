// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Layer, Source } from 'react-map-gl';
import _ from 'underscore';

type Props = {
  data?: { [key: string]: any },
  fillStyle?: { [key: string]: any },
  lineStyle?: { [key: string]: any },
  pointStyle?: { [key: string]: any },
  url?: string
};

const DEFAULT_COLOR = '#CC3333';
const HIGHLIGHT_COLOR = '#990000';

const DEFAULT_FILL_STYLES = {
  'fill-color': DEFAULT_COLOR,
  'fill-opacity': 0.2
};

const DEFAULT_LINE_STYLES = {
  'line-color': HIGHLIGHT_COLOR,
  'line-opacity': 0.6
};

const DEFAULT_POINT_STYLES = {
  'circle-radius': [
    'interpolate',
    ['linear'],
    ['number', ['get', 'point_count'], 1],
    0, 4,
    10, 14
  ],
  'circle-stroke-width': 1,
  'circle-color': DEFAULT_COLOR,
  'circle-stroke-color': HIGHLIGHT_COLOR
};

const GeoJsonLayer = (props: Props) => {
  const [data, setData] = useState(props.data);

  /**
   * Returns the layer style for the passed style and default.
   *
   * @type {function(*, *): *}
   */
  const getLayerStyles = useCallback((style, defaultStyle) => _.defaults(style, defaultStyle), []);

  /**
   * Sets the fill layer style.
   *
   * @type {*}
   */
  const fillStyle = useMemo(() => (
    getLayerStyles(props.fillStyle, DEFAULT_FILL_STYLES)
  ), [getLayerStyles, props.fillStyle]);

  /**
   * Sets the line layer style.
   *
   * @type {*}
   */
  const lineStyle = useMemo(() => (
    getLayerStyles(props.lineStyle, DEFAULT_LINE_STYLES)
  ), [getLayerStyles, props.lineStyle]);

  /**
   * Sets the point layer style.
   *
   * @type {*}
   */
  const pointStyle = useMemo(() => (
    getLayerStyles(props.pointStyle, DEFAULT_POINT_STYLES)
  ), [getLayerStyles, props.pointStyle]);

  /**
   * If the data is passed as a URL, fetches the passed URL and sets the response on the state.
   */
  useEffect(() => {
    if (props.url) {
      fetch(props.url)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [props.url]);

  return (
    <Source
      data={data}
      type='geojson'
    >
      <Layer
        filter={['!=', '$type', 'Point']}
        paint={fillStyle}
        type='fill'
      />
      <Layer
        filter={['!=', '$type', 'Point']}
        paint={lineStyle}
        type='line'
      />
      <Layer
        filter={['==', '$type', 'Point']}
        paint={pointStyle}
        type='circle'
      />
    </Source>
  );
};

export default GeoJsonLayer;
