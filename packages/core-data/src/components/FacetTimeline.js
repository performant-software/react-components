// @flow

import { useTimer } from '@performant-software/shared-components';
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import _ from 'underscore';
import type { Event as EventType } from '../types/Event';
import EventUtils from '../utils/Event';
import FacetSlider, { type Action as ActionType, type ClassNames as ClassNamesType } from './FacetSlider';
import { useEventsService } from '../hooks/CoreData';

type Props = {
  /**
   * Custom actions to render with the FacetSlider.
   */
  actions?: Array<ActionType>,

  /**
   * Class name to apply to the root DOM element.
   */
  className?: string,

  /**
   * Class names to apply to the FacetSlider components.
   */
  classNames?: ClassNamesType,

  /**
   * If `true`, the event popover content will display the event description.
   */
  description?: boolean,

  /**
   * Callback fired when the event popover is clicked.
   */
  onClick?: (event: EventType) => void,

  /**
   * Callback fired when the events are loaded.
   */
  onLoad?: (events: Array<EventType>) => void,

  /**
   * Typesense `useRange` hook.
   */
  useRange: ({ attribute: string }) => ({ refine: (range: [number, number]) => void }) => void,

  /**
   * Zoom level increment.
   */
  zoom?: number
};

const FACET_EVENT_RANGE = 'event_range_facet';

const FacetTimeline = (props: Props) => {
  const [defaultMin, setDefaultMin] = useState();
  const [defaultMax, setDefaultMax] = useState();
  const [events, setEvents] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [range, setRange] = useState();

  const EventsService = useEventsService();
  const { clearTimer, setTimer } = useTimer();

  const ref = useRef();

  const { range: defaultRange, refine } = props.useRange({ attribute: FACET_EVENT_RANGE });

  /**
   * Returns the year value for the passed event.
   *
   * @type {function(*): *}
   */
  const getYear = useCallback((event) => {
    let year;

    const date = event.start_date?.start_date || event.end_date?.start_date;

    if (date) {
      year = new Date(date).getFullYear();
    }

    return year;
  }, []);

  /**
   * Sets the new range and min/max values on the state.
   *
   * @type {(function(*, [*,*]): void)|*}
   */
  const onChange = useCallback((newRange, [newMin, newMax]) => {
    setRange(newRange);
    setMin(newMin);
    setMax(newMax);
  }, []);

  /**
   * Sets the events on the state.
   *
   * @type {(function(*): void)|*}
   */
  const onLoad = useCallback((data) => {
    setEvents(_.map(data.events, (event) => ({
      ...event,
      year: getYear(event)
    })));
  }, []);

  /**
   * Memo-izes the slider value.
   */
  const value = useMemo(() => _.pluck(events, 'year'), [events]);

  /**
   * Loads the list of events when the range or min/max values are changed.
   */
  useEffect(() => {
    if (!range) {
      return;
    }

    // Clear the timeout when the range changes
    clearTimer();

    // Reset the timer to fetch the events
    setTimer(() => (
      EventsService
        .fetchAll({ min_year: range[0], max_year: range[1] })
        .then(onLoad)
    ));

    // Call the refine function to update search results
    refine(range);
  }, [max, min, range]);

  /**
   * Calls the onLoad prop when the events are changed.
   */
  useEffect(() => {
    if (props.onLoad) {
      props.onLoad(events);
    }
  }, [events, props.onLoad]);

  /**
   * Sets the default min/max values based on the facet range.
   */
  useEffect(() => {
    if (!defaultMin && defaultRange?.min) {
      setDefaultMin(defaultRange.min);
      setMin(defaultRange.min);
    }

    if (!defaultMax && defaultRange?.max) {
      setDefaultMax(defaultRange.max);
      setMax(defaultRange.max);
    }
  }, [defaultMin, defaultMax, defaultRange]);

  /**
   * Sets the new range value based on the results of the `useRange` hook.
   */
  useEffect(() => {
    if (defaultRange && range && defaultRange.min !== range[0] && defaultRange.max !== range[1]) {
      setRange([defaultRange.min, defaultRange.max]);
    }
  }, [defaultRange]);

  /**
   * Only render if we have a default min/max value.
   */
  if (!(defaultMin && defaultMax)) {
    return null;
  }

  return (
    <div
      className={clsx(
        'py-7',
        { 'pt-16': !props.description },
        { 'pt-40': props.description },
        props.className
      )}
      ref={ref}
    >
      <div
        className='flex justify-between items-center'
      >
        <button
          aria-label='Slider Left'
          className='p-4 cursor-auto opacity-0'
          type='button'
        >
          <ChevronLeft />
        </button>
        <Slider.Root
          className='relative flex flex-grow h-5 touch-none items-center w-full'
          max={max}
          min={min}
          value={value}
        >
          { _.map(events, (event) => (
            <Popover.Root
              open
            >
              <Popover.Trigger
                asChild
              >
                <Slider.Thumb />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  asChild
                  collisionBoundary={ref?.current}
                  collisionPadding={{
                    top: 10,
                    left: 20,
                    right: 20,
                    bottom: 10
                  }}
                  sideOffset={-20}
                  side='top'
                >
                  <button
                    aria-label={event.name}
                    className={clsx(
                      'bg-white',
                      'hover:bg-white',
                      'p-5',
                      'rounded-md',
                      'shadow-md',
                      'shadow-gray-1000',
                      'max-w-xs',
                      'max-h-36',
                      'overflow-hidden',
                      'transition',
                      'duration-500',
                      'hover:scale-105',
                      'cursor-pointer',
                      'focus:outline-none',
                      'text-left'
                    )}
                    onClick={() => props.onClick && props.onClick(event)}
                    type='button'
                  >
                    <h2>
                      { event.name }
                    </h2>
                    <p>
                      { EventUtils.getDateView(event) }
                    </p>
                    { props.description && (
                      <p
                        className='text-muted'
                      >
                        { event.description }
                      </p>
                    )}
                    <Popover.Arrow
                      className='fill-white'
                    />
                  </button>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          ))}
        </Slider.Root>
        <button
          aria-label='Slider Right'
          className='p-4 cursor-auto opacity-0'
          type='button'
        >
          <ChevronRight />
        </button>
      </div>
      <FacetSlider
        actions={props.actions}
        childrenPosition='top'
        classNames={props.classNames}
        onChange={onChange}
        defaultMin={defaultMin}
        defaultMax={defaultMax}
        zoom={props.zoom}
      />
    </div>
  );
};

export default FacetTimeline;
