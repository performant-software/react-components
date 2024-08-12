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

const useRange = () => ({
  range: {
    min: 1768,
    max: 1777
  },
  refine: () => {}
});

export const Default = withCoreDataContextProvider(() => (
  <FacetTimeline
    useRange={useRange}
    zoom={10}
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
    useRange={useRange}
    zoom={10}
  />
));

export const EventModal = withCoreDataContextProvider(() => {
  const [selectedEvent, setSelectedEvent] = useState();

  return (
    <>
      <FacetTimeline
        onClick={(event) => setSelectedEvent(event)}
        useRange={useRange}
        zoom={10}
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
        useRange={useRange}
        zoom={10}
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
    useRange={useRange}
    zoom={10}
  />
));
