import React, { useEffect, useState } from 'react';
import { Feature, FeatureCollection, Peripleo, Controls } from '@peripleo/peripleo';
import { Map, MixedGeoJSONLayer, PulsingMarkerLayer, Zoom } from '@peripleo/maplibre';
import { DEFAULT_FILL_STYLE, DEFAULT_POINT_STYLE, DEFAULT_STROKE_STYLE } from './CoreDataPlaceStyles';

interface CoreDataPlaceProps {

  mapStyle: string | object;

  placeURI: string;

  fillStyle?: object;

  pointStyle?: object;

  strokeStyle?: object;

}

const CoreDataPlace = (props: CoreDataPlaceProps) => {

  return (
    <Peripleo>
      <Map style={props.mapStyle}>
        <Controls position="topright">
          <Zoom />
        </Controls>

        <CoreDataPlaceLayer 
          uri={props.placeURI} 
          fillStyle={props.fillStyle}
          pointStyle={props.pointStyle}
          strokeStyle={props.strokeStyle} />
      </Map>
    </Peripleo>
  )

}

interface CoreDataPlaceLayerProps {

  uri: string;

  fillStyle?: object;

  pointStyle?: object;

  strokeStyle?: object;

}

export const CoreDataPlaceLayer = (props: CoreDataPlaceLayerProps) => {

  const [place, setPlace] = useState<FeatureCollection | undefined>(undefined);

  useEffect(() => {
    fetch(props.uri)
      .then(res => res.json())
      .then(data => {
        const place = {
          ...data,
          properties: {
            ...data.properties,
            record_id: data.record_id
          }
        } as Feature;

        setPlace({
          type: 'FeatureCollection',
          features: [place]
        });
      });
  }, [props.uri])

  return place && (
    <>
      <PulsingMarkerLayer 
        id="current" 
        data={place} />

      <MixedGeoJSONLayer
        id={props.uri} 
        data={place} 
        fillStyle={props.fillStyle || DEFAULT_FILL_STYLE} 
        strokeStyle={props.strokeStyle || DEFAULT_STROKE_STYLE} 
        pointStyle={props.pointStyle || DEFAULT_POINT_STYLE} />
    </>
  )

}

export default CoreDataPlace;
