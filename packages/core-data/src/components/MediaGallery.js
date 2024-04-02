// @flow

import * as Dialog from '@radix-ui/react-dialog';
import Viewer from '@samvera/clover-iiif/viewer';
import { X } from 'lucide-react';
import React from 'react';

type Props = {
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
  <Dialog.Root
    open={props.manifestUrl}
    onOpenChange={props.onClose}
  >
    <Dialog.Portal>
      <Dialog.Overlay
        className='dialog-overlay'
      />
      <Dialog.Content
        className='dialog-content'
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
        <Dialog.Close
          asChild
        >
          <button
            aria-label='Close'
            className='dialog-close rounded-full'
            type='button'
          >
            <X className='h-7 w-7 p-1.5' />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MediaGallery;
