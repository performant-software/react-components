// @flow

/**
 * Returns the place record for the passed UUID from the Core Data API and converts the response to JSON.
 *
 * @param baseUrl
 * @param id
 * @param projectIds
 *
 * @returns {Promise<any>}
 */
const fetchPlace = (baseUrl, id, projectIds) => {
  const url = `${baseUrl}/core_data/public/places/${id}?project_ids=${projectIds}`;
  const params = new URLSearchParams({ project_ids: projectIds });

  return fetch(`${url}?${params}`).then((response) => response.json());
};

export default {
  fetchPlace
};
