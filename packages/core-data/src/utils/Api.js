// @flow

/**
 * Builds a fully qualified nested URL for the passed base URL and route.
 *
 * @param baseUrl
 * @param route
 * @param id
 * @param nested
 * @param searchParams
 *
 * @returns {`${string}?${string}`}
 */
const buildNestedUrl = (baseUrl, route, id, nested, searchParams = {}) => {
  const url = `${baseUrl}/core_data/public/v1/${route}/${id}/${nested}`;
  const params = new URLSearchParams(searchParams);

  return `${url}?${params}`;
};

/**
 * Builds a fully qualified URL for the passed base URL and route.
 *
 * @param baseUrl
 * @param route
 * @param id
 * @param searchParams
 *
 * @returns {`${string}?${string}`}
 */
const buildUrl = (baseUrl, route, id, searchParams = {}) => {
  const url = `${baseUrl}/core_data/public/v1/${route}/${id}`;
  const params = new URLSearchParams(searchParams);

  return `${url}?${params}`;
};

export default {
  buildNestedUrl,
  buildUrl
};
