// @flow

import Api from '../utils/Api';

/**
 * Calls the GET /core_data/public/places/:id API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 * @returns {Promise<any>}
 */
const fetchOne = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildUrl(baseUrl, 'places', id, projectIds, params);
  return fetch(url).then((response) => response.json());
};

/**
 * Calls the GET /core_data/public/places/:id/media_contents API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 *
 * @returns {Promise<any>}
 */
const fetchRelatedMedia = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildNestedUrl(baseUrl, 'places', id, 'media_contents', projectIds, params);
  return fetch(url).then((response) => response.json());
};

/**
 * Calls the GET /core_data/public/places/:id/organizations API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 *
 * @returns {Promise<any>}
 */
const fetchRelatedOrganizations = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildNestedUrl(baseUrl, 'places', id, 'organizations', projectIds, params);
  return fetch(url).then((response) => response.json());
};

/**
 * Calls the GET /core_data/public/places/:id/people API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 *
 * @returns {Promise<any>}
 */
const fetchRelatedPeople = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildNestedUrl(baseUrl, 'places', id, 'people', projectIds, params);
  return fetch(url).then((response) => response.json());
};

/**
 * Calls the GET /core_data/public/places/:id/places API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 *
 * @returns {Promise<any>}
 */
const fetchRelatedPlaces = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildNestedUrl(baseUrl, 'places', id, 'places', projectIds, params);
  return fetch(url).then((response) => response.json());
};

/**
 * Calls the GET /core_data/public/places/:id/taxonomies API endpoint.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 * @param params
 *
 * @returns {Promise<any>}
 */
const fetchRelatedTaxonomies = (baseUrl, id, projectIds, params = {}) => {
  const url = Api.buildNestedUrl(baseUrl, 'places', id, 'taxonomies', projectIds, params);
  return fetch(url).then((response) => response.json());
};

export default {
  fetchOne,
  fetchRelatedMedia,
  fetchRelatedOrganizations,
  fetchRelatedPeople,
  fetchRelatedPlaces,
  fetchRelatedTaxonomies
};
