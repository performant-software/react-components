// @flow

import React, { useCallback, useEffect, useMemo } from 'react';
import _ from 'underscore';
import HeaderImage from './HeaderImage';
import KeyValueList from './KeyValueList';
import { useLoader, usePlacesService } from '../hooks/CoreData';

type Props = {
  /**
   * The Core Data identifier of the place record.
   */
  id: string,

  /**
   * (Optional) Callback fired when the place record is loaded.
   *
   * @param
   */
  onLoad: (data) => any
};

/**
 * This component renders a detail view for the passed Core Data place record. This component is deprecated, as it is
 * just a composition of other components, and will be removed in a future release.
 *
 * @deprecated
 */
const PlaceDetails = (props: Props) => {
  const PlacesService = usePlacesService();

  /**
   * Load the base place record.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoad = useCallback(() => PlacesService.fetchOne(props.id), [props.id]);

  const { data: { place } = {} } = useLoader(onLoad);

  /**
   * Load the related media contents.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoadMediaContents = useCallback((params) => PlacesService.fetchRelatedMedia(props.id, params), [props.id]);

  const { data: { media_contents: mediaContents } = {} } = useLoader(onLoadMediaContents);

  /**
   * Sets the first related image.
   *
   * @type {*}
   */
  const image = useMemo(() => _.first(mediaContents), [mediaContents]);

  /**
   * Sets the user defined field values.
   *
   * @type {UserDefinedField[]|*[]}
   */
  const userDefined = useMemo(() => (
    place?.user_defined ? Object.values(place.user_defined) : []
  ), [place]);

  /**
   * Call the onLoad prop if provided when the place changes.
   */
  useEffect(() => {
    if (props.onLoad && place) {
      props.onLoad(place);
    }
  }, [place]);

  return (
    <>
      { image && (
        <HeaderImage
          alt={image.name}
          src={image.content_iiif_url}
        />
      )}
      { place && (
        <div
          className='p-3'
        >
          <h1
            className='pr-6 font-medium'
          >
            { place.name }
          </h1>
          { userDefined && (
            <KeyValueList
              items={userDefined}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PlaceDetails;
