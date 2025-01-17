// @flow

import { Map as MapUtils } from '@performant-software/geospatial';
import { feature, featureCollection, point } from '@turf/turf';
import { history } from 'instantsearch.js/es/lib/routers';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';
import _ from 'underscore';
import type { TypesenseSearchResult } from '../types/typesense/SearchResult';

type TypesenseConfig = {
  api_key: string,
  host: string,
  index_name: string,
  limit: number,
  port: number,
  protocol: string,
  query_by: string,
  sort_by: string,
  exclude_fields: string
};

const ATTRIBUTE_DELIMITER = '.';
const SUFFIX_FACET = '_facet';

const createCachedHits = (hits: Array<TypesenseSearchResult>) => {
  const ids = new Set(hits.map((h) => h.uuid));

  // De-duplication: drop all hits that are already in the list, append the rest
  const merge = (toMerge: Array<TypesenseSearchResult>) => {
    const toAppend = toMerge.filter((h) => !ids.has(h.uuid));
    return createCachedHits([...hits, ...toAppend]);
  };

  return { hits, merge };
};

const createRouting = (config: TypesenseConfig) => ({
  router: history({
    cleanUrlOnDispose: false
  }),
  stateMapping: {
    stateToRoute: (state: any) => {
      const uiState = state[config.index_name] || {};
      const { range, refinementList } = uiState;

      let route = {
        q: uiState.query
      };

      if (refinementList) {
        route = {
          ...route,
          ...refinementList
        };
      }

      if (range) {
        route = {
          ...route,
          ...range
        };
      }

      return route;
    },

    routeToState: (state: any) => {
      const { q, event_range_facet: eventRangeFacet, ...facets } = state;

      const uiState = {
        [config.index_name]: {
          query: q,
        }
      };

      if (Object.keys(facets).length > 0) {
        uiState[config.index_name].refinementList = facets;
      }

      if (eventRangeFacet) {
        uiState[config.index_name].range = { event_range_facet: eventRangeFacet };
      }

      return uiState;
    }
  }
});

const createTypesenseAdapter = (config: TypesenseConfig, options = {}) => (
  new TypesenseInstantsearchAdapter({
    server: {
      apiKey: config.api_key,
      nodes: [
        {
          host: config.host,
          port: config.port || 443,
          protocol: config.protocol || 'https'
        }
      ],
      cacheSearchResultsForSeconds: 120
    },
    geoLocationField: 'coordinates',
    additionalSearchParameters: {
      query_by: config.query_by,
      limit: config.limit || 250,
      sort_by: config.sort_by,
      exclude_fields: config.exclude_fields
    },
    ...options
  })
);

/**
 * Takes a <relationship-uuid>.<field-uuid>_facet formatted attribute and returns the parsed field UUID.
 *
 * @param attribute
 */
const getFieldId = (attribute: string) => {
  if (!attribute) {
    return '';
  }

  let value = attribute.replaceAll(SUFFIX_FACET, '');
  if (value.includes(ATTRIBUTE_DELIMITER)) {
    value = value.substring(value.indexOf(ATTRIBUTE_DELIMITER) + 1, value.length);
  }

  return value;
};

/**
 * Takes a <relationship-uuid>.<field-uuid>_facet formatted attribute and returns the parsed relationship UUID.
 *
 * @param attribute
 */
const getRelationshipId = (attribute: string) => {
  if (!(attribute && attribute.includes(ATTRIBUTE_DELIMITER))) {
    return '';
  }

  return attribute
    .replace(SUFFIX_FACET, '')
    .substring(0, attribute.indexOf(ATTRIBUTE_DELIMITER));
};

/**
 * Necessary normalization steps to make the TypeSense result work
 * for visualization. Currently, these include:
 *
 * - Removing places without coordinates
 */
const normalizeResults = (results: Array<TypesenseSearchResult>) => (
  results.filter((h) => MapUtils.validateCoordinates(h.coordinates))
);

/**
 * Returns the passed Typesense search result as a GeoJSON feature.
 *
 * @param result
 * @param polygons
 *
 * @returns {*}
 */
const toFeature = (result: any, polygons?: boolean) => {
  const properties = {
    id: result.record_id,
    ccode: [],
    title: result.name,
    uuid: result.uuid,
    record_id: result.record_id,
    name: result.name,
    names: result.names.map((toponym: string) => ({ toponym })),
    type: result.type
  };

  const id = parseInt(result.record_id, 10);

  if (polygons) {
    return feature(result.geometry, properties, { id });
  }

  if (result.coordinates) {
    const coordinates = result.coordinates.slice().reverse();
    return point(coordinates, properties, { id });
  }

  return feature(result.geometry, properties, { id });
};

/**
 * Returns the passed array of Typesense search results as a GeoJSON feature collection.
 *
 * @param results
 * @param polygons
 *
 * @returns {FeatureCollection<Geometry, Properties>}
 */
const toFeatureCollection = (results: Array<any>, polygons?: boolean) => (
  featureCollection(_.map(results, (result) => toFeature(result, polygons)))
);

export default {
  createCachedHits,
  createRouting,
  createTypesenseAdapter,
  getFieldId,
  getRelationshipId,
  normalizeResults,
  toFeature,
  toFeatureCollection
};
