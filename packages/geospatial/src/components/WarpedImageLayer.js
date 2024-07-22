// @flow

import { WarpedMapLayer } from '@allmaps/maplibre';
import { useLoadedMap } from '@peripleo/maplibre';
import { useEffect } from 'react';

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

    const warpedMapLayer = new WarpedMapLayer(props.id);
    map.addLayer(warpedMapLayer);

    if (props.url) {
      warpedMapLayer.addGeoreferenceAnnotationByUrl(props.url);
    } else if (props.manifest) {
      warpedMapLayer.addGeoreferenceAnnotation(props.manifest);
    }

    warpedMapLayer.setOpacity(props.opacity);

    return () => {
      if (map) {
        map.removeLayer(props.id);
      }
    };
  }, [map]);

  return null;
};

WarpedImageLayer.defaultProps = {
  opacity: 0.5
};

export default WarpedImageLayer;
