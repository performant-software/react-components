// @flow

import _ from 'underscore';

/**
 * Builds a fully qualified nested URL for the passed base URL and route.
 *
 * @param baseUrl
 * @param route
 * @param id
 * @param nested
 * @params projectIds
 * @param searchParams
 *
 * @returns {`${string}?${string}`}
 */
const buildNestedUrl = (baseUrl, route, id, nested, projectIds = [], searchParams = {}) => {
  const url = `${baseUrl}/core_data/public/v1/${route}/${id}/${nested}`;
  const params = new URLSearchParams(searchParams);

  // Append project IDs
  _.each(projectIds, (projectId) => {
    params.append('project_ids[]', projectId);
  });

  return `${url}?${params}`;
};

/**
 * Builds a fully qualified URL for the passed base URL and route.
 *
 * @param baseUrl
 * @param route
 * @param id
 * @param projectIds
 * @param searchParams
 *
 * @returns {`${string}?${string}`}
 */
const buildUrl = (baseUrl, route, id, projectIds = [], searchParams = {}) => {
  let url = `${baseUrl}/core_data/public/v1/${route}`;

  // Append the ID to the URL if provided
  if (id) {
    url = `${url}/${id}`;
  }

  // Create the search params
  const params = new URLSearchParams(searchParams);

  // Append each project ID
  _.each(projectIds, (projectId) => {
    params.append('project_ids[]', projectId);
  });

  return `${url}?${params}`;
};

export default {
  buildNestedUrl,
  buildUrl
};
