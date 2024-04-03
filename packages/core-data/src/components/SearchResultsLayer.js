// @flow

import { LocationMarkers, Map as MapUtils } from '@performant-software/geospatial';
import { useMap } from '@peripleo/maplibre';
import React, { useEffect, useMemo, useState } from 'react';
import TypesenseUtils from '../utils/Typesense';
import { useCachedHits, useSearchCompleted } from '../hooks/Typesense';

type Props = {
  /**
   * Additional event data to pass to the fitToBounds function.
   */
  boundingBoxData?: any,

  /**
   * Additional options to pass to the fitToBounds function.
   */
  boundingBoxOptions?: any,

  /**
   * The number of miles to buffer the GeoJSON data.
   */
  buffer?: number,

  /**
   * If `true`, the map will fit the bounding box around the passed data.
   */
  fitBoundingBox?: boolean
};

/**
 * This component renders a map layer for the search results from a Typesense search index.
 */
const SearchResultsLayer = (props: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

  const hits = useCachedHits();
  const map = useMap();

  const data = useMemo(() => TypesenseUtils.toFeatureCollection(hits), [hits]);

  /**
   * Here we'll implement our own fitting of the bounding box once the search has completed and the map has loaded,
   * rather than using the default implementation in LocationMarker that will change when the "data" prop changes.
   */
  useEffect(() => {
    if (props.fitBoundingBox && mapLoaded && searchCompleted) {
      const boundingBox = MapUtils.getBoundingBox(data, props.buffer);
      map.fitBounds(boundingBox, props.boundingBoxOptions, props.boundingBoxData);
    }
  }, [mapLoaded, searchCompleted, props.boundingBoxData, props.boundingBoxOptions, props.buffer, props.fitBoundingBox]);

  /**
   * Sets the mapLoaded state to true.
   */
  useEffect(() => {
    if (map.loaded()) {
      setMapLoaded(true);
    } else {
      const onLoad = () => setMapLoaded(true);
      map.on('load', onLoad);
    }

    return () => {
      setMapLoaded(false);
    };
  }, [map]);

  /**
   * Sets the search completed state to true.
   */
  useSearchCompleted(() => setSearchCompleted(true), []);

  return (
    <LocationMarkers
      {...props}
      data={data}
      fitBoundingBox={false}
    />
  );
};

SearchResultsLayer.defaultProps = {
  fitBoundingBox: true
};

export default SearchResultsLayer;
