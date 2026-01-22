// @flow

import { ObjectJs as ObjectUtils } from '@performant-software/shared-components';
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
    items: [item]
  };

  const id = parseInt(record.record_id, 10);
  const data = feature(geometry, properties, { id });

  return truncate(data, { precision: 3, coordinates: 2 });
};

/**
 * Returns the passed array of Typesense search results as a GeoJSON feature collection.
 *
 * @param results
 * @param path
 * @param options
 *
 * @returns {FeatureCollection<Geometry, Properties>}
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
      let geometry;
      let transform = false;

      // TODO: Comment me!
      if (options.geometries) { // TODO: Check for empty
        const object = options.geometries[geometryObject?.uuid];
        geometry = object?.geometry;
      } else {
        geometry = _.get(geometryObject, geometryPath);
        transform = true;
      }

      const include = geometry && (!options.type || geometry.type === options.type);

      if (include) {
        const record = _.find(features, (f) => f.properties?.uuid === geometryObject.uuid);

        let trimmedResult = result;

        const relatedRecords = _.get(result, objectPath);

        if (relatedRecords && transform) {
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

const getFeatures = (features, results, path, options) => {
  const newFeatures = [...features];

  const objectPath = path.substring(0, path.lastIndexOf(ATTRIBUTE_DELIMITER));
  const geometryPath = path.substring(path.lastIndexOf(ATTRIBUTE_DELIMITER) + 1, path.length);

  // TODO: How to remove items that are no longer in the results?
  const placeIds = [];
  const recordIds = [];

  _.each(results, (result) => {
    recordIds.push(result.uuid);

    const places = _.isEmpty(objectPath) ? result : ObjectUtils.getNestedValue(result, objectPath);

    _.each(places, (place) => {
      placeIds.push(place.uuid);

      let geometry;

      if (options.geometries) {
        geometry = getGeometryByHash(place, options.geometries);
      } else {
        geometry = getGeometryByPath(place, geometryPath);
      }

      const include = geometry && (!options.type || geometry.type === options.type);

      if (include) {
        const trimmedResult = trimResult(result, objectPath);

        const record = _.find(newFeatures, (f) => f.properties?.uuid === place.uuid);

        if (record) {
          record.properties?.items.push(trimmedResult);
        } else {
          newFeatures.push(toFeature(place, trimmedResult, geometry));
        }
      }
    });
  });

  return _.chain(newFeatures)
    .filter((feature) => placeIds.includes(feature.properties.uuid))
    .map((feature) => ({
      ...feature,
      properties: {
        ...feature.properties,
        items: _.filter(feature.properties.items, (item) => recordIds.includes(item.uuid))
      }
    }))
    .value();
};

const createFeatureCollection = (features) => featureCollection(features);

const getGeometryByPath = (place, path) => {
  return _.get(place, path);
};

const getGeometryByHash = (place, hash) => {
  const object = hash[place?.uuid];
  return object?.geometry;
};

const trimResult = (result, objectPath) => {
  let value = { ...result };

  const relatedRecords = _.get(result, objectPath);

  if (relatedRecords) {
    const trimmedPlaces = _.map(relatedRecords, (r) => ({ ...r, geometry: undefined }));
    value = ObjectUtils.setNestedValue(value, objectPath, trimmedPlaces);
  }

  value._rawTypesenseHit = undefined;
  value._snippetResult = undefined;
  value._highlightResult = undefined;

  return value;
};

export default {
  createCachedHits,
  createFeatureCollection,
  createRouting,
  createTypesenseAdapter,
  getDate,
  getFeatures,
  getFieldId,
  getRelationshipId,
  toFeature,
  toFeatureCollection
};
