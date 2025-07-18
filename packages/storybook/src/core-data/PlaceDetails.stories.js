// @flow

import { Dialog, Transition } from '@headlessui/react';
import { action } from 'storybook/actions';
import { X } from 'lucide-react';
import React, { useState, Fragment } from 'react';
import PlaceDetails from '../../../core-data/src/components/PlaceDetails';
import RelatedItem from '../../../core-data/src/components/RelatedItem';
import RelatedItemsList from '../../../core-data/src/components/RelatedItemsList';
import RelatedMedia from '../../../core-data/src/components/RelatedMedia';
import RelatedOrganizations from '../../../core-data/src/components/RelatedOrganizations';
import RelatedPeople from '../../../core-data/src/components/RelatedPeople';
import RelatedPlaces from '../../../core-data/src/components/RelatedPlaces';
import RelatedTaxonomies from '../../../core-data/src/components/RelatedTaxonomies';
import { usePlacesService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/PlaceDetails',
  component: PlaceDetails
};

export const Default = withCoreDataContextProvider(() => (
  <PlaceDetails
    id='1'
  />
));

export const Sidebar = withCoreDataContextProvider(() => (
  <aside
    className='flex flex-col relative z-10 h-full w-[260px] bg-white/80 backdrop-blur shadow overflow-y-auto'
  >
    <button
      aria-label='Close'
      className='absolute top-2 right-2 p-1.5 rounded-full z-10 bg-slate-200/60 hover:bg-slate-200 focus:outline-2 focus:outline-offset-2 focus:outline-teal-700'
      onClick={action('close')}
      type='button'
    >
      <X
        className='h-4 w-4'
      />
    </button>
    <PlaceDetails
      id='1'
    />
  </aside>
));

export const Modal = withCoreDataContextProvider(() => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root
        as={Fragment}
        show={open}
      >
        <Dialog
          as='div'
          className='relative z-10'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            />
          </Transition.Child>
          <div
            className='fixed inset-0 z-10 w-screen overflow-y-auto'
          >
            <div
              className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'
            >
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel
                  className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'
                >
                  <PlaceDetails
                    id='1'
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        onClick={() => setOpen(true)}
        type='button'
      >
        Open Modal
      </button>
    </>
  );
});

export const RelatedItems = withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();

  return (
    <>
      <PlaceDetails
        id={1}
      />
      <RelatedItemsList>
        <RelatedItem
          id='media_contents'
          label='Related Media & Documents'
        >
          <RelatedMedia
            className='p-3 pt-1 pb-4'
            itemsPerRow={3}
            onLoad={(params) => (
              PlacesService.fetchRelatedManifests('1', params)
            )}
          />
        </RelatedItem>
        <RelatedItem
          id='organizations'
          label='Related Organizations'
        >
          <RelatedOrganizations
            className='p-3 pt-1 pb-4'
            onLoad={(params) => (
              PlacesService.fetchRelatedOrganizations('1', params)
            )}
          />
        </RelatedItem>
        <RelatedItem
          id='people'
          label='Related People'
        >
          <RelatedPeople
            className='p-3 pt-1 pb-4'
            onLoad={(params) => (
              PlacesService.fetchRelatedPeople('1', params)
            )}
          />
        </RelatedItem>
        <RelatedItem
          id='places'
          label='Related Places'
        >
          <RelatedPlaces
            className='p-3 pt-1 pb-4'
            onLoad={(params) => (
              PlacesService.fetchRelatedPlaces('1', params)
            )}
          />
        </RelatedItem>
        <RelatedItem
          id='taxomonies'
          label='Related Taxonomies'
        >
          <RelatedTaxonomies
            className='p-3 pt-1 pb-4'
            onLoad={(params) => (
              PlacesService.fetchRelatedTaxonomies('1', params)
            )}
          />
        </RelatedItem>
      </RelatedItemsList>
    </>
  );
});
