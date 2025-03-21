// @flow

import { LocationMarkers, Map as MapUtils } from '@performant-software/geospatial';
import { useMap } from '@peripleo/maplibre';
import React, { useEffect, useState } from 'react';

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
   * The GeoJSON data representing the location.
   */
  data: { [key: string]: any },

  /**
   * If `true`, the map will fit the bounding box around the passed data.
   */
  fitBoundingBox?: boolean,

  /**
   * Path to the geometry attribute for each result.
   */
  geometry: string,

  /**
   * If `true`, the bounding box will not be fit.
   */
  searching?: boolean
};

/**
 * This component renders a map layer for the search results from a Typesense search index.
 */
const SearchResultsLayer = (props: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const map = useMap();

  /**
   * Here we'll implement our own fitting of the bounding box once the search has completed and the map has loaded,
   * rather than using the default implementation in LocationMarker that will change when the "data" prop changes.
   */
  const boundingBoxDependencies = [
    mapLoaded,
    props.boundingBoxData,
    props.boundingBoxOptions,
    props.buffer,
    props.data,
    props.fitBoundingBox,
    props.searching
  ];

  useEffect(() => {
    if (props.fitBoundingBox && props.data && mapLoaded && !props.searching) {
      // Set the bounding box on the map
      const bbox = MapUtils.getBoundingBox(props.data, props.buffer);

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

  if (!props.data) {
    return null;
  }

  return (
    <LocationMarkers
      {...props}
      data={props.data}
      fitBoundingBox={false}
    />
  );
};

SearchResultsLayer.defaultProps = {
  fitBoundingBox: true
};

export default SearchResultsLayer;
