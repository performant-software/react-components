// @flow

import { LocationMarkers, Map as MapUtils } from '@performant-software/geospatial';
import { useMap } from '@peripleo/maplibre';
import React, { useEffect, useMemo, useState } from 'react';
import _ from 'underscore';
import TypesenseUtils from '../utils/Typesense';
import { useCachedHits, useSearching } from '../hooks/Typesense';

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
  fitBoundingBox?: boolean,

  /**
   * Path to the geometry attribute for each result.
   */
  geometry: string,
}

/**
 * This component renders a map layer for the search results from a Typesense search index.
 */
const SearchResultsLayer = (props: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const hits = useCachedHits();
  const map = useMap();
  const isSearching = useSearching();

  /**
   * Memo-ize the Typesense hits as a feature collection.
   *
   * @type {unknown}
   */
  const data = useMemo(() => (
    !_.isEmpty(hits) && TypesenseUtils.toFeatureCollection(hits, props.geometry)
  ), [hits, props.geometry]);

  /**
   * Here we'll implement our own fitting of the bounding box once the search has completed and the map has loaded,
   * rather than using the default implementation in LocationMarker that will change when the "data" prop changes.
   */
  const boundingBoxDependencies = [
    data,
    isSearching,
    mapLoaded,
    props.boundingBoxData,
    props.boundingBoxOptions,
    props.buffer,
    props.fitBoundingBox
  ];

  useEffect(() => {
    if (props.fitBoundingBox && data && mapLoaded && !isSearching) {
      // Set the bounding box on the map
      const bbox = MapUtils.getBoundingBox(data, props.buffer);

      if (bbox) {
        map.fitBounds(bbox, props.boundingBoxOptions, props.boundingBoxData);
      }
    }
  }, boundingBoxDependencies);

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

  if (!data) {
    return null;
  }

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
