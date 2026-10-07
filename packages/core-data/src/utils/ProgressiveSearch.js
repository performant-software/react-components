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
