// @flow

import { createContext } from 'react';
import type { SearchResult } from '../types/typesense/SearchResult';

type PersistentSearchStateContextType = {
  cachedHits: Array<SearchResult>,
  geoSearch: any,
  searchBox: any,
  observe: (callback: ((hits: Array<SearchResult>) => void)) => void,
  unobserve: (callback: ((hits: Array<SearchResult>) => void)) => void
};

const PersistentSearchStateContext = createContext<PersistentSearchStateContextType>(undefined);

export default PersistentSearchStateContext;
