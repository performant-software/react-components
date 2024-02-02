// @flow

import { AnnotationPage } from '@peripleo/peripleo';
import { Thumbnail } from '@samvera/clover-iiif/primitives';
import React, { useState } from 'react';
import _ from 'underscore';
import type { MediaContent } from '../types/MediaContent';
import MediaGallery from './MediaGallery';

type Props = {
  data: AnnotationPage<MediaContent>,
  thumbnailHeight?: number,
  thumbnailWidth?: number
};

const DEFAULT_THUMBNAIL_HEIGHT = 80;
const DEFAULT_THUMBNAIL_WIDTH = 80;

const RelatedMedia = (props: Props) => {
  const [showGallery, setShowGallery] = useState<MediaContent>();

  return (
    <div
      className='p-3 pb-4 grid grid-cols-3 gap-1'
    >
      { _.map(props.data?.items, (item) => (
        <Thumbnail
          key={item.body.id}
          className='rounded shadow cursor-pointer'
          onClick={() => setShowGallery(item.body)}
          thumbnail={[{
            id: item.body.content_thumbnail_url,
            type: 'Image',
            width: props.thumbnailWidth,
            height: props.thumbnailHeight
          }]}
        />
      ))}
      <MediaGallery
        defaultItem={showGallery}
        onClose={() => setShowGallery(undefined)}
      />
    </div>
  );
};

RelatedMedia.defaultProps = {
  thumbnailHeight: DEFAULT_THUMBNAIL_HEIGHT,
  thumbnailWidth: DEFAULT_THUMBNAIL_WIDTH
};

export default RelatedMedia;
