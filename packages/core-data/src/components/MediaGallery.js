// @flow

import Viewer from '@samvera/clover-iiif/viewer';
import React from 'react';
import Modal from './Modal';

type Props = {
  /**
   * Class name to append to the root element.
   */
  className?: string,

  /**
   * URL of the IIIF manifest to render.
   */
  manifestUrl: string,

  /**
   * Callback fired when the dialog is closed.
   */
  onClose: () => void
};

/**
 * This component renders a IIIF Viewer for the passed MediaContent record.
 */
const MediaGallery = (props: Props) => (
  <Modal
    className={props.className}
    onClose={props.onClose}
    open
  >
    <div
      className='pt-6 pb-2 text-sm w-full text-muted min-h-20'
    >
      { props.manifestUrl && (
        <Viewer
          iiifContent={props.manifestUrl}
          options={{
            informationPanel: {
              open: false,
              renderToggle: false
            }
          }}
        />
      )}
    </div>
  </Modal>
);

export default MediaGallery;
