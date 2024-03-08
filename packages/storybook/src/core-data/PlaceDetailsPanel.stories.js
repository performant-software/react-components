// @flow

import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import PlaceDetailsPanel from '../../../core-data/src/components/PlaceDetailsPanel';
import place from '../data/Place.json';
import relatedMedia from '../data/RelatedMedia.json';
import relatedPlaces from '../data/RelatedPlaces.json';
import { Button, Modal, Sidebar } from 'semantic-ui-react';

export default {
  title: 'Components/Core Data/PlaceDetailsPanel',
  component: PlaceDetailsPanel
};

export const Default = () => (
  <PlaceDetailsPanel
    onClose={action('close')}
    place={place}
    related={[{
      endpoint: 'media_contents',
      ui_label: 'Related Media',
      data: relatedMedia
    }, {
      endpoint: 'places',
      ui_label: 'Related Places',
      data: relatedPlaces
    }]}
  />
);

export const SidebarVersion = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Sidebar
        visible={visible}
      >
        <PlaceDetailsPanel
          onClose={() => setVisible(false)}
          place={place}
          related={[{
            endpoint: 'media_contents',
            ui_label: 'Related Media',
            data: relatedMedia
          }, {
            endpoint: 'places',
            ui_label: 'Related Places',
            data: relatedPlaces
          }]}
        />
      </Sidebar>
      <Button onClick={() => setVisible(true)}>
        Open Sidebar
      </Button>
    </>
  )
};

export const ModalVersion = () => {
  const [open, setOpen] = useState(false);
  return (
    <>    
      <Modal
        open={open}
      >
        <Modal.Content>
          <PlaceDetailsPanel
            onClose={() => setOpen(false)}
            place={place}
            related={[{
              endpoint: 'media_contents',
              ui_label: 'Related Media',
              data: relatedMedia
            }, {
              endpoint: 'places',
              ui_label: 'Related Places',
              data: relatedPlaces
            }]}
          />
        </Modal.Content>
      </Modal>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </>
  );
};