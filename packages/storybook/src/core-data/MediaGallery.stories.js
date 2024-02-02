// @flow

import React, { useState } from 'react';
import MediaGallery from '../../../core-data/src/components/MediaGallery';

export default {
  title: 'Components/Core Data/MediaGallery',
  component: MediaGallery
};

const item = {
  id: 'https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/media_contents/49123f66-6a4d-47b8-a781-0f31ab63adae',
  record_id: 13,
  title: 'hog-hammock-library.jpeg',
  type: 'MediaContent',
  uuid: '49123f66-6a4d-47b8-a781-0f31ab63adae',
  manifest_url: 'https://iiif-cloud-staging.herokuapp.com/public/resources/013125a9-ad22-43d6-910b-ccc6662c0708/manifest',
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={() => setOpen(true)}
          type='button'
        >
          Open  Gallery
        </button>
      </div>
      { open && (
        <MediaGallery
          defaultItem={item}
          onClose={() => setOpen(false)}
          title='Media & Documents'
        />
      )}
    </>
  );
};
