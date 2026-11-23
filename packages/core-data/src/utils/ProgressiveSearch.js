// @flow

export const CACHE_ACTION_MERGE = 'merge';
export const CACHE_ACTION_RESET = 'reset';
export const CACHE_ACTION_SKIP = 'skip';

/**
 * Decides what a progressive search should do with a results object it has just been rendered with.
 *
 * InstantSearch re-renders widgets with the previous results while a new search is in flight, and it patches
 * `results._state` on that previous object to the current state so the UI looks up to date (its "optimistic UI").
 * The state on a results object therefore does not identify the search that produced its hits. What does is the
 * results object itself, which InstantSearch replaces only when a response arrives, and the page number of that
 * response, which comes from the response rather than from the patched state.
 *
 * @param results          The results the hook was rendered with.
 * @param previousResults  The results object the hook processed last.
 *
 * @returns {string} `reset` when a first page arrives, `merge` when a later page arrives, `skip` otherwise.
 */
export const getCacheAction = (results: any, previousResults: any): string => {
  if (!results || results === previousResults || results.__isArtificial) {
    return CACHE_ACTION_SKIP;
  }

  return (results.page || 0) === 0 ? CACHE_ACTION_RESET : CACHE_ACTION_MERGE;
};

/**
 * Says whether the passed results are those of the page that the search state currently points at.
 *
 * `showMore` asks InstantSearch for the page after the one that the search state points at, and InstantSearch
 * points `results._state` at the current search state on every render. Once a later page has been requested,
 * the page in the state therefore differs from the page in the latest results until that page arrives. A second
 * `showMore` in that window would request two pages at once, and the hits of the first can be lost.
 *
 * @param results  The results the hook processed last.
 *
 * @returns {boolean} `true` when no other page has been requested since the results arrived.
 */
export const isCurrentPage = (results: any): boolean => (
  (results?._state?.page || 0) === (results?.page || 0)
);
