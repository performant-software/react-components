// @flow

import Api from '../utils/Api';

class BaseService {
  /**
   * Constructs a new BaseService object. This constructor should never be used directly.
   */
  constructor(baseUrl, projectIds) {
    if (this.constructor === BaseService) {
      throw new TypeError('Abstract class "BaseService" cannot be instantiated directly.');
    }

    this.baseUrl = baseUrl;
    this.projectIds = projectIds;
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchOne(id, params = {}) {
    const url = Api.buildUrl(this.baseUrl, this.getRoute(), id, this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/events API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedEvents(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'events', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/instances API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedInstances(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'instances', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/items API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedItems(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'items', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/manifests API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedManifests(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'manifests', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/media_contents API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedMedia(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'media_contents', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/organizations API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedOrganizations(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'organizations', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/people API endpoint.
   *
   * @param id
   * @param params
   * @returns {Promise<any>}
   */
  fetchRelatedPeople(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'people', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/places API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedPlaces(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'places', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/taxonomies API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedTaxonomies(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'taxonomies', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  /**
   * Calls the GET /core_data/public/<version>/<route>/:id/works API endpoint.
   *
   * @param id
   * @param params
   *
   * @returns {Promise<any>}
   */
  fetchRelatedWorks(id, params = {}) {
    const url = Api.buildNestedUrl(this.baseUrl, this.getRoute(), id, 'works', this.getSearchParams(params));
    return fetch(url).then((response) => response.json());
  }

  // protected

  getRoute() {
    // Implemented in sub-classes
  }

  /**
   * Returns the search params for the current request.
   *
   * @param params
   *
   * @returns {*&{project_ids}}
   */
  getSearchParams(params) {
    return {
      project_ids: this.projectIds,
      ...params
    };
  }
}

export default BaseService;
