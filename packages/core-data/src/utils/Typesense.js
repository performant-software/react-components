// @flow

import { history } from 'instantsearch.js/es/lib/routers';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';
import type { RuntimeConfig } from '../types/RuntimeConfig';
import type { TypesenseSearchResult } from '../types/typesense/SearchResult';

const createCachedHits = (hits: TypesenseSearchResult[]) => {
  const ids = new Set(hits.map((h) => h.uuid));

  // De-duplication: drop all hits that are already in the list, append the rest
  const merge = (toMerge: TypesenseSearchResult[]) => {
    const toAppend = toMerge.filter((h) => !ids.has(h.uuid));
    return createCachedHits([...hits, ...toAppend]);
  };

  return { hits, merge };
};

const createRouting = (config: RuntimeConfig) => ({
  router: history({
    cleanUrlOnDispose: false
  }),
  stateMapping: {
    stateToRoute: (state: any) => {
      const uiState = state[config.typesense.index_name];
      const { refinementList } = uiState;

      let route = {
        q: uiState.query
      };

      if (refinementList) {
        route = {
          ...route,
          ...refinementList
        };
      }

      return route;
    },

    routeToState: (state: any) => {
      const { q, ...facets } = state;

      const uiState = {
        [config.typesense.index_name]: {
          query: q,
        }
      };

      if (Object.keys(facets).length > 0) {
        uiState[config.typesense.index_name].refinementList = facets;
      }

      return uiState;
    }
  }
});

const createTypesenseAdapter = (config: RuntimeConfig, options = {}) => (
  new TypesenseInstantsearchAdapter({
    server: {
      apiKey: config.typesense.api_key,
      nodes: [
        {
          host: config.typesense.host,
          port: config.typesense.port || 443,
          protocol: config.typesense.protocol || 'https'
        }
      ],
      cacheSearchResultsForSeconds: 120
    },
    geoLocationField: 'coordinates',
    additionalSearchParameters: {
      query_by: config.typesense.query_by,
      limit: config.typesense.limit || 250
    },
    ...options
  })
);

/**
 * Necessary normalization steps to make the TypeSense result work
 * for visualization. Currently, these include:
 *
 * - Removing places without coordinates
 */
const normalizeResults = (results: Array<TypesenseSearchResult>) => results.filter((h) => h.coordinates);

const toFeature = (result: TypesenseSearchResult) => ({
  id: parseInt(result.record_id, 10),
  type: 'Feature',
  properties: {
    id: result.record_id,
    ccode: [],
    title: result.name,
    uuid: result.uuid,
    record_id: result.record_id,
    name: result.name,
    names: result.names.map((toponym: string) => ({ toponym })),
    type: result.type
  },
  geometry: {
    type: 'Point',
    coordinates: result.coordinates.slice().reverse()
  }
});

export default {
  createCachedHits,
  createRouting,
  createTypesenseAdapter,
  normalizeResults,
  toFeature
};
