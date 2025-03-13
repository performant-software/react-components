// @flow

import { Numbers, useTimer } from '@performant-software/shared-components';
import * as Popover from '@radix-ui/react-popover';
import * as Slider from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import { scaleLinear } from 'd3-scale';
import { RotateCcw } from 'lucide-react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import useMeasure from 'react-use-measure';
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
   * The absolute min/max values for the timeline range.
   */
  range: {
    max: number,
    min: number
  },

  /**
   * Callback fired when the slider value(s) are changed.
   *
   * @param any
   */
  refine: (number | [number, number]) => void,

  /**
   * The current value of the slider.
   */
  start: [number, number],
};

// The minimum space between major ticks, in pixels.
const MAJOR_TICKS_MIN_SPACE = 80;
// The minimum space between minor ticks, in pixels.
const MINOR_TICKS_MIN_SPACE = 10;

const FacetTimeline = (props: Props) => {
  const { range = {}, refine, start = [] } = props;

  const from = Math.max(range.min, Number.isFinite(start[0]) ? start[0] : range.min);
  const to = Math.min(range.max, Number.isFinite(start[1]) ? start[1] : range.max);

  const [events, setEvents] = useState();
  const [max, setMax] = useState(range.max);
  const [min, setMin] = useState(range.min);
  const [value, setValue] = useState([from, to]);

  const EventsService = useEventsService();
  const ref = useRef();
  const { clearTimer, setTimer } = useTimer();
  const [sliderRef, sliderBounds] = useMeasure();

  /**
   * Handle change in min/max: auto-narrow slider bounds if needed
   */
  useEffect(() => {
    setValue((slider) => {
      // if the user zooms in and the slider bounds are outside the
      // zoom window, auto-narrow the slider bounds
      const newSliderVal = [...slider];
      if (min > slider[0]) newSliderVal[0] = min;
      else if (max < slider[0]) newSliderVal[0] = max;
      if (max < slider[1]) newSliderVal[1] = max;
      else if (min > slider[1]) newSliderVal[1] = min;
      return newSliderVal;
    });
  }, [min, max]);

  /**
   * Callback to reset the slider position to encompass the full range.
   */
  const onSliderReset = useCallback(() => {
    setValue([min, max]);
  });

  /**
   * List of actions to provide to the FacetSlider component.
   */
  const actions = useMemo(() => [{
    label: 'Zoom Reset',
    icon: <RotateCcw />,
    onClick: onSliderReset,
    disabled: value[0] === min && value[1] === max
  }], [onSliderReset, value]);

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
      year: getYear(event),
      offset: Numbers.getRandomInt(-30, 10)
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
    setValue([from, to]);
    setMin(range.min);
    setMax(range.max);
  }, [from, to, range.min, range.max]);

  /**
   * On load (or slider width change), adjust based on the width of the slider.
   */
  useEffect(() => {
    // for ticks, expand overall range to get round values
    let nTicks = range.max - range.min;
    const tickSpacing = sliderBounds.width / nTicks;
    if (tickSpacing < MAJOR_TICKS_MIN_SPACE) {
      // calculate major ticks
      nTicks = Math.floor(sliderBounds.width / MAJOR_TICKS_MIN_SPACE);
      const scale = scaleLinear()
        .domain([range.min, range.max])
        .range([0, sliderBounds.width]);
      const ticks = scale.ticks(nTicks);
      if (ticks?.length > 2) {
        // adjust the min and max such that no values are outside of the
        // first and last major tick
        let [newMin, newMax] = [min, max];
        const tickInterval = ticks[1] - ticks[0];
        if (_.first(ticks) > range.min) {
          newMin = _.first(ticks) - tickInterval;
          setMin(newMin);
        }
        if (_.last(ticks) < range.max) {
          newMax = _.last(ticks) + tickInterval;
          setMax(newMax);
        }
        if (value[0] === range.min && value[1] === range.max) {
          // if the slider hasn't been changed from the initial range,
          // set it to encompass the new slider min and max
          setValue([newMin, newMax]);
        }
      }
    }
  }, [range.min, range.max, sliderBounds.width]);

  /**
   * Helper function to generate major or minor ticks given min/max of the slider,
   * and the width of the slider.
   */
  const generateTicks = useCallback((tMin, tMax, sliderWidth, tickType = 'major') => {
    let nTicks = tMax - tMin;
    const thumbSpacing = 0.5;
    const width = sliderWidth - thumbSpacing;
    const tickSpacing = width / nTicks;
    if (tickSpacing < MAJOR_TICKS_MIN_SPACE) {
      // ensure at least *_TICKS_MIN_SPACE between ticks
      nTicks = Math.floor(width / (tickType === 'minor' ? MINOR_TICKS_MIN_SPACE : MAJOR_TICKS_MIN_SPACE));
    } else if (tickType === 'minor') {
      // only render minor ticks if some values are not included in major ticks
      return [];
    }
    // use d3-scale to produce scaled tick intervals
    const scale = scaleLinear()
      .domain([tMin, tMax])
      .range([thumbSpacing, width]);
    // produce year and x offset for each tick
    return scale.ticks(nTicks).map((year) => ({
      value: year,
      xOffset: scale(year),
    }));
  }, []);

  /**
   * Memoize the set of major and minor ticks based on the current min,
   * max, and slider width.
   */
  const majorTicks = useMemo(() => (sliderBounds?.width ? generateTicks(
    min, max, sliderBounds.width, 'major'
  ) : []), [min, max, sliderBounds.width]);
  const minorTicks = useMemo(() => (sliderBounds?.width ? generateTicks(
    min, max, sliderBounds.width, 'minor'
  ) : []), [min, max, sliderBounds.width]);

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
        <Slider.Root
          className='relative flex flex-grow h-14 touch-none items-center w-full mb-5'
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
                  sideOffset={event.offset}
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
      </div>
      <FacetSlider
        actions={[
          ...actions,
          ...props.actions || []
        ]}
        classNames={{
          ...props.classNames,
          range: clsx('bg-gray-500', 'border', 'border-black', props.classNames?.range),
          root: clsx('mx-14', props.classNames?.root),
          track: clsx('h-5', 'mb-4', props.classNames?.track),
          thumb: clsx('opacity-0', 'w-[1px]', 'cursor-pointer', props.classNames?.thumb),
        }}
        hideStepButtons
        majorTicks={majorTicks}
        max={max}
        min={min}
        minorTicks={minorTicks}
        onValueChange={setValue}
        onValueCommit={refine}
        position='bottom'
        thumbless
        ref={sliderRef}
        value={value}
      />
    </div>
  );
};

export default FacetTimeline;
