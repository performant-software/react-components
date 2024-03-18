// @flow

import _ from 'underscore';
import type { Layer as LayerType, RuntimeConfig } from '../types/RuntimeConfig';

/**
 * Moves the layers into separate base layers and data layers.
 *
 * @param config
 *
 * @returns *
 */
const filterLayers = (config: RuntimeConfig) => {
  const baseLayers = _.filter(config.layers, (l) => !l.loverlay);
  const dataLayers = _.filter(config.layers, (l) => l.overlay);

  return { ...config, baseLayers, dataLayers };
};

/**
 * Normalizes the passed runtime config.
 *
 * @param config
 *
 * @returns *
 */
const normalize = (config: RuntimeConfig) => ({
  ...config,
  layers: config.layers || [],
  typesense: {
    ...config.typesense,
    host: config.typesense.host || '443',
    protocol: config.typesense.protocol || 'https'
  },
  core_data: {
    ...config.core_data,

    // Remove trailing slash if any
    url: config.core_data.url.endsWith('/')
      ? config.core_data.url.substring(0, config.core_data.url.length - 1)
      : config.core_data.url,

    project_ids: Array.isArray(config.core_data.project_ids)
      ? config.core_data.project_ids
      : [config.core_data.project_ids]
  }
});

/**
 * Exports the passed layer as a MaxBox layer style.
 *
 * @param config
 * @param id
 *
 * @returns *
 */
const toLayerStyle = (config: LayerType, id: string) => {
  if (config.layer_type === 'vector') {
    // Assumes MapBox-compatible style URL
    return config.url;
  }

  if (config.layer_type === 'raster') {
    return {
      version: 8,
      sources: {
        [id]: {
          type: 'raster',
          tiles: [config.url],
          tileSize: config.tilesize || 256
        }
      },
      layers: [{
        id,
        type: 'raster',
        source: id,
        minzoom: config.minzoom || 0,
        maxzoom: config.maxzoom || 22
      }]
    };
  }

  throw new Error(`Unsupported baselayer type: ${config.layer_type}`);
};

export default {
  filterLayers,
  normalize,
  toLayerStyle
};
