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
          // Clover IIIF 2.4+ does not like relative URLs
          manifestUrl={`${window.origin}/core_data/public/v1/places/1/manifests/1`}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const InModal = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen1(true)}
        type='button'
      >
        Open  First Modal
      </button>
      { open1 && (
        <Modal
          description='Testing Media Gallery within a Modal'
          title='Testing Modal'
          onClose={() => setOpen1(false)}
          open
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => setOpen2(true)}
              type='button'
            >
              Open  Gallery
            </button>
          </div>
          { open2 && (
            <MediaGallery
              manifestUrl={`${window.origin}/core_data/public/v1/places/1/manifests/1`}
              onClose={() => setOpen2(false)}
            />
          )}
        </Modal>
      )}
    </>

  );
};
