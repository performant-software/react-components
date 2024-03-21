// @flow

import { MapStyles } from '@performant-software/geospatial';
import { GeoJSONLayer, RasterLayer } from '@peripleo/maplibre';
import React from 'react';
import _ from 'underscore';
import type { Layer as LayerType } from '../types/RuntimeConfig';

interface OverlayLayerProps {
  overlay: Layer;
}

const OverlayLayer = (props: OverlayLayerProps) => {
  const { overlay } = props;

  if (overlay.layer_type === 'geojson') {
    return (
      <GeoJSONLayer
        id={overlay.name}
        data={overlay.url}
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

  return null;
};

type Props = {
  overlays: Array<LayerType>
};

const OverlayLayers = (props: Props) => (
  _.map(props.overlays, (overlay: any) => <OverlayLayer overlay={overlay} />)
);

export default OverlayLayers;
