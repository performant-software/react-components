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
  const { cachedHits, observe, unobserve } = useProgressiveSearch(infiniteHits);

  return (
    <PersistentSearchStateContext.Provider
      value={{
        cachedHits,
        geoSearch,
        searchBox,
        observe,
        unobserve
      }}
    >
      { props.children }
    </PersistentSearchStateContext.Provider>
  );
};

export default PersistentSearchStateContextProvider;
