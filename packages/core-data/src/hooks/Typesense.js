// @flow

import { useMap } from '@peripleo/maplibre';
import {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import PersistentSearchStateContext from '../context/PersistentSearchState';
import type { SearchResult } from '../types/typesense/SearchResult';
import { canFilterByBounds } from '../utils/GeoSearch';

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

export const useSearchCompleted = (callback: ((hits: SearchResult[]) => void), deps: Array<any>) => {
  const { observe, unobserve } = useContext(PersistentSearchStateContext);

  useEffect(() => {
    observe(callback);

    return () => {
      unobserve(callback);
    };
  }, deps);
};

export const useSearching = () => {
  const { searching } = useContext(PersistentSearchStateContext);
  return searching;
};

export const useGeoSearchToggle = () => {
  const { clearMapRefinement, isRefinedWithMap, refine } = useGeoSearch();

  const [filterByMapBounds, setFilterByMapBounds] = useState(isRefinedWithMap());

  const map = useMap();

  const onChangeViewport = useCallback(() => {
    const bounds = map.getBounds();
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();

    // Typesense cannot filter by bounds that span half of the globe or more (see `canFilterByBounds`), so the
    // filter is dropped until the map shows less.
    if (canFilterByBounds(northEast, southWest)) {
      refine({ northEast, southWest });
    } else if (isRefinedWithMap()) {
      clearMapRefinement();
    }
  }, [map, isRefinedWithMap()]);

  useEffect(() => {
    if (!map) {
      return undefined;
    }

    if (filterByMapBounds) {
      onChangeViewport(); // Initial filter

      map.on('dragend', onChangeViewport);
      map.on('zoomend', onChangeViewport);

      return () => {
        map.off('dragend', onChangeViewport);
        map.off('zoomend', onChangeViewport);
      };
    }

    clearMapRefinement();
    return undefined;
  }, [map, onChangeViewport, filterByMapBounds]);

  return {
    filterByMapBounds,
    setFilterByMapBounds
  };
};
