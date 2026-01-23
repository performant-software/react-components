// @flow

import React, { type ReactNode, useEffect, useState } from 'react';
import { Map } from 'maplibre-gl';
import {
  HoverTooltip,
  removeLayerIfExists,
  removeSourceIfExists,
  useLoadedMap
} from '@peripleo/maplibre';
import MapStyles from '../utils/MapStyles';

type Props = {

  cluster?: boolean,

  clusterMaxZoom?: number,

  clusterMinPoints?: number,

  clusterProperties?: any,

  clusterRadius?: number,

  data: any,

  fillStyle?: Object,

  id: string,

  interactive?: boolean,

  pointStyle?: Object,

  tooltip?: (hoverState: any) => ReactNode,

  strokeStyle?: Object,

  visible?: boolean,

  onLoad?: () => void

};

const setStyle = (map: typeof Map, layerId: string, style: any) => {
  if (!map) return;

  Object
    .entries(style.paint)
    .forEach(([key, value]) =>
      map.setPaintProperty(layerId, key, value));
};

const GeoJSONLayerTest = (props: Props) => {

  const { id, data } = props;

  const visible = props.visible === undefined ? true : props.visible;

  const fillStyle = props.fillStyle || MapStyles.fill;

  const strokeStyle = props.strokeStyle || MapStyles.stroke;

  const pointStyle = props.pointStyle || MapStyles.point;

  const map = useLoadedMap();

  const [sourceId, setSourceId] = useState();

  useEffect(() => {
    if (map) {
      const layerIds = new Set(map.getStyle().layers.map(l => l.id));

      if (layerIds.has(`layer-${props.id}-fill`)) {
        map.setLayoutProperty(`layer-${props.id}-fill`, 'visibility', visible ? 'visible' : 'none');
      }

      if (layerIds.has(`layer-${props.id}-line`)) {
        map.setLayoutProperty(`layer-${props.id}-fill`, 'visibility', visible ? 'visible' : 'none');
      }

      if (layerIds.has(`layer-${props.id}-point`)) {
        map.setLayoutProperty(`layer-${props.id}-fill`, 'visibility', visible ? 'visible' : 'none');
      }
    }
  }, [visible, map]);

  useEffect(() => {
    if (!map) return;

    const sourceId = `source-${id}`;

    map.addSource(sourceId, {
      type: 'geojson',
      // @ts-ignore
      data,
      // Note that mapLibre checks by key, and will fail if cluster args
      // are undefined. Therefore we need to add on demand.
      ...(props.cluster && { cluster: true }),
      ...(props.clusterRadius !== undefined && { clusterRadius: props.clusterRadius }),
      ...(props.clusterMaxZoom !== undefined && { clusterMaxZoom: props.clusterMaxZoom }),
      ...(props.clusterMinPoints !== undefined && { clusterMinPoints: props.clusterMinPoints }),
      ...(props.clusterProperties !== undefined && { clusterProperties: props.clusterProperties })
    });

    // Map emits 'IDLE' event when the source is fully loaded
    if (props.onLoad)
      map.once('idle', () => props.onLoad());

    if (!props.cluster) {
      map.addLayer({
        id: `layer-${id}-fill`,
        ...fillStyle,
        source: `source-${id}`,
        filter: ['!=', '$type', 'Point'],
        metadata: {
          interactive: props.interactive
        }
      });

      map.addLayer({
        id: `layer-${id}-line`,
        ...strokeStyle,
        source: `source-${id}`,
        filter: ['!=', '$type', 'Point']
      });
    }

    map.addLayer({
      id: `layer-${id}-point`,
      ...pointStyle,
      filter: ['==', '$type', 'Point'],
      source: `source-${id}`,
      metadata: {
        interactive: props.interactive
      }
    });

    setSourceId(sourceId);

    setTimeout(() => map.moveLayer(`layer-${id}-point`), 10);

    return () => {
      removeLayerIfExists(map, `layer-${id}-point`);
      removeLayerIfExists(map, `layer-${id}-line`);
      removeLayerIfExists(map, `layer-${id}-fill`);

      removeSourceIfExists(map, sourceId);
    };
  }, [map]);

  useEffect(() => {
    if (!sourceId) return;

    // @ts-ignore
    map.getSource(sourceId).setData(data);
  }, [sourceId, data]);

  useEffect(() => {
    if (!props.cluster)
      setStyle(map, `layer-${id}-fill`, props.fillStyle|| MapStyles.fill);
  }, [props.fillStyle, props.cluster]);

  useEffect(() => {
    if (!props.cluster)
      setStyle(map, `layer-${id}-line`, props.strokeStyle|| MapStyles.stroke);
  }, [props.strokeStyle, props.cluster]);

  useEffect(() => {
    setStyle(map, `layer-${id}-point`, props.pointStyle|| MapStyles.point);
  }, [props.pointStyle]);

  return props.tooltip ? (
    <HoverTooltip
      layerId={[`layer-${id}-point`, `layer-${id}-fill`]}
      tooltip={props.tooltip} />
  ) : null;

};

export default GeoJSONLayerTest;