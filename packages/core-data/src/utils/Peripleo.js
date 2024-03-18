// @flow

import _ from 'underscore';
import type { RuntimeConfig } from '../types/RuntimeConfig';

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

export default {
  filterLayers,
  normalize
};
