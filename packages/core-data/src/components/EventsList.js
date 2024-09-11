// @flow

import clsx from 'clsx';
import React from 'react';
import _ from 'underscore';
import type { Event as EventType } from '../types/Event';
import EventUtils from '../utils/Event';

type Props = {
  /**
   * (Optional) class name to apply to the root element.
   */
  className?: string,

  /**
   * If `true`, the event description will be displayed on the card.
   */
  description?: boolean,

  /**
   * The list of events records to display.
   */
  events: Array<EventType>,

  /**
   * Callback that returns `true` if the passed event is selected.
   */
  isSelected?: (event: EventType) => boolean,

  /**
   * Callback fired when the event row is clicked.
   */
  onClick?: (event: EventType) => void
};

const EventsList = (props: Props) => (
  <ul
    className={props.className}
  >
    { _.map(props.events, (event) => (
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
              { 'hover:bg-event-selected': props.isSelected(event) },
              { 'text-white': props.isSelected(event) },
              { 'bg-event-selected': props.isSelected(event) }
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
                  { 'text-muted': !props.isSelected(event) }
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

EventsList.defaultProps = {
  isSelected: () => false,
  onClick: () => {}
};

export default EventsList;
