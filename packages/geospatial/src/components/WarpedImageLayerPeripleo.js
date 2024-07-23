// @flow

import { useEffect } from 'react';
import { useLoadedMap } from '@peripleo/maplibre';
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
  const map = useLoadedMap();

  /**
   * Adds the WarpedMapLayer object to the map as a new layer.
   */
  useEffect(() => {
    if (!map) {
      return undefined;
    }

    MapUtils.addGeoreferenceLayer(map, props.id, {
      manifest: props.manifest,
      opacity: props.opacity,
      url: props.url
    });

    return () => MapUtils.removeLayer(map, props.id);
  }, [map]);

  return null;
};

WarpedImageLayer.defaultProps = {
  opacity: 0.5
};

export default WarpedImageLayer;
