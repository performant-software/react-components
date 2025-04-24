// @flow

import Viewer from '@samvera/clover-iiif/viewer';
import React from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import Modal from './Modal';

type CanvasMetadataPanelProps = {
  canvas?: object,
};
const CanvasMetadataPanel = (props: CanvasMetadataPanelProps) => (
  props.canvas?.metadata ? (
    <dl className='p-6.5 pt-0 text-base'>
      {
        _.map(props.canvas.metadata, (metadatum) => (
          <div>
            <dt className='font-bold mt-3.5 mb-1'>{metadatum.label}</dt>
            <dd>{metadatum.value}</dd>
          </div>
        ))
      }
    </dl>
  ) : (
    <span>{i18n.t('MediaGallery.noMetadata')}</span>
  )
);

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
   * Optional custom label for the canvas-level metadata tab.
   */
  metadataLabel?: String,

  /**
   * Callback fired when the dialog is closed.
   */
  onClose: () => void,
};

/**
 * This component renders a IIIF Viewer for the passed MediaContent record.
 */
const MediaGallery = (props: Props) => (
  <Modal className={props.className} onClose={props.onClose} open>
    <div className='pt-6 pb-2 text-sm w-full text-muted min-h-20'>
      {props.manifestUrl && (
        <Viewer
          iiifContent={props.manifestUrl}
          plugins={[
            {
              id: 'metadata2',
              informationPanel: {
                component: CanvasMetadataPanel,
                label: props.metadataLabel || i18n.t('MediaGallery.metadata'),
              },
            },
          ]}
        />
      )}
    </div>
  </Modal>
);

export default MediaGallery;
