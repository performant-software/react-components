// @flow

import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import type { SearchResult } from '../types/typesense/SearchResult';
import {
  CACHE_ACTION_RESET,
  CACHE_ACTION_SKIP,
  getCacheAction
} from '../utils/ProgressiveSearch';
import TypesenseUtils from '../utils/Typesense';

type OnCompleteCallback = (results: Array<SearchResult>) => void;

const useProgressiveSearch = (infiniteHits, transformResults = null) => {
  const [cachedHits, setCachedHits] = useState(TypesenseUtils.createCachedHits([]));
  const [searching, setSearching] = useState(false);

  const lastResults = useRef<any>();
  const callbacks = useRef<Array<OnCompleteCallback>>([]);

  /**
   * Adds the passed callback to the list of callbacks.
   *
   * @type {(function(OnCompleteCallback): void)|*}
   */
  const observe = useCallback((callback: OnCompleteCallback) => {
    callbacks.current = [...callbacks.current, callback];
  }, []);

  /**
   * Removes the passed callback from the list of callbacks.
   *
   * @type {(function(OnCompleteCallback): void)|*}
   */
  const unobserve = useCallback((callback: OnCompleteCallback) => {
    callbacks.current = callbacks.current.filter((c) => c !== callback);
  }, []);

  /**
   * Returns the transformed hits if the callback is provided. Otherwise, the untransformed hits are returned.
   *
   * @param results
   *
   * @returns {*}
   */
  const getHits = (results) => {
    let value = results.hits;

    if (transformResults) {
      value = transformResults(value);
    }

    return value;
  };

  /**
   * Adds the hits from each newly received page to the cache. A first page starts the cache over; later pages
   * are appended. The decision is made from the results object and its page number rather than from
   * `results._state`, because InstantSearch patches that state onto the previous results while a new search is
   * in flight (see `getCacheAction`).
   */
  useEffect(() => {
    const { results } = infiniteHits;
    const action = getCacheAction(results, lastResults.current);

    if (action === CACHE_ACTION_SKIP) {
      return;
    }

    lastResults.current = results;

    const hits = getHits(results);

    if (action === CACHE_ACTION_RESET) {
      setSearching(true);
      setCachedHits(() => TypesenseUtils.createCachedHits(hits));
    } else {
      setCachedHits(({ merge }) => merge(hits));
    }
  }, [infiniteHits.results]);

  /**
   * Loads the next page after each page is cached. Once the last page is in the cache, notifies the observers
   * with the complete set of hits.
   */
  useEffect(() => {
    const { isLastPage, showMore } = infiniteHits;

    if (!isLastPage && showMore) {
      setTimeout(() => showMore(), 25);
      return;
    }

    callbacks.current.forEach((callback) => callback(cachedHits.hits));
    setSearching(false);
  }, [cachedHits]);

  return {
    cachedHits: cachedHits.hits,
    observe,
    unobserve,
    searching
  };
};

export default useProgressiveSearch;
