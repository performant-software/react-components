// @flow

import Api from '../utils/Api';

class BaseService {
  /**
   * Constructs a new BaseService object. This constructor should never be used directly.
   */
  constructor() {
    if (this.constructor === BaseService) {
      throw new TypeError('Abstract class "BaseService" cannot be instantiated directly.');
    }
  }

  /**
   * Calls the GET /core_data/public/<route>/:id API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchOne(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildUrl(baseUrl, this.getRoute(), id, projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/events API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedEvents(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'events', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/items API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedItems(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'items', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/manifests API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedManifests(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'manifests', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/media_contents API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedMedia(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'media_contents', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/organizations API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedOrganizations(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'organizations', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/people API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedPeople(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'people', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/places API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedPlaces(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'places', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<route>/:id/taxonomies API endpoint.
   *
   * @param baseUrl
   * @param id
   * @param projectIds
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedTaxonomies(baseUrl, id, projectIds, params = {}) {
    const url = Api.buildNestedUrl(baseUrl, this.getRoute(), id, 'taxonomies', projectIds, params);
    return fetch(url).then((response) => response.json());
  }

  // protected

  getRoute() {
    // Implemented in sub-classes
  }
}

export default BaseService;
