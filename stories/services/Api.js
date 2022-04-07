// @flow

import _ from 'underscore';

type OnLoadType = {
  items: Array<any>,
  page?: number,
  per_page?: number,
  search?: string,
  sort_by?: string,
  sort_direction?: string
};

type OnNestedLoadType = {
  items: Array<any>,
  parentId: number,
  parentKey: string,
  search: string
};

const SORT_DESCENDING = 'descending';

/**
 * Mocks returning the data from an API call for a collection of records.
 *
 * @param items
 * @param page
 * @param per_page
 * @param search
 * @param sortBy
 * @param sortDirection
 *
 * @returns {Promise<unknown>}
 */
const onLoad = ({
  items,
  page,
  per_page: perPage = 10,
  search,
  sort_by: sortBy,
  sort_direction: sortDirection
}: OnLoadType) => {
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
  if (sortBy && sortBy.length) {
    payload = _.sortBy(payload, (item) => item[sortBy]);

    if (sortDirection && sortDirection === SORT_DESCENDING) {
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
        count: items.length,
        pages
      }
    }
  };

  return new Promise<any>((resolve) => resolve(response));
};

/**
 *
 *
 * @returns {Promise<unknown>}
 */
const onLoadEmpty = () => {
  const response = { data: { items: [], list: { pages: 1 } } };
  return new Promise<any>((resolve) => resolve(response));
};

/**
 * Mocks returning the data from an API call for a collection of hierarchical records.
 *
 * @param items
 * @param parentId
 * @param parentKey
 * @param search
 *
 * @returns {Promise<unknown>}
 */
const onNestedLoad = ({
  items,
  parentId,
  parentKey,
  search
}: OnNestedLoadType) => {
  let payload = [...items];

  if (parentId) {
    payload = _.filter(payload, (item) => item[parentKey] === parentId);
  } else if (search && search.length) {
    payload = _.filter(payload, (item) => {
      let match = false;

      _.each(_.keys(item), (key) => {
        if (item[key] && item[key].toString().toLowerCase().startsWith(search.toLowerCase())) {
          match = true;
        }
      });

      return match;
    });
  } else {
    payload = _.where(payload, { [parentKey]: null });
  }

  const response = {
    data: {
      items: payload,
      list: {
        count: payload.length,
        pages: 1
      }
    }
  };

  return new Promise<any>((resolve) => resolve(response));
};

const sleep = (ms: number) => new Promise<any>((resolve) => setTimeout(resolve, ms));

export default {
  onLoad,
  onLoadEmpty,
  onNestedLoad,
  sleep
};
