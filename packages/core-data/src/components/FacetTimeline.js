// @flow

import { Numbers, useTimer } from '@performant-software/shared-components';
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
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
  const { range = {}, refine, start = [] } = props.useRange({ attribute: FACET_EVENT_RANGE });

  const [events, setEvents] = useState();
  const [defaultMax, setDefaultMax] = useState(range.max);
  const [defaultMin, setDefaultMin] = useState(range.min);
  const [max, setMax] = useState(range.max);
  const [min, setMin] = useState(range.min);
  const [value, setValue] = useState([min, max]);

  const EventsService = useEventsService();
  const ref = useRef();
  const { clearTimer, setTimer } = useTimer();

  /**
   * Zooms in the min/max values.
   *
   * @type {(function(): void)|*}
   */
  const onZoomIn = useCallback(() => {
    const newMin = min + props.zoom;
    const newMax = max - props.zoom;

    if (newMin >= newMax) {
      return;
    }

    setMin(newMin);
    setMax(newMax);
  }, [max, min, props.zoom]);

  /**
   * Zooms out the min/max values.
   *
   * @type {(function(): void)|*}
   */
  const onZoomOut = useCallback(() => {
    const newMin = min - props.zoom;
    const newMax = max + props.zoom;

    if (newMin >= newMax) {
      return;
    }

    setMin(newMin);
    setMax(newMax);
  }, [max, min, range, props.zoom]);

  /**
   * Resets the min/max values to the defaults.
   *
   * @type {(function(): void)|*}
   */
  const onZoomReset = useCallback(() => {
    setMin(defaultMin);
    setMax(defaultMax);

    let newStart = value[0];
    let newEnd = value[1];

    if (value[0] < defaultMin) {
      newStart = defaultMin;
    }

    if (value[1] > defaultMax) {
      newEnd = defaultMax;
    }

    setValue([newStart, newEnd]);
  }, [defaultMax, defaultMin, value]);

  /**
   * List of actions to provide to the FacetSlider component.
   */
  const actions = useMemo(() => [{
    label: 'Zoom In',
    icon: <ZoomIn />,
    onClick: onZoomIn
  }, {
    label: 'Zoom Out',
    icon: <ZoomOut />,
    onClick: onZoomOut
  }, {
    label: 'Zoom Reset',
    icon: <RotateCcw />,
    onClick: onZoomReset
  }], [onZoomIn, onZoomOut, onZoomReset]);

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
  const years = useMemo(() => _.pluck(events, 'year'), [events]);

  /**
   * Loads the list of events when the range or min/max values are changed.
   */
  useEffect(() => {
    if (!value) {
      return;
    }

    // Clear the timeout when the range changes
    clearTimer();

    // Reset the timer to fetch the events
    setTimer(() => {
      setEvents([]);

      const params = {
        min_year: value[0],
        max_year: value[1]
      };

      EventsService
        .fetchAll(params)
        .then(onLoad);
    });
  }, [onLoad, max, min, value]);

  /**
   * Calls the onLoad prop when the events are changed.
   */
  useEffect(() => {
    if (props.onLoad) {
      props.onLoad(events);
    }
  }, [events, props.onLoad]);

  /**
   * When the upper and/or lower bounds of the range change, update the value and min/max values.
   */
  useEffect(() => {
    const from = Math.max(range.min, Number.isFinite(start[0]) ? start[0] : range.min);
    const to = Math.min(range.max, Number.isFinite(start[1]) ? start[1] : range.max);

    setValue([from, to]);
    setMin(range.min);
    setMax(range.max);

    if (!defaultMin && range.min) {
      setDefaultMin(range.min);
    }

    if (!defaultMax && range.max) {
      setDefaultMax(range.max);
    }
  }, [range.min, range.max]);

  return (
    <div
      className={clsx(
        { 'pt-24': !props.description },
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
          value={years}
        >
          { _.map(events, (event) => (
            <Popover.Root
              key={event.uuid}
              open
            >
              <Popover.Trigger
                asChild
              >
                <Slider.Thumb />
              </Popover.Trigger>
              <Popover.Portal
                container={ref.current}
              >
                <Popover.Content
                  asChild
                  collisionBoundary={ref?.current}
                  collisionPadding={{
                    top: 10,
                    left: 20,
                    right: 20,
                    bottom: 10
                  }}
                  sideOffset={Numbers.getRandomInt(-30, 10)}
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
                      'text-left',
                      'text-black'
                    )}
                    onClick={() => props.onClick && props.onClick(event)}
                    type='button'
                  >
                    <h2
                      className='font-medium text-base whitespace-nowrap line-clamp-1 text-ellipsis'
                    >
                      { event.name }
                    </h2>
                    <p
                      className='text-muted'
                    >
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
        actions={[
          ...actions,
          ...props.actions || []
        ]}
        classNames={props.classNames}
        max={max}
        min={min}
        onValueChange={setValue}
        onValueCommit={refine}
        position='bottom'
        value={value}
      />
    </div>
  );
};

export default FacetTimeline;
