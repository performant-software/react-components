// @flow

import clsx from 'clsx';
import React, { useCallback } from 'react';
import _ from 'underscore';
import type { Event as EventType } from '../types/Item';
import EventUtils from '../utils/Event';
import LoadAnimation from './LoadAnimation';
import { useLoader } from '../hooks/CoreData';

type Props = {
  /**
   * If `true`, the event description will be displayed on the card.
   */
  description?: boolean,

  /**
   * Callback fired when an item in the list is clicked.
   *
   * @param event
   */
  onClick?: (event: EventType) => void,

  /**
   * Callback used to load the list of event records.
   */
  onLoad: () => Promise<any>,

  /**
   * The currently selected event record.
   */
  selected?: EventType
};

const RelatedEvents = (props: Props) => {
  const { data: { events } = {}, loading } = useLoader(props.onLoad, []);

  /**
   * Returns true if the passed event is currently selected.
   *
   * @type {function(*): boolean}
   */
  const isSelected = useCallback((event) => event.uuid === props.selected?.uuid, [props.selected]);

  if (loading) {
    return (
      <LoadAnimation />
    );
  }

  return (
    <ul>
      { _.map(events, (event) => (
        <li>
          <div
            className='min-h-[5.5em] border-b flex flex-col justify-start'
          >
            <button
              className={clsx(
                'py-3',
                'px-4',
                'flex-grow',
                'text-left',
                'inline-flex',
                'flex-col',
                'rounded-none',
                { 'hover:bg-event-selected': isSelected(event) },
                { 'text-white': isSelected(event) },
                { 'bg-event-selected': isSelected(event) }
              )}
              onClick={() => props.onClick(event)}
              type='button'
            >
              <div
                className='flex justify-between w-full items-center'
              >
                <div
                  className='flex-grow'
                >
                  <div>
                    { EventUtils.getDateView(event) }
                  </div>
                  <h2
                    className='text-xl font-bold'
                  >
                    { event.name }
                  </h2>
                </div>
              </div>
              { props.description && (
                <p
                  className={clsx(
                    'py-2',
                    { 'text-muted': !isSelected(event) }
                  )}
                >
                  { event.description }
                </p>
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

RelatedEvents.defaultProps = {
  description: true,
  onClick: () => {}
};

export default RelatedEvents;
