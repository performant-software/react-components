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

const useProgressiveSearch = (infiniteHits) => {
  const [cachedHits, setCachedHits] = useState(TypesenseUtils.createCachedHits([]));

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
      // eslint-disable-next-line no-param-reassign
      delete a.page;
    }

    if (ignorePageNo && b) {
      // eslint-disable-next-line no-param-reassign
      delete b.page;
    }

    return !dequal(a, b);
  };

  useEffect(() => {
    const { results } = infiniteHits;

    const isFirstPage = results.page === 0;
    const isLastPage = results.page + 1 >= results.nbPages;

    const hits = TypesenseUtils.normalizeResults(results.hits);

    // Add to cache and load next page
    if (isFirstPage && hasStateChanged(results._state, lastSearchState.current, true)) {
      setCachedHits(() => TypesenseUtils.createCachedHits(hits));
    } else {
      setCachedHits(({ merge }) => merge(hits));
    }

    if (!isLastPage && infiniteHits.showMore) {
      setTimeout(() => infiniteHits.showMore(), 25);
    } else if (hasStateChanged(results._state, lastSearchState.current)) {
      callbacks.current.forEach((callback) => {
        const merged = cachedHits.merge(hits);
        callback(merged.hits);
      });
    }

    lastSearchState.current = results._state;
  }, [infiniteHits.results]);

  return { cachedHits: cachedHits.hits, observe, unobserve };
};

export default useProgressiveSearch;
