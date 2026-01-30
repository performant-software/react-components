// @flow

import { ObjectJs as ObjectUtils } from '@performant-software/shared-components';
import { Map as MapUtils } from '@performant-software/geospatial';
import { feature, featureCollection, truncate } from '@turf/turf';
import { history } from 'instantsearch.js/es/lib/routers';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';
import _ from 'underscore';
import type { Event as EventType } from '../types/Event';
import type { TypesenseSearchResult } from '../types/typesense/SearchResult';

type Options = {
  geometries: {
    [uuid: string]: any
  },
  type?: string
};

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

// periods of time in milliseconds
const ONE_SECOND = 1000;

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
          query: q
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
      cacheSearchResultsForSeconds: 120,
      connectionTimeoutSeconds: config.connection_timeout,
      timeoutSeconds: config.timeout
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
 * Returns passed event's start date as a JavaScript Date object.
 *
 * @param event
 *
 * @returns {*|false|Date}
 */
const getDate = (event: EventType) => {
  const date = (!_.isEmpty(event.start_date) && event.start_date[0])
    || (!_.isEmpty(event.end_date) && event.end_date[0]);

  if (_.isNumber(date)) {
    // Typesense date is a Unix timestamp, which is in seconds, so convert to ms
    const jsDate = new Date(date * ONE_SECOND);
    // prevent timezone errors by just using year, month, date
    return new Date(
      jsDate.getUTCFullYear(),
      jsDate.getUTCMonth(),
      jsDate.getUTCDate()
    );
  }

  return date;
};

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
 * Returns the geometry object for the passed place/path.
 *
 * @param place
 * @param path
 *
 * @returns {*}
 */
const getGeometry = (place, path) => {
  return _.get(place, path);
};

/**
 * Returns the geometry URL for the passed place.
 *
 * @param place
 * @param hash
 *
 * @returns {*}
 */
const getGeometryUrl = (place, hash) => {
  const object = hash[place?.uuid];
  return object?.url;
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
 * Returns the passed Typesense search result as a GeoJSON feature.
 *
 * @param record
 * @param item
 * @param geometry
 *
 * @returns {Feature<*, {ccode: [], record_id: *, names: *, name: *, id: *, title: *, type: *, uuid: *, items: [*]}>}
 *
 * @deprecated
 */
const toFeature = (record: any, item: any, geometry: any) => {
  const properties = {
    id: record.record_id,
    ccode: [],
    title: record.name,
    uuid: record.uuid,
    record_id: record.record_id,
    name: record.name,
    names: record.names?.map((toponym: string) => ({ toponym })),
    type: record.type,
    items: [item],
    url: record.url,
    layerId: record.layerId
  };

  const id = parseInt(record.record_id, 10);
  return feature(geometry, properties, { id });
};

/**
 * Returns the passed array of Typesense search results as a GeoJSON feature collection.
 *
 * @param results
 * @param path
 * @param options
 *
 * @returns {FeatureCollection<Geometry, Properties>}
 *
 * @deprecated
 */
const toFeatureCollection = (results: Array<any>, path: string, options: Options = {}) => {
  const features = [];

  const objectPath = path.substring(0, path.lastIndexOf(ATTRIBUTE_DELIMITER));
  const geometryPath = path.substring(path.lastIndexOf(ATTRIBUTE_DELIMITER) + 1, path.length);

  _.each(results, (result) => {
    let geometryObjects = _.isEmpty(objectPath) ? result : ObjectUtils.getNestedValue(result, objectPath);

    if (!_.isArray(geometryObjects)) {
      geometryObjects = [geometryObjects];
    }

    _.each(geometryObjects, (geometryObject) => {
      const geometry = _.get(geometryObject, geometryPath);

      const include = geometry && (!options.type || geometry.type === options.type);

      if (include) {
        const record = _.find(features, (f) => f.properties?.uuid === geometryObject.uuid);

        let trimmedResult = result;

        const relatedRecords = _.get(result, objectPath);

        if (relatedRecords) {
          trimmedResult = ObjectUtils.setNestedValue(
            result,
            objectPath,
            relatedRecords.map((obj) => ({
              ...obj,
              geometry: undefined
            }))
          );

          trimmedResult._rawTypesenseHit = undefined;
          trimmedResult._snippetResult = undefined;
          trimmedResult._highlightResult = undefined;
        }

        if (record) {
          record.properties?.items.push(trimmedResult);
        } else {
          features.push(toFeature(geometryObject, trimmedResult, geometry));
        }
      }
    });
  });

  return featureCollection(features);
};

/**
 * Returns a set of GeoJSON features for the passed results.
 *
 * @param features
 * @param results
 * @param path
 * @param options
 *
 * @returns {*}
 */
const getFeatures = (features, results, path, options = {}) => {
  const newFeatures = [...features];

  const objectPath = path.substring(0, path.lastIndexOf(ATTRIBUTE_DELIMITER));
  const geometryPath = path.substring(path.lastIndexOf(ATTRIBUTE_DELIMITER) + 1, path.length);

  const placeIds = [];
  const recordIds = [];

  _.each(results, (result) => {
    recordIds.push(result.uuid);

    const places = _.isEmpty(objectPath) ? [result] : ObjectUtils.getNestedValue(result, objectPath);

    _.each(places, (place) => {
      placeIds.push(place.uuid);

      let geometry;
      let geometryUrl;
      let layerId;

      if (options.geometries) {
        geometryUrl = getGeometryUrl(place, options.geometries);
      } else {
        geometry = getGeometry(place, geometryPath);
      }

      const include = geometryUrl || (geometry && (!options.type || geometry.type === options.type));

      if (include) {
        const record = _.find(newFeatures, (f) => f.properties?.uuid === place.uuid);
        const trimmedResult = trimResult(result, objectPath);

        if (record) {
          const item = _.find(record.properties?.items, (item) => item.uuid === trimmedResult.uuid);

          if (!item) {
            record.properties?.items.push(trimmedResult);
          }
        } else {
          newFeatures.push(MapUtils.toFeature({ ...place, layerId, url: geometryUrl }, trimmedResult, geometry));
        }
      }
    });
  });

  return _.map(newFeatures, (feature) => ({
    ...feature,
    properties: {
      ...feature.properties,
      visible: placeIds.includes(feature.properties.uuid),
      items: _.filter(feature.properties.items, (item) => recordIds.includes(item.uuid))
    }
  }));
};

/**
 * Trims the Typesense document to only include data needed for map visualizations.
 *
 * @param result
 *
 * @returns {*}
 */
const trimResult = (result) => _.pick(result, 'id', 'uuid', 'record_id', 'name', 'names');

export default {
  createCachedHits,
  createRouting,
  createTypesenseAdapter,
  getDate,
  getFeatures,
  getFieldId,
  getRelationshipId,
  toFeature,
  toFeatureCollection
};
