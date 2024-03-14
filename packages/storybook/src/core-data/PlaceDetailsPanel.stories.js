// @flow

import { action } from '@storybook/addon-actions';
import React, { useState, Fragment } from 'react';
import PlaceDetailsPanel from '../../../core-data/src/components/PlaceDetailsPanel';
import place from '../data/Place.json';
import relatedMedia from '../data/RelatedMedia.json';
import relatedPlaces from '../data/RelatedPlaces.json';
import { Button, Modal, Sidebar } from 'semantic-ui-react';
import { Dialog, Transition } from '@headlessui/react';
import '../index.css';

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

export const SidebarVersionTailwind = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={`inset-y-0 left-0 z-50 flex flex-col w-[260px] ${visible ? 'fixed' : 'hidden'} transition-all`}>
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
      </div>
      <Button onClick={() => setVisible(true)}>
        Open Sidebar
      </Button>
    </>
  )
};

export const ModalVersionTailwind = () => {
  const [open, setOpen] = useState(false);
  return (
    <>   
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> 
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </>
  );
}