// @flow

import React from 'react';
import { MapStyles, WarpedImageLayerPeripleo as WarpedImageLayer } from '@performant-software/geospatial';
import { GeoJSONLayer, RasterLayer } from '@peripleo/maplibre';
import type { Layer } from '../types/RuntimeConfig.js';

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

export default OverlayLayer;