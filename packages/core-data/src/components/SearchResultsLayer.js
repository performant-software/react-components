// @flow

import { LocationMarkers, Map as MapUtils } from '@performant-software/geospatial';
import { useMap } from '@peripleo/maplibre';
import React, { useEffect, useMemo, useState } from 'react';
import TypesenseUtils from '../utils/Typesense';
import { useCachedHits, useSearchCompleted } from '../hooks/Typesense';

type Props = {
  boundingBoxOptions?: any,
  buffer?: number,
  fitBoundingBox?: boolean,
  layerId: string
};

const SearchResultsLayer = (props: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  const hits = useCachedHits();
  const map = useMap();

  const data = useMemo(() => TypesenseUtils.toFeatureCollection(hits), [hits]);

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
   * Sets the visible state to true.
   */
  useSearchCompleted(() => setVisible(true), []);

  /**
   * Here we'll implement our own fitting of the bounding box, rather than using
   * the default implementation in LocationMarker that will change when the "data" prop changes.
   */
  useSearchCompleted(() => {
    if (props.fitBoundingBox && map && data) {
      const boundingBox = MapUtils.getBoundingBox(data, props.buffer);
      map.fitBounds(boundingBox, props.boundingBoxOptions);
    }
  }, [map, data, props.buffer, props.fitBoundingBox, props.boundingBoxOptions]);

  if (!(mapLoaded && visible)) {
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

export default SearchResultsLayer;
