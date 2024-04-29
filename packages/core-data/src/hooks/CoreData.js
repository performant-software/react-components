// @flow

import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import CoreDataContext from '../context/CoreData';
import EventsService from '../services/Events';
import PlacesService from '../services/Places';

const DEFAULT_PAGE = 1;

export const Services = {
  events: 'events',
  places: 'places'
};

/**
 * Hook to call the passed onLoad function and returns the loading state and eventual data.
 *
 * @param onLoad
 * @param deps
 *
 * @returns {{data: unknown, loading: boolean}}
 */
export const useLoader = (onLoad, params = {}, deps = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const { baseUrl, projectIds } = useContext(CoreDataContext);

  /**
   * Memo-izes the list metadata.
   *
   * @type {unknown}
   */
  const list = useMemo(() => data?.list || {}, [data]);

  const isNextDisabled = useMemo(() => page === list.pages, [page, list.pages]);

  const isPreviousDisabled = useMemo(() => page === 1, [page]);

  const onNext = useCallback(() => setPage((prevPage) => prevPage + 1), []);

  const onPageChange = useCallback((newPage) => setPage(newPage), []);

  const onPrevious = useCallback(() => setPage((prevPage) => prevPage - 1), []);

  /**
   * Sets the loading state to "true" and calls the onLoad callback.
   */
  useEffect(() => {
    setLoading(true);

    onLoad(baseUrl, projectIds, { ...params, page })
      .then((d) => setData(d))
      .finally(() => setLoading(false));
  }, [...deps, page]);

  return {
    count: list.count,
    data,
    isNextDisabled,
    isPreviousDisabled,
    loading,
    onNext,
    onPageChange,
    onPrevious,
    page,
    pages: list.pages
  };
};

export const useEventsService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  console.log(baseUrl);
  console.log(projectIds);
  return new EventsService(baseUrl, projectIds);
};

export const usePlacesService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new PlacesService(baseUrl, projectIds);
};
