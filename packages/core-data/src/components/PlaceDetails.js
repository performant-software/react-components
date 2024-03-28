// @flow

import { Image } from 'lucide-react';
import React, { useCallback, useMemo } from 'react';
import _ from 'underscore';
import PlacesService from '../services/Places';
import { useLoader } from '../hooks/CoreData';

type Props = {
  id: string
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

  const { data: place } = useLoader(onLoad);

  /**
   * Load the related media contents.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoadMediaContents = useCallback((baseUrl, projectIds) => (
    PlacesService.fetchRelatedMedia(baseUrl, props.id, projectIds)
  ), [props.id]);

  const { data: mediaContents } = useLoader(onLoadMediaContents);

  /**
   * Sets the first related image.
   *
   * @type {*}
   */
  const image = useMemo(() => _.first(mediaContents?.items)?.body, [mediaContents]);

  /**
   * Sets the user defined field values.
   *
   * @type {UserDefinedField[]|*[]}
   */
  const userDefined = useMemo(() => (
    place?.user_defined ? Object.values(place.user_defined) : []
  ), [place]);

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
              alt={image.title}
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
            { place.properties.title }
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
