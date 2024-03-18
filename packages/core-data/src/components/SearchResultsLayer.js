// @flow

import { LocationMarkers } from '@performant-software/geospatial';
import { useMap } from '@peripleo/maplibre';
import React, { useEffect, useMemo, useState } from 'react';
import TypesenseUtils from '../utils/Typesense';
import { useCachedHits, useSearchCompleted } from '../hooks/Typesense';

type Props = {
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
  useSearchCompleted(() => setVisible(true));

  if (!(mapLoaded && visible)) {
    return null;
  }

  return (
    <LocationMarkers
      data={data}
      layerId={props.layerId}
    />
  );
};

export default SearchResultsLayer;
