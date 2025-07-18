// @flow

import { dequal } from 'dequal/lite';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import type { SearchResult } from '../types/typesense/SearchResult';
import TypesenseUtils from '../utils/Typesense';

type OnCompleteCallback = (results: Array<SearchResult>) => void;

const useProgressiveSearch = (infiniteHits, transformResults = null) => {
  const [cachedHits, setCachedHits] = useState(TypesenseUtils.createCachedHits([]));
  const [searching, setSearching] = useState(false);

  const lastSearchState = useRef<any>();
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
   * Returns true if the state has changed.
   *
   * @param a
   * @param b
   * @param ignorePageNo
   *
   * @returns {boolean}
   */
  const hasStateChanged = (a: any, b: any, ignorePageNo?: boolean) => {
    if (ignorePageNo && a) {
      delete a.page;
    }

    if (ignorePageNo && b) {
      delete b.page;
    }

    return !dequal(a, b);
  };

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

  useEffect(() => {
    const { isFirstPage, results } = infiniteHits;
    const hits = getHits(results);

    if (isFirstPage) {
      setSearching(true);
    }

    // Add to cache and load next page
    if (isFirstPage && hasStateChanged(results._state, lastSearchState.current, true)) {
      setCachedHits(() => TypesenseUtils.createCachedHits(hits));
    } else {
      setCachedHits(({ merge }) => merge(hits));
    }
  }, [infiniteHits.results]);

  useEffect(() => {
    const { isLastPage, results } = infiniteHits;
    const hits = getHits(results);

    if (!isLastPage && infiniteHits.showMore) {
      setTimeout(() => infiniteHits.showMore(), 25);
    } else if (hasStateChanged(results._state, lastSearchState.current)) {
      callbacks.current.forEach((callback) => {
        const merged = cachedHits.merge(hits);
        callback(merged.hits);
      });
    }

    if (isLastPage) {
      setSearching(false);
    }

    lastSearchState.current = results._state;
  }, [cachedHits]);

  return {
    cachedHits: cachedHits.hits,
    observe,
    unobserve,
    searching
  };
};

export default useProgressiveSearch;
