// @flow

import { Thumbnail } from '@samvera/clover-iiif/primitives';
import React, { useCallback, useState } from 'react';
import _ from 'underscore';
import MediaGallery from './MediaGallery';
import RelatedList from './RelatedList';

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
   * The label to display on the "Show More" button.
   */
  moreLabel: string,

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

  /**
   * Renders the manifest item.
   *
   * @type {function({id: *, label: {en: *}, thumbnail: *}): *}
   */
  const renderItem = useCallback(({ id, label: { en: label }, thumbnail }) => (
    <div
      className='flex flex-col'
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
    </div>
  ), [props.thumbnailHeight, props.thumbnailWidth]);

  return (
    <>
      <RelatedList
        className={props.className}
        collectionName='items'
        emptyMessage={props.emptyMessage}
        itemsPerRow={props.itemsPerRow}
        onLoad={props.onLoad}
        moreLabel={props.moreLabel}
        renderItem={renderItem}
      />
      <MediaGallery
        manifestUrl={manifestUrl}
        onClose={() => setManifestUrl(null)}
      />
    </>
  );
};

RelatedMedia.defaultProps = {
  thumbnailHeight: DEFAULT_THUMBNAIL_HEIGHT,
  thumbnailWidth: DEFAULT_THUMBNAIL_WIDTH
};

export default RelatedMedia;
