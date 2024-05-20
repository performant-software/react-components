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
import InstancesService from '../services/Instances';
import ItemsService from '../services/Items';
import PeopleService from '../services/People';
import PlacesService from '../services/Places';
import WorksService from '../services/Works';

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

  /**
   * Returns true if the next button should be disabled.
   *
   * @type {boolean}
   */
  const isNextDisabled = useMemo(() => page === list.pages, [page, list.pages]);

  /**
   * Returns true if the previous button should be disabled.
   *
   * @type {boolean}
   */
  const isPreviousDisabled = useMemo(() => page === 1, [page]);

  /**
   * Callback fired when the next button is clicked.
   *
   * @type {function(): void}
   */
  const onNext = useCallback(() => setPage((prevPage) => prevPage + 1), []);

  /**
   * Callback fired to set the new page on the state.
   *
   * @type {function(*): void}
   */
  const onPageChange = useCallback((newPage) => setPage(newPage), []);

  /**
   * Callback fired when the previous button is clicked.
   *
   * @type {function(): void}
   */
  const onPrevious = useCallback(() => setPage((prevPage) => prevPage - 1), []);

  /**
   * Sets the loading state to "true" and calls the onLoad callback.
   */
  useEffect(() => {
    setLoading(true);

    onLoad({ ...params, page })
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

/**
 * Hook to initialize the events service.
 *
 * @returns {Events}
 */
export const useEventsService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new EventsService(baseUrl, projectIds);
};

/**
 * Hook to initialize the instances service.
 *
 * @returns {Instances}
 */
export const useInstancesService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new InstancesService(baseUrl, projectIds);
};

/**
 * Hook to initialize the items service.
 *
 * @returns {Items}
 */
export const useItemsService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new ItemsService(baseUrl, projectIds);
};

/**
 * Hook to initialize the people service.
 *
 * @returns {People}
 */
export const usePeopleService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new PeopleService(baseUrl, projectIds);
};

/**
 * Hook to initialize the places service.
 *
 * @returns {Places}
 */
export const usePlacesService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new PlacesService(baseUrl, projectIds);
};

/**
 * Hook to initialize the works service.
 *
 * @returns {Works}
 */
export const useWorksService = () => {
  const { baseUrl, projectIds } = useContext(CoreDataContext);
  return new WorksService(baseUrl, projectIds);
};
