// @flow

import { useContext, useEffect } from 'react';
import PersistentSearchStateContext from '../context/PersistentSearchState';

export const useCachedHits = () => {
  const { cachedHits } = useContext(PersistentSearchStateContext);
  return cachedHits;
};

export const useSearchBox = () => {
  const { searchBox } = useContext(PersistentSearchStateContext);
  return searchBox;
};

export const useGeoSearch = () => {
  const { geoSearch } = useContext(PersistentSearchStateContext);
  return geoSearch;
};

export const useSearchCompleted = (callback: ((hits: TypesenseSearchResult[]) => void), deps: Array<any>) => {
  const { observe, unobserve } = useContext(PersistentSearchStateContext);

  useEffect(() => {
    observe(callback);

    return () => {
      unobserve(callback);
    };
  }, deps);
};
