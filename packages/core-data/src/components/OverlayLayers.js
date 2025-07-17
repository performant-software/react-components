// @flow

import { MapStyles, WarpedImageLayerPeripleo as WarpedImageLayer } from '@performant-software/geospatial';
import { GeoJSONLayer, RasterLayer } from '@peripleo/maplibre';
import React from 'react';
import _ from 'underscore';

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

type OverlayLayerProps = {
  /**
   * The overlay layer to render.
   */
  overlay: Layer
};

/**
 * This component renders a GeoJSONLayer or RasterLayer component depending on the `layer_type` of the passed `overlay`.
 */
const OverlayLayer = (props: OverlayLayerProps) => {
  const { overlay } = props;

  if (overlay.layer_type === 'geojson') {
    return (
      <GeoJSONLayer
        id={overlay.name}
        data={overlay.content || overlay.url}
        fillStyle={MapStyles.fill}
        pointStyle={MapStyles.point}
        strokeStyle={MapStyles.stroke}
      />
    );
  }

  if (overlay.layer_type === 'raster') {
    return (
      <RasterLayer
        id={overlay.name}
        url={overlay.url}
      />
    );
  }

  if (overlay.layer_type === 'georeference') {
    return (
      <WarpedImageLayer
        id={overlay.name}
        manifest={overlay.content}
        opacity={overlay.opacity}
        url={overlay.url}
      />
    );
  }

  return null;
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
