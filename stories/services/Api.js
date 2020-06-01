import _ from 'underscore';

const SORT_DESCENDING = 'descending';

/**
 * TODO: Comment me
 *
 * @param items
 * @param page
 * @param search
 * @param sort_by
 * @param sort_direction
 * @param perPage
 *
 * @returns {Promise<unknown>}
 */
export const onLoad = ({ items, page, search, sort_by, sort_direction, perPage }) => {
  let payload = [...items];

  // Apply search filter
  if (search && search.length) {
    payload = _.filter(payload, (item) => {
      let match = false;

      _.each(_.keys(item), (key) => {
        if (item[key] && item[key].toString().toLowerCase().startsWith(search.toLowerCase())) {
          match = true;
        }
      });

      return match;
    });
  }

  // Apply sort
  if (sort_by && sort_by.length) {
    payload = _.sortBy(payload, (item) => item[sort_by]);

    if (sort_direction && sort_direction === SORT_DESCENDING) {
      payload = payload.reverse();
    }
  }

  // Apply pagination
  let pages = 0;

  if (page && perPage) {
    pages = Math.floor((payload.length / perPage) || 1);

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + (perPage - 1);

    payload = payload.slice(startIndex, endIndex);
  }

  const response = {
    data: {
      items: payload,
      list: {
        pages
      }
    }
  };

  return new Promise((resolve) => resolve(response));
};

/**
 *
 *
 * @returns {Promise<unknown>}
 */
export const onLoadEmpty = () => {
  const response = { data: { items: [], list: { pages: 1 } } };
  return new Promise((resolve) => resolve(response));
};

export default {
  onLoad,
  onLoadEmpty
};
