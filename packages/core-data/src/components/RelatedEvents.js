// @flow

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback } from 'react';
import _ from 'underscore';
import type { Event as EventType } from '../types/Item';
import EventsList from './EventsList';
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
  const {
    data: { events } = {},
    isNextDisabled,
    isPreviousDisabled,
    loading,
    onNext,
    onPageChange,
    onPrevious,
    page,
    pages = 1
  } = useLoader(props.onLoad, []);

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
    <div>
      <EventsList
        description={props.description}
        events={events}
        isSelected={isSelected}
        onClick={props.onClick}
      />
      { pages > 1 && (
        <div
          className='flex justify-between items-center py-4 px-3 w-full bg-black/10 text-gray-400'
        >
          <button
            aria-label='Previous Page'
            className={clsx(
              'flex',
              'items-center',
              'justify-center',
              'border',
              'border-solid',
              'rounded-full',
              { 'disabled:pointer-events-none': isPreviousDisabled },
              { 'bg-event-selected': !isPreviousDisabled },
              { 'hover:bg-event-selected': !isPreviousDisabled },
              { 'text-white': !isPreviousDisabled },
              { 'border-event-selected': !isPreviousDisabled }
            )}
            disabled={isPreviousDisabled}
            onClick={onPrevious}
            type='button'
          >
            <ChevronLeft />
          </button>
          <div
            className='flex content-center items-center'
          >
            { _.times(pages, (index) => (
              <button
                aria-label={`Page ${index + 1}`}
                className={clsx(
                  'px-3',
                  'py-1',
                  'rounded-none',
                  { 'bg-event-selected': page === index + 1 },
                  { 'hover:bg-event-selected': page === index + 1 },
                  { 'text-white': page === index + 1 }
                )}
                onClick={() => onPageChange(index + 1)}
                type='button'
              >
                { index + 1 }
              </button>
            ))}
          </div>
          <button
            aria-label='Next Page'
            className={clsx(
              'flex',
              'items-center',
              'justify-center',
              'border',
              'border-solid',
              'rounded-full',
              { 'disabled:pointer-events-none': isNextDisabled },
              { 'bg-event-selected': !isNextDisabled },
              { 'hover:bg-event-selected': !isNextDisabled },
              { 'text-white': !isNextDisabled },
              { 'border-event-selected': !isNextDisabled }
            )}
            disabled={isNextDisabled}
            onClick={onNext}
            type='button'
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

RelatedEvents.defaultProps = {
  description: true,
  defaultPage: 1,
  onClick: () => {}
};

export default RelatedEvents;
