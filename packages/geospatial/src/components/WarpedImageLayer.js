// @flow

import { useEffect, useState } from 'react';
import { useMap } from 'react-map-gl/maplibre';
import MapUtils from '../utils/Map';

type Props = {
  /**
   * ID of the new layer.
   */
  id: string,

  /**
   * (Optional) IIIF manifest content containing the image and geo-reference annotations.
   */
  manifest?: string,

  /**
   * (Optional) layer opacity.
   */
  opacity?: number,

  /**
   * (Optional) URL to the IIIF manifest.
   */
  url?: string
};

const WarpedImageLayer = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  const mapRef = useMap();

  /**
   * Sets the "loaded" attribute on the state based on the current map state.
   */
  useEffect(() => {
    const instance = mapRef?.current?.getMap();
    if (instance && instance.loaded()) {
      setLoaded(true);
    } else if (instance) {
      instance.on('load', () => setLoaded(true));
    }
  }, []);

  /**
   * Adds the WarpedMapLayer object to the map as a new layer.
   */
  useEffect(() => {
    if (!loaded) {
      return undefined;
    }

    const map = mapRef.current.getMap();

    MapUtils.addGeoreferenceLayer(map, props.id, {
      manifest: props.manifest,
      opacity: props.opacity,
      url: props.url
    });

    return () => MapUtils.removeLayer(map, props.id);
  }, [loaded]);

  return null;
};

WarpedImageLayer.defaultProps = {
  opacity: 0.5
};

export default WarpedImageLayer;
