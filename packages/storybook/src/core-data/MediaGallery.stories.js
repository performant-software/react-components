// @flow

import React, { useState } from 'react';
import MediaGallery from '../../../core-data/src/components/MediaGallery';
import Modal from '../../../core-data/src/components/Modal';

export default {
  title: 'Components/Core Data/MediaGallery',
  component: MediaGallery
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
          manifestUrl='/core_data/public/v1/places/1/manifests/1'
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const InModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      description='Testing Media Gallery within a Modal'
      title='Testing Modal'
      open
    >
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
          manifestUrl='/core_data/public/v1/places/1/manifests/1'
          onClose={() => setOpen(false)}
        />
      )}
    </Modal>
  );
};
