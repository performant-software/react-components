// @flow

import { useMap } from '@peripleo/maplibre';
import {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
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

export const useGeoSearchToggle = () => {
  const { clearMapRefinement, isRefinedWithMap, refine } = useGeoSearch();

  const [filterByMapBounds, setFilterByMapBounds] = useState(isRefinedWithMap());

  const map = useMap();

  const onChangeViewport = useCallback(() => {
    const bounds = map.getBounds();

    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();

    // Note TypeSense seems to be buggy. If the bounds are too large,
    // it will return 0 results. (Note that lng values >180, <(-180) DO NOT
    // seem to be the problem!)
    const extent = northEast.lng - southWest.lng;
    if (extent > 200) {
      clearMapRefinement();
    } else {
      refine({ northEast, southWest });
    }
  }, [map]);

  useEffect(() => {
    if (!map) {
      return null;
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
    return null;
  }, [map, onChangeViewport, filterByMapBounds]);

  return {
    filterByMapBounds,
    setFilterByMapBounds
  };
};
