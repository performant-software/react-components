// @flow

import { Thumbnail } from '@samvera/clover-iiif/primitives';
import React, { useState } from 'react';
import clsx from 'clsx';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';
import MediaGallery from './MediaGallery';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Name of the class(es) to apply to the <ul> element.
   */
  className?: string,

  /**
   * A message to display when no records are returned from the API.
   */
  emptyMessage?: string,

  /**
   * Number of items to display in each row of the grid.
   */
  itemsPerRow?: number,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,

  /**
   * Media thumbnail height.
   */
  thumbnailHeight?: number,

  /**
   * Media thumbnail width.
   */
  thumbnailWidth?: number
};

const DEFAULT_THUMBNAIL_HEIGHT = 80;
const DEFAULT_THUMBNAIL_WIDTH = 80;

/**
 * This component renders the related Core Data media records as well as a gallery viewer.
 */
const RelatedMedia = (props: Props) => {
  const [manifestUrl, setManifestUrl] = useState<string>();

  const { data, loading } = useLoader(props.onLoad);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (_.isEmpty(data?.items) && props.emptyMessage) {
    return (
      <div
        className='pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/60 italic'
      >
        { props.emptyMessage }
      </div>
    );
  }

  return (
    <ul
      className={clsx(
        'grid',
        'gap-2',
        { 'grid-cols-1': props.itemsPerRow === 1 },
        { 'grid-cols-2': props.itemsPerRow === 2 },
        { 'grid-cols-3': props.itemsPerRow === 3 },
        { 'grid-cols-4': props.itemsPerRow === 4 },
        { 'grid-cols-5': props.itemsPerRow === 5 },
        { 'grid-cols-6': props.itemsPerRow === 6 },
        props.className
      )}
    >
      { _.map(data?.items, ({ id, label: { en: label }, thumbnail }) => (
        <li
          className='flex flex-col'
          key={id}
        >
          <Thumbnail
            aria-label={label}
            className='rounded shadow cursor-pointer'
            onClick={() => setManifestUrl(id)}
            thumbnail={_.map(thumbnail, (t) => ({
              ...t,
              width: props.thumbnailWidth,
              height: props.thumbnailHeight
            }))}
          />
          <div
            className='text-sm whitespace-nowrap'
          >
            { label }
          </div>
        </li>
      ))}
      <MediaGallery
        manifestUrl={manifestUrl}
        onClose={() => setManifestUrl(null)}
      />
    </ul>
  );
};

RelatedMedia.defaultProps = {
  itemsPerRow: 1,
  thumbnailHeight: DEFAULT_THUMBNAIL_HEIGHT,
  thumbnailWidth: DEFAULT_THUMBNAIL_WIDTH
};

export default RelatedMedia;
