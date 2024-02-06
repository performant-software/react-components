// @flow

import { Image, X } from 'lucide-react';
import React, { useMemo, useRef } from 'react';
import _ from 'underscore';
import type { Place } from '../types/Place';
import type { RelatedItems } from '../types/RelatedItems';
import RelatedItemsList from './RelatedItemsList';
import './PlaceDetailsPanel.css';

type Props = {
  /**
   * The place record to render.
   */
  place?: Place,

  /**
   * A list of items related to the place.
   */
  related: Array<RelatedItems>,

  /**
   * Callback fired when the panel is closed.
   */
  onClose: () => void
};

/**
 * This component renders a side panel for the passed Core Data place record.
 */
const PlaceDetailsPanel = (props: Props) => {
  const el = useRef<HTMLElement>(null);

  /**
   * Returns the first image for the passed related items.
   */
  const firstImage = useMemo(() => {
    const images = props.related.find((i) => i.endpoint === 'media_contents' && !_.isEmpty(i.data?.items));
    return images ? (images.data && images.data.items[0].body) : undefined;
  }, [props.related]);

  /**
   * Sets the user defined field values.
   *
   * @type {UserDefinedField[]|*[]}
   */
  const userDefined = useMemo(() => (
    props.place?.user_defined ? Object.values(props.place.user_defined) : []
  ), [props.place]);

  return (
    <aside
      className='flex flex-col absolute z-10 h-full w-[280px] bg-white/80 backdrop-blur shadow overflow-y-auto'
      ref={el}
    >
      <button
        className='absolute top-2 right-2 p-1.5 rounded-full z-10 bg-slate-200/60 hover:bg-slate-200 focus:outline-2 focus:outline-offset-2 focus:outline-teal-700'
        onClick={props.onClose}
        type='button'
      >
        <X className='h-4 w-4' />
      </button>
      { props.place && (
        <>
          { firstImage && (
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
                  src={firstImage.content_url}
                  alt={firstImage.title}
                />
              </div>
            </div>
          )}
          <div
            className='p-3'
          >
            <h1
              className='pr-6 font-medium'
            >
              { props.place.properties.title }
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
          <RelatedItemsList
            items={props.related}
          />
        </>
      )}
    </aside>
  );
};

export default PlaceDetailsPanel;
