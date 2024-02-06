// @flow

import * as Dialog from '@radix-ui/react-dialog';
import Viewer from '@samvera/clover-iiif/viewer';
import { Image, X } from 'lucide-react';
import React from 'react';
import type { MediaContent } from '../types/MediaContent';

import './MediaGallery.css';

type Props = {
  /**
   * The MediaContent record contain the IIIF manifest URL.
   */
  defaultItem: MediaContent,

  /**
   * Callback fired when the dialog is closed.
   */
  onClose: () => void,

  /**
   * Title text to display at the top of the dialog.
   */
  title?: string
};

/**
 * This component renders a IIIF Viewer for the passed MediaContent record.
 */
const MediaGallery = (props: Props) => (
  <Dialog.Root
    className='media-gallery'
    onOpenChange={props.onClose}
    open={Boolean(props.defaultItem)}
  >
    <Dialog.Portal>
      <Dialog.Overlay
        className='dialog-overlay'
      />
      <Dialog.Content
        className='dialog-content'
      >
        <Dialog.Title
          className='dialog-title flex items-center'
        >
          <Image
            className='h-4 w-4 mr-1.5'
          />
          { props.title }
        </Dialog.Title>
        <div
          className='pt-6 pb-2 text-sm w-full text-muted min-h-20'
        >
          { Boolean(props.defaultItem) && (
            <Viewer
              iiifContent={props.defaultItem.manifest_url}
              options={{
                informationPanel: {
                  open: false
                }
              }}
            />
          )}
        </div>
        <Dialog.Close
          asChild
        >
          <button
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
