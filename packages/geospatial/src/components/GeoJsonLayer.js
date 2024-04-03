// @flow

import React, {
  useEffect,
  useState
} from 'react';
import { Layer, Source } from 'react-map-gl';
import MapStyles from '../utils/MapStyles';

type Props = {
  data?: { [key: string]: any },
  fillStyle?: { [key: string]: any },
  lineStyle?: { [key: string]: any },
  pointStyle?: { [key: string]: any },
  url?: string
};

const GeoJsonLayer = (props: Props) => {
  const [data, setData] = useState(props.data);

  /**
   * If the data is passed as a URL, fetches the passed URL and sets the response on the state.
   */
  useEffect(() => {
    if (props.url) {
      fetch(props.url)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [props.url]);

  return (
    <Source
      data={data}
      type='geojson'
    >
      <Layer
        filter={['!=', '$type', 'Point']}
        paint={props.fillStyle}
        type='fill'
      />
      <Layer
        filter={['!=', '$type', 'Point']}
        paint={props.lineStyle}
        type='line'
      />
      <Layer
        filter={['==', '$type', 'Point']}
        paint={props.pointStyle}
        type='circle'
      />
    </Source>
  );
};

GeoJsonLayer.defaultProps = {
  fillStyle: MapStyles.fill,
  pointStyle: MapStyles.point,
  strokeStyle: MapStyles.stroke
};

export default GeoJsonLayer;
