// @flow

import React, { useMemo, type ReactNode } from 'react';
import PersistentSearchStateContext from '../context/PersistentSearchState';
import useProgressiveSearch from '../hooks/ProgressiveSearch';

type Props = {
  geoSearch: any,
  infiniteHits: any,
  searchBox: any,
  children: ReactNode
};

const PersistentSearchStateContextProvider = (props: Props) => {
  const { geoSearch, infiniteHits, searchBox } = props;
  const {
    cachedHits,
    observe,
    unobserve,
    searching
  } = useProgressiveSearch(infiniteHits);

  /**
   * Memoizes the context value.
   *
   * @type {{
   *   unobserve: function(OnCompleteCallback): void,
   *   geoSearch: *,
   *   cachedHits: TypesenseSearchResult[],
   *   observe: function(OnCompleteCallback): void,
   *   searchBox: *
   * }}
   */
  const value = useMemo(() => ({
    cachedHits,
    geoSearch,
    searchBox,
    observe,
    unobserve,
    searching
  }), [cachedHits, geoSearch, searchBox, observe, unobserve, searching]);

  return (
    <PersistentSearchStateContext.Provider
      value={value}
    >
      { props.children }
    </PersistentSearchStateContext.Provider>
  );
};

export default PersistentSearchStateContextProvider;
