// @flow

import React, { useCallback } from 'react';
import EventUtils from '../utils/Event';
import EventsService from '../services/Events';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * Identifier for the event to fetch.
   */
  id: string
};

/**
 * This component renders the details for a single event.
 *
 * @param props
 * @returns {JSX.Element|null}
 *
 * @constructor
 */
const EventDetails = (props: Props) => {
  /**
   * Loads the event record.
   *
   * @type {function(*, *): Promise<*>}
   */
  const onLoad = useCallback((baseUrl, projectIds) => (
    EventsService.fetchOne(baseUrl, props.id, projectIds)
  ), [props.id]);

  const { data: event, loading } = useLoader(onLoad);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  if (!event) {
    return null;
  }

  return (
    <div>
      <h1
        className='pr-6 py-1 font-bold text-xl'
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
