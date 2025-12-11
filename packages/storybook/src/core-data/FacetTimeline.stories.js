// @flow

import { faker } from '@faker-js/faker';
import { action } from 'storybook/actions';
import { List } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import _ from 'underscore';
import EventDetails from '../../../core-data/src/components/EventDetails';
import EventsList from '../../../core-data/src/components/EventsList';
import FacetTimeline from '../../../core-data/src/components/FacetTimeline';
import Modal from '../../../core-data/src/components/Modal';
import { useEventsService } from '../../../core-data/src/hooks/CoreData';
import withCoreDataContextProvider from '../hooks/CoreDataContextProvider';

export default {
  title: 'Components/Core Data/FacetTimeline',
  component: FacetTimeline
};

const smallRange = {
  min: 1768,
  max: 1777
};

const largeRange = {
  min: 112,
  max: 2025
};

// mock typesense data
const createEvent = (count, range) => _.times(count, () => {
  // create JS date
  let date = faker.date.between({
    from: `${range.min}-01-01`,
    to: `${range.max}-01-01`
  });
  // convert to Unix date for typesense mock (seconds since epoch)
  date = Math.floor(date.getTime() / 1000);
  return {
    uuid: faker.string.uuid(),
    name: faker.lorem.words({ min: 1, max: 8 }),
    description: faker.lorem.paragraph(),
    start_date: [date, date],
    end_date: []
  };
});

export const Default = () => (
  <FacetTimeline
    data={createEvent(10, smallRange)}
    range={smallRange}
    refine={action('refine')}
  />
);

export const FitBounds = () => (
  <div className='h-[400px] w-[800px]'>
    <FacetTimeline
      data={createEvent(10, smallRange)}
      range={smallRange}
      refine={action('refine')}
    />
  </div>
);

export const LargeRange = () => (
  <div className='h-[500px] p-2'>
    <FacetTimeline
      data={createEvent(50, largeRange)}
      range={largeRange}
      refine={action('refine')}
    />
  </div>
);

export const Styled = () => (
  <div className='h-[450px]'>
    <FacetTimeline
      data={createEvent(10, smallRange)}
      className='bg-gray-1000 text-white'
      classNames={{
        button: 'px-4',
        range: 'bg-white',
        thumb: 'bg-white',
        track: 'bg-gray-400',
        reset: 'text-white',
        marker: 'fill-gray-300'
      }}
      range={smallRange}
      refine={action('refine')}
    />
  </div>
);

export const EventModal = withCoreDataContextProvider(() => {
  const [selectedEvent, setSelectedEvent] = useState();
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const EventsService = useEventsService();

  useEffect(() => {
    EventsService.fetchAll().then((res) => setEvents(res.events));
  }, []);

  useEffect(() => {
    const fakeEvents = createEvent(10, smallRange);
    // get "real" uuids from the EventService mock, so clicking
    // them will bring up their data
    setData(_.map(fakeEvents, (event, i) => ({
      ...event,
      name: events[i]?.name,
      uuid: events[i]?.uuid,
      start_date: event.start_date
    })));
  }, [events]);

  return (
    <>
      <FacetTimeline
        data={data}
        onClick={(event) => setSelectedEvent(event)}
        range={smallRange}
        refine={action('refine')}
      />
      { selectedEvent && (
        <Modal
          className='z-50'
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

export const ListView = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [listView, setListView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  /**
   * Returns true if the passed event is currently selected.
   *
   * @type {unknown}
   */
  const isSelected = useCallback((event) => selectedEvent && selectedEvent.uuid === event.uuid, [selectedEvent]);

  useEffect(() => {
    setData(createEvent(10, smallRange));
  }, []);

  return (
    <>
      <FacetTimeline
        data={data}
        actions={[{
          label: 'Show List',
          icon: (
            <List />
          ),
          onClick: () => setListView(true)
        }]}
        onLoad={setEvents}
        range={smallRange}
        refine={action('refine')}
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
};

// example of a single date at the exact beginning of the range, which
// was causing errors due to timezone conversion
const singleDate = {
  end_date: [-662688000, -631152000],
  end_year: [1949, 1950],
  name: 'African Progressive Association Founded',
  start_date: [-946771200, -915148800],
  start_year: [1940, 1941],
  uuid: '52f568cb-3036-478f-8a0c-62e93c1f0f20'
};

export const SingleItem = () => (
  <FacetTimeline
    data={[singleDate]}
    range={{min: 1940, max: 1954}}
    refine={action('refine')}
    start={[1940, 1954]}
  />
);
