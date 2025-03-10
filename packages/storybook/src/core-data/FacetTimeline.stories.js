// @flow

import { List } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import EventDetails from '../../../core-data/src/components/EventDetails';
import EventsList from '../../../core-data/src/components/EventsList';
import FacetTimeline from '../../../core-data/src/components/FacetTimeline';
import Modal from '../../../core-data/src/components/Modal';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/FacetTimeline',
  component: FacetTimeline
};

const range = {
  min: 1768,
  max: 1777
};

const refine = () => {};

export const Default = withCoreDataContextProvider(() => (
  <FacetTimeline
    range={range}
    refine={refine}
    zoom={1}
  />
));

const largeRange = {
  min: 112,
  max: 2025
};

export const LargeRange = withCoreDataContextProvider(() => (
  <FacetTimeline
    range={largeRange}
    refine={refine}
    zoom={50}
  />
));

export const Styled = withCoreDataContextProvider(() => (
  <FacetTimeline
    className='bg-gray-1000 text-white'
    classNames={{
      button: 'px-4',
      range: 'bg-white',
      thumb: 'bg-white',
      track: 'bg-gray-400',
      zoom: 'text-white'
    }}
    range={range}
    refine={refine}
    zoom={1}
  />
));

export const EventModal = withCoreDataContextProvider(() => {
  const [selectedEvent, setSelectedEvent] = useState();

  return (
    <>
      <FacetTimeline
        onClick={(event) => setSelectedEvent(event)}
        range={range}
        refine={refine}
        zoom={1}
      />
      { selectedEvent && (
        <Modal
          onClose={() => setSelectedEvent(null)}
          open
        >
          <EventDetails
            id={selectedEvent.uuid}
          />
        </Modal>
      )}
    </>
  );
});

export const ListView = withCoreDataContextProvider(() => {
  const [events, setEvents] = useState([]);
  const [listView, setListView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  /**
   * Returns true if the passed event is currently selected.
   *
   * @type {unknown}
   */
  const isSelected = useCallback((event) => selectedEvent && selectedEvent.uuid === event.uuid, [selectedEvent]);

  return (
    <>
      <FacetTimeline
        actions={[{
          label: 'Show List',
          icon: (
            <List />
          ),
          onClick: () => setListView(true)
        }]}
        onLoad={setEvents}
        range={range}
        refine={refine}
        zoom={1}
      />
      { listView && (
        <Modal
          onClose={() => setListView(false)}
          open
        >
          <div
            className='flex gap-4'
          >
            <div
              className='basis-full h-[80vh] overflow-auto'
            >
              <EventsList
                description
                events={events}
                isSelected={isSelected}
                onClick={(event) => setSelectedEvent(event)}
              />
            </div>
            { selectedEvent && (
              <EventDetails
                className='basis-full'
                id={selectedEvent.uuid}
              />
            )}
          </div>
        </Modal>
      )}
    </>
  );
});

export const Description = withCoreDataContextProvider(() => (
  <FacetTimeline
    description
    range={range}
    refine={refine}
    zoom={1}
  />
));
