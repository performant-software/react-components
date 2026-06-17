// @flow

import React from 'react';
import _ from 'underscore';
import OverlayLayer from './OverlayLayer';

type Layer = {
  /**
   * (Optional) GeoJSON data to pass to the layer.
   */
  content?: { [key: string]: any },

  /**
   * The type of layer to render.
   */
  layer_type: 'geojson' | 'raster' | 'georeference',

  /**
   * Name of the layer.
   */
  name: string,

  /**
   * (Optional) Layer opacity.
   */
  opacity?: number,

  /**
   * (Optional) URL that contains the layer. This can be a URL to GeoJSON data or a Raster tile set.
   */
  url?: string
};

type Props = {
  /**
   * The set of layers to render.
   */
  overlays: Array<Layer>
};

/**
 * This component renders a set of overlay layers.
 */
const OverlayLayers = (props: Props) => (
  _.map(props.overlays, (overlay: Layer, index: number) => (
    <OverlayLayer
      key={index}
      overlay={overlay}
    />
  ))
);

export default OverlayLayers;
