// @flow

import React from 'react';
import { MapStyles, WarpedImageLayerPeripleo as WarpedImageLayer } from '@performant-software/geospatial';
import { GeoJSONLayer, RasterLayer } from '@peripleo/maplibre';
import type { Layer } from '../types/RuntimeConfig.js';

type OverlayLayerProps = {
  /**
   * The overlay layer to render.
   */
  overlay: Layer;
  /**
   * Optional ID to order the layer before
   */
  beforeId?: string;
  /**
   * Optional attribution string, rendered as HTML
   */
  attribution?: string;
};

/**
 * This component renders a GeoJSONLayer or RasterLayer component depending on the `layer_type` of the passed `overlay`.
 */
const OverlayLayer = (props: OverlayLayerProps) => {
  const { overlay, beforeId, attribution } = props;

  if (overlay.layer_type === 'geojson') {
    return (
      <GeoJSONLayer
        attribution={attribution}
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
        attribution={attribution}
        id={overlay.name}
        url={overlay.url}
        beforeId={beforeId}
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

export default OverlayLayer;