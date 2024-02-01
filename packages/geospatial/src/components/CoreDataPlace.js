// @flow

import React, { useEffect, useState } from 'react';
import type { FeatureCollection } from '@peripleo/peripleo';
import { MixedGeoJSONLayer, PulsingMarkerLayer } from '@peripleo/maplibre';
import { DEFAULT_FILL_STYLE, DEFAULT_POINT_STYLE, DEFAULT_STROKE_STYLE } from '../utils/MapStyles';
import './CoreDataPlace.css';

type Props = {
  url: string,
  fillStyle?: { [key: string]: any },
  pointStyle?: { [key: string]: any },
  strokeStyle?: { [key: string]: any }
};

const CoreDataPlace = (props: Props) => {
  const [place, setPlace] = useState<FeatureCollection | undefined>(undefined);

  /**
   * Fetch the place record from the passed URI.
   */
  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => setPlace({
        type: 'FeatureCollection',
        features: [{
          ...data,
          properties: {
            ...data.properties,
            record_id: data.record_id
          }
        }]
      }));
  }, [props.url]);

  if (!place) {
    return null;
  }

  return (
    <>
      <PulsingMarkerLayer
        id='current'
        data={place}
      />
      <MixedGeoJSONLayer
        id={props.url}
        data={place}
        fillStyle={props.fillStyle}
        strokeStyle={props.strokeStyle}
        pointStyle={props.pointStyle}
      />
    </>
  );
};

CoreDataPlace.defaultProps = {
  fillStyle: DEFAULT_FILL_STYLE,
  pointStyle: DEFAULT_POINT_STYLE,
  strokeStyle: DEFAULT_STROKE_STYLE
};

export default CoreDataPlace;
