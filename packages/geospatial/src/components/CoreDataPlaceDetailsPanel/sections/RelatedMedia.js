// @flow

import React, { useState } from 'react';
import { AnnotationPage } from '@peripleo/peripleo';
import { Thumbnail } from '@samvera/clover-iiif/primitives';
import { CoreDataRelatedMedia } from '../../CoreDataTypes';
import { RelatedMediaGallery } from '../../RelatedMediaGallery';

interface RelatedMediaProps {

  data: AnnotationPage<CoreDataRelatedMedia>;

}

export const RelatedMedia = (props: RelatedMediaProps) => {

  const { data } = props;

  const [showGallery, setShowGallery] = useState<CoreDataRelatedMedia>();

  return (
    <div className="p-3 pb-4 grid grid-cols-3 gap-1">
      {data.items.map(item => (
        <Thumbnail 
          key={item.body.id} 
          className="rounded shadow cursor-pointer"
          onClick={() => setShowGallery(item.body)}
          thumbnail={[{
            id: item.body.content_thumbnail_url,
            type: 'Image',
            width: 80,
            height: 80
          }]} />
      ))}

      <RelatedMediaGallery 
        defaultItem={showGallery} 
        onClose={() => setShowGallery(undefined)} />
    </div>
  )

}