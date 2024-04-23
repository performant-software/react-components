// @flow

import { Image } from 'lucide-react';
import React, { useCallback, useEffect, useMemo } from 'react';
import _ from 'underscore';
import PlacesService from '../services/Places';
import { useLoader } from '../hooks/CoreData';

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
 * This component renders a detail view for the passed Core Data place record.
 */
const PlaceDetails = (props: Props) => {
  /**
   * Load the base place record.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoad = useCallback((baseUrl, projectIds) => (
    PlacesService.fetchOne(baseUrl, props.id, projectIds)
  ), [props.id]);

  const { data: { place } = {} } = useLoader(onLoad);

  /**
   * Load the related media contents.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoadMediaContents = useCallback((baseUrl, projectIds) => (
    PlacesService.fetchRelatedMedia(baseUrl, props.id, projectIds)
  ), [props.id]);

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
        <div
          className='relative w-full h-[200px] flex-grow-0 flex-shrink-0 bg-muted/20 z-0'
        >
          <div
            className='absolute top-0 left-0 w-full h-full flex justify-center items-center'
          >
            <Image
              className='h-20 w-20 text-gray-400'
              strokeWidth={1}
            />
          </div>
          <div
            className='absolute top-0 left-0 w-full h-full flex justify-center items-center'
          >
            <img
              className='object-cover h-full w-full'
              src={image.content_iiif_url}
              alt={image.name}
            />
          </div>
        </div>
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
          <ol
            className='text-sm mt-4 leading-6 overflow-hidden'
          >
            { _.map(userDefined, ({ label, value }) => (
              <li
                key={label}
                className='mb-2'
              >
                <div
                  className='text-muted'
                >
                  { label }
                </div>
                <div
                  className='font-medium overflow-hidden text-ellipsis'
                >
                  { value }
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default PlaceDetails;
