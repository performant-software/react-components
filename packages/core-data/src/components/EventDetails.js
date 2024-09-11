// @flow

import React, { useCallback } from 'react';
import EventUtils from '../utils/Event';
import LoadAnimation from './LoadAnimation';
import { useEventsService, useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * (Optional) class name to apply to the root element.
   */
  className?: string,

  /**
   * Identifier for the event to fetch.
   */
  id: string
};

/**
 * This component renders the details for a single event.
 */
const EventDetails = (props: Props) => {
  const EventsService = useEventsService();

  /**
   * Loads the event record.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoad = useCallback(() => EventsService.fetchOne(props.id), [props.id]);

  const { data: { event } = {}, loading } = useLoader(onLoad, {}, [props.id]);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (!event) {
    return null;
  }

  return (
    <div
      className={props.className}
    >
      <h1
        className='pr-6 py-1 font-bold text-2xl'
      >
        { event.name }
      </h1>
      <div
        className='py-1'
      >
        { EventUtils.getDateView(event) }
      </div>
      <p
        className='py-1 text-muted'
      >
        { event.description }
      </p>
    </div>
  );
};

export default EventDetails;
