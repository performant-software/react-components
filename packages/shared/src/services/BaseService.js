// @flow

import axios, { type AxiosResponse } from 'axios';

/**
 * Base class for making API calls. This class uses Axios under the hood and a customizable transform class for
 * PUT/POST requests.
 */
class BaseService {
  axios: typeof axios;

  /**
   * Allows for static configuration of the axios object.
   *
   * @param callback
   */
  static configure(callback: (axios) => void) {
    callback(axios);
  }

  /**
   * Constructs a new BaseService object. This constructor should never be used directly.
   *
   * @param axiosInstance
   */
  constructor(axiosInstance?: typeof axios) {
    this.axios = axiosInstance || axios;
  }

  /**
   * Calls the POST /api/<resource>/ endpoint with the passed item.
   *
   * @param item
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  create(item: any): Promise<AxiosResponse> {
    const transform = this.getTransform();
    return this.axios.post(this.getBaseUrl(), transform.toPayload(item), this.getConfig());
  }

  /**
   * Calls the DELETE /api/<resource>/:id endpoint for the passed item.
   *
   * @param item
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  delete(item: any) {
    return this.axios.delete(`${this.getBaseUrl()}/${item.id}`);
  }

  /**
   * Calls the GET /api/<resource>/ endpoint.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  fetchAll(params: any) {
    return this.axios.get(this.getBaseUrl(), { params });
  }

  /**
   * Calls the GET /api/<resource>/:id endpoint.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  fetchOne(id: number) {
    return this.axios.get(`${this.getBaseUrl()}/${id}`);
  }

  /**
   * Calls the create/update API endpoint for the passed item.
   *
   * @param item
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  save(item: any) {
    return item.id ? this.update(item) : this.create(item);
  }

  /**
   * Calls the POST /api/<resource>/search endpoint.
   *
   * @param params
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  search(params: any) {
    return this.axios.post(`${this.getBaseUrl()}/search`, params);
  }

  /**
   * Calls the PUT /api/<resource>/:id endpoint with the passed item.
   *
   * @param item
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  update(item: any) {
    const transform = this.getTransform();
    return this.axios.put(`${this.getBaseUrl()}/${item.id}`, transform.toPayload(item), this.getConfig());
  }

  // protected

  /**
   * Returns the API base URL string.
   */
  getBaseUrl(): string {
    // Implemented in concrete classes.
    return '';
  }

  /**
   * Returns the config properties for POST/PUT requests.
   *
   * @returns {null}
   */
  getConfig() {
    // Implemented in concrete classes
    return null;
  }

  /**
   * Returns the transform object. This class will be used to generate the object sent on POST/PUT requests.
   */
  getTransform() {
    // Implemented in concrete classes.
    return {};
  }
}

export default BaseService;
