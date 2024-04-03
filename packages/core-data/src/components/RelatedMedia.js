// @flow

import { Thumbnail } from '@samvera/clover-iiif/primitives';
import React, { useState } from 'react';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';
import MediaGallery from './MediaGallery';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * A message to display when no records are returned from the API.
   */
  emptyMessage?: string,

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
        className='pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic'
      >
        { props.emptyMessage }
      </div>
    );
  }

  return (
    <div
      className='p-3 pb-4 grid grid-cols-3 gap-1'
    >
      { _.map(data?.items, ({ id, label: { en: label }, thumbnail }) => (
        <div
          className='flex flex-col gap-2'
          key={id}
        >
          <Thumbnail
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
      ))}
      <MediaGallery
        manifestUrl={manifestUrl}
        onClose={() => setManifestUrl(null)}
      />
    </div>
  );
};

RelatedMedia.defaultProps = {
  thumbnailHeight: DEFAULT_THUMBNAIL_HEIGHT,
  thumbnailWidth: DEFAULT_THUMBNAIL_WIDTH
};

export default RelatedMedia;
