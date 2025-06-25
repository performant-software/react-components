// @flow

import { clsx } from 'clsx';
import { timeTicks } from 'd3-time';
import { scaleTime } from 'd3-scale';
import useMeasure from 'react-use-measure';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import _ from 'underscore';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import i18n from '../i18n/i18n';
import Icon from './Icon';
import type { ClassNames as ClassNamesType } from './FacetSlider';
import type { Event as EventType } from '../types/Event';

type Props = {
  /**
   * Class names to apply to the FacetSlider and Timeline components.
   */
  classNames?: ClassNamesType & {
    marker?: string,
  },

  /**
   * Events to render on the timeline.
   */
  events: Array<EventType>,

  /**
   * Callback fired when an event element is clicked.
   */
  onClick?: (event: EventType) => void,

  /**
   * The current facet min/max values for the timeline range.
   */
  range: {
    max: number,
    min: number
  },
};

/**
 * Helper constants: periods of time in milliseconds.
 */
const MIN_MONTH = 2419200000; // 28 days
const MAX_MONTH = 2678400000; // 31 days

/**
 * Timeline display constants.
 */
// account for difference in font size between storybook and CDP
const ONE_REM = parseFloat(getComputedStyle(document.documentElement).fontSize);
const MARKER_RADIUS = 4; // radius of a circular marker on the timeline
const MARKER_DIAMETER = MARKER_RADIUS * 2;
const MARKER_LINE_OFFSET = 2.25 * ONE_REM; // vertical offset of the marker from the event
const EVENT_LEFT_BORDER = 1; // accounting for the border width
const TIMELINE_PADTOP = 8; // vertical padding between timeline and events
const TIMELINE_HEIGHT = 1; // height of the actual line
const SVG_WIGGLE_ROOM = 0.5; // helper to line up left and right edges in svg
const FRAME_PADDING = 32; // right padding between timeline and frame

/**
 * Width/height of a single event in px.
 */
const EVENT_WIDTH = 11 * ONE_REM; // 11rem
const EVENT_HEIGHT = 2.5 * ONE_REM + TIMELINE_PADTOP; // 2.5rem + timeline padding

/**
 * Maximum width of the frame bounds in px.
 */
const TIMELINE_WIDTH_LIMIT = 3000;

/**
 * The minimum space between major and minor ticks, in pixels.
 */
const MAJOR_TICKS_MIN_SPACE = 80;
const MINOR_TICKS_MIN_SPACE = 15;

/**
 * Zoom and pan constants.
 */
const MIN_ZOOM = 1.0;
const ZOOM_FACTOR = 2.0;
const DRAG_FACTOR = 1.5;

const Timeline = (props: Props) => {
  const [min, setMin] = useState(new Date(props.range.min, 0, 1));
  const [max, setMax] = useState(new Date(props.range.max, 11, 31));
  const [ticksRef, ticksBounds] = useMeasure();
  const [frameRef, frameBounds] = useMeasure();
  const draggableRef = useRef();
  const [dragging, setDragging] = useState(false);

  const [zoom, setZoom] = useState(MIN_ZOOM);

  /**
   * Reset the zoom to MIN_ZOOM if the facet range changes.
   */
  useEffect(() => {
    setZoom(MIN_ZOOM);
  }, [props.range]);

  /**
   * Calculate the timeline's zoomed width as a product of the frame's width.
   */
  const zoomWidth = useMemo(() => (frameBounds.width - FRAME_PADDING) * zoom, [zoom, frameBounds]);

  /**
   * Memoizes the current facet range (years) as JavaScript Date objects
   */
  const range = useMemo(() => ({
    min: new Date(props.range.min, 0, 1),
    max: new Date(props.range.max, 0, 1),
  }), [props.range]);

  /**
   * Re-center the timeline on zoom.
   */
  useEffect(() => {
    const halfFrame = frameBounds.width / 2;
    const halfTimeline = ticksBounds.width / 2;
    const left = halfTimeline - halfFrame;
    draggableRef.current?.scrollTo({ left });
  }, [zoom, frameBounds, ticksBounds, draggableRef]);

  /**
   * Callback for zooming in.
   */
  const onZoomIn = useCallback(() => {
    setZoom((prev) => prev * ZOOM_FACTOR);
  }, [setZoom]);

  /**
   * Callback for zooming out.
   */
  const onZoomOut = useCallback(() => {
    setZoom((prev) => (prev === MIN_ZOOM ? prev : prev / ZOOM_FACTOR));
  }, [setZoom]);

  /**
   * Callback for starting the timeline drag.
   */
  const onDragStart = useCallback((evt: PointerEvent) => {
    setDragging(true);
    draggableRef.current?.setPointerCapture(evt.pointerId);
  }, [draggableRef.current]);

  /**
   * Callback for ending the timeline drag.
   */
  const onDragEnd = useCallback((evt: PointerEvent) => {
    setDragging(false);
    draggableRef.current?.releasePointerCapture(evt.pointerId);
  }, [draggableRef.current]);

  /**
   * Callback for dragging the timeline.
   */
  const onDrag = useCallback((evt: PointerEvent) => {
    if (draggableRef.current?.hasPointerCapture(evt.pointerId)) {
      draggableRef.current.scrollLeft -= evt.movementX * DRAG_FACTOR;
    }
  }, [draggableRef]);

  /**
   * Memoizes the button enabled state for zoom in, which is enabled as long
   * as the timeline width doesn't exceed TIMELINE_WIDTH_LIMIT.
   */
  const canZoomIn = useMemo(() => ticksBounds.width < TIMELINE_WIDTH_LIMIT, [ticksBounds.width, zoom]);

  /**
   * Memoizes the button enabled state for zoom out, which is enabled as long
   * as the current zoom is greater than MIN_ZOOM.
   */
  const canZoomOut = useMemo(() => zoom > MIN_ZOOM, [zoom]);

  /**
   * Helper function to determine if an event is overlapping other events on the timeline.
   */
  const isOverlapping = useCallback(
    (event, prevEvents) => _.some(prevEvents, (prevEvent) => prevEvent.yOffset === event.yOffset
        && event.xOffset < prevEvent.xOffset + EVENT_WIDTH
        && event.xOffset + EVENT_WIDTH > prevEvent.xOffset),
    [],
  );

  /**
   * Memoizes the x/y positions of events relative to the timeline.
   */
  const timelineEvents = useMemo(() => {
    // track the lowest available yOffset in case of overflow
    let overflowYOffset = 0;
    return _.chain(props.events)
      .sortBy('date')
      .filter((event) => event.date >= range.min && event.date <= range.max)
      .reduce((acc, event) => {
        // calculate xOffset by date
        const relativePos = (event.date - range.min) / (range.max - range.min);
        let xOffset = relativePos * ticksBounds.width;
        let anchorRight = false;
        // if this would overflow the timeline, swap the side of the event
        if (xOffset + EVENT_WIDTH > ticksBounds.width) {
          anchorRight = true;
          xOffset -= EVENT_WIDTH;
        }
        // calculate yOffset based on previous events
        let yOffset = 0;
        const eventsTop = frameBounds.height - ticksBounds.height;
        while (isOverlapping({ xOffset, yOffset }, acc)) {
          if ((yOffset + EVENT_HEIGHT * 2) >= eventsTop) {
            // if we are at the top and about to overflow, reset to overflowYOffset
            yOffset = overflowYOffset;
            // increment overflowYOffset for next overflow case
            if (overflowYOffset + EVENT_HEIGHT * 2 < eventsTop) {
              overflowYOffset += EVENT_HEIGHT;
            } else {
              overflowYOffset = 0;
            }
            break;
          }
          // stack vertically on top of the previous events
          yOffset += EVENT_HEIGHT;
        }
        acc.push({
          ...event, xOffset, yOffset, anchorRight
        });
        return acc;
      }, [])
      .value();
  }, [props.events, ticksBounds, frameBounds.height, range]);

  /**
   * Helper function to generate major or minor calendar-based ticks given min/max of the timeline,
   * and the width of the timeline.
   */
  const generateTicks = useCallback((tMin, tMax, timelineWidth, tickType = 'major') => {
    const width = timelineWidth;
    const nMajorTicks = Math.floor(width / MAJOR_TICKS_MIN_SPACE);
    // use d3-scale to produce scaled tick intervals
    const scale = scaleTime().domain([tMin, tMax]).range([0, width]);
    // produce date and x offset for each tick
    const majorTicks = timeTicks(tMin, tMax, nMajorTicks).map((date) => ({
      value: date,
      xOffset: scale(date),
    }));
    // Ensure the last major tick is at tMax (if not already included)
    if (majorTicks.length > 0) {
      if (_.last(majorTicks).value.getTime() < tMax.getTime()) {
        majorTicks.push({ value: tMax, xOffset: scale(tMax), hideVal: true });
      }
      if (_.first(majorTicks).value.getTime() > tMin.getTime()) {
        majorTicks.unshift({ value: tMin, xOffset: scale(tMin), hideVal: true });
      }
    }
    if (tickType === 'minor') {
      // because major ticks aren't evenly distributed due to calendar irregularities,
      // generate unique set of minor ticks per interval between major ticks
      if (majorTicks.length > 1) {
        return _.chain(majorTicks)
          .map((majorTick, i) => {
            if (i > 0) {
              // produce scaled tick intervals according to MINOR_TICKS_MIN_SPACE
              const minDomain = [majorTicks[i - 1].value, majorTick.value];
              if (minDomain[1] - minDomain[0] <= MAX_MONTH) {
                // if the major ticks are spaced <= one month apart, NO minor ticks
                return [];
              }
              const minRange = [majorTicks[i - 1].xOffset, majorTick.xOffset];
              const minWidth = minRange[1] - minRange[0];
              const nMinorTicks = Math.floor(minWidth / MINOR_TICKS_MIN_SPACE);
              const minScale = scaleTime().domain(minDomain).range(minRange).nice();
              const minTicks = _.map(minScale.ticks(nMinorTicks), (date) => ({
                value: date,
                xOffset: minScale(date),
              }));
              // skip the minor ticks that are equivalent to major ticks
              const filtered = _.filter(minTicks, (date) => !_.map(
                minDomain, (d) => d.getTime()
              ).includes(date.value.getTime()));
              return filtered;
            }
            return [];
          })
          .flatten()
          // prevent duplicate ticks
          .uniq(true, (t) => t.value)
          .value();
      }
      return [];
    }
    return majorTicks;
  }, []);

  /**
   * On facet change, update the timeline min and max.
   */
  useEffect(() => {
    setMin(range.min);
    setMax(range.max);
  }, [range.min, range.max]);

  /**
   * Memoize the set of major and minor ticks based on the current min,
   * max, and slider width.
   */
  const ticks = useMemo(() => ({
    major: ticksBounds?.width ? generateTicks(min, max, ticksBounds.width, 'major') : [],
    minor: ticksBounds?.width ? generateTicks(min, max, ticksBounds.width, 'minor') : [],
  }), [min, max, ticksBounds.width]);

  /**
   * Callback to handle displaying dates on the timeline ticks at different
   * resolutions (day, month, year).
   */
  const displayTickDate = useCallback((date, prevDate) => {
    if (ticks?.major?.length > 1) {
      const tickInterval = ticks.major[1].value - ticks.major[0].value;
      if (!prevDate || prevDate?.getFullYear() !== date.getFullYear()) {
        // show every new year encountered
        return date.getFullYear();
      }
      if (tickInterval > MIN_MONTH || prevDate || prevDate?.getMonth() !== date.getMonth()) {
        // less than a year, more than a month between ticks? show month
        return date.toLocaleDateString(undefined, { month: 'short' });
      }
      // less than a month between ticks? show day (numeric)
      return date.toLocaleDateString(undefined, { day: 'numeric' });
    }
    return date.toString();
  }, [ticks.major]);

  return (
    <div
      className='relative'
    >
      <div
        className={clsx(
          'grow',
          'px-4',
          'pt-6',
          'pb-2',
          'flex',
          'flex-col',
          'justify-end',
          'overflow-x-scroll',
          'select-none',
          dragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
        ref={mergeRefs([frameRef, draggableRef])}
        onPointerMove={onDrag}
        onPointerUp={onDragEnd}
        style={{ scrollbarWidth: 'none' }}
      >
        <div className='absolute top-5 right-5 z-30 flex flex-row'>
          <ButtonGroup
            className='h-12'
            rounded
          >
            <Button
              aria-label={i18n.t('Timeline.zoomIn')}
              className={clsx('w-12', 'pl-3', props.classNames?.zoom)}
              disabled={!canZoomIn}
              onClick={onZoomIn}
              primary
            >
              <Icon name='magnifying_glass_plus' size={19} />
            </Button>
            <Button
              aria-label={i18n.t('Timeline.zoomOut')}
              className={clsx('w-12', 'pl-3', props.classNames?.zoom)}
              disabled={!canZoomOut}
              onClick={onZoomOut}
              primary
            >
              <Icon name='magnifying_glass_minus' size={19} />
            </Button>
          </ButtonGroup>
        </div>
        <div
          className='h-full min-h-36 flex flex-col'
          style={{ width: zoomWidth }}
          onPointerDown={onDragStart}
        >
          <div className='grow relative'>
            {_.map(timelineEvents, (event) => (
              <div
                className='w-44 absolute'
                key={event.uuid}
                style={{
                  left: `${event.xOffset}px`,
                  bottom: `${event.yOffset + TIMELINE_PADTOP}px`,
                }}
              >
                <svg
                  className={clsx(
                    'absolute',
                  )}
                  height={event.yOffset + TIMELINE_PADTOP + MARKER_DIAMETER}
                  width={MARKER_DIAMETER}
                  style={{
                    left: `${event.anchorRight
                      ? EVENT_WIDTH + EVENT_LEFT_BORDER - MARKER_RADIUS
                      : -MARKER_RADIUS}px`,
                    top: MARKER_LINE_OFFSET
                  }}
                >
                  <line
                    x1={MARKER_RADIUS}
                    x2={MARKER_RADIUS}
                    y1={0}
                    y2={event.yOffset + TIMELINE_PADTOP + MARKER_RADIUS - TIMELINE_HEIGHT}
                    className='stroke-neutral-300 stroke-[1px]'
                    shapeRendering='crispEdges'
                  />
                  <circle
                    cx={MARKER_RADIUS}
                    cy={event.yOffset + TIMELINE_PADTOP + MARKER_RADIUS - TIMELINE_HEIGHT}
                    r={MARKER_RADIUS}
                    className={clsx(props.classNames?.marker || 'fill-neutral-500')}
                  />
                </svg>
                <button
                  className={clsx(
                    'h-9',
                    'w-44',
                    'px-2',
                    'flex',
                    'items-center',
                    'bg-neutral-100',
                    'active:bg-neutral-300',
                    'outline',
                    'outline-1',
                    'outline-neutral-300',
                    'rounded-tl',
                    'rounded-tr',
                    'relative',
                    'z-10',
                    'hover:z-20',
                    'hover:bg-neutral-200',
                    'text-neutral-800',
                    event.anchorRight ? 'rounded-bl' : 'rounded-br',
                    'mb-1',
                  )}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => props.onClick(event)}
                  type='button'
                >
                  <span className='truncate text-sm'>
                    {event.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div ref={ticksRef} className='w-fill'>
            {ticks && (
              <svg
                className='!overflow-visible w-fill'
                height={40}
                width='100%'
                overflow='visible'
                shapeRendering='crispEdges'
              >
                {/* Baseline */}
                {_.last(ticks.major) && (
                  <line x1='0' y1='0' x2={_.last(ticks.major).xOffset + SVG_WIGGLE_ROOM} y2='0' stroke='currentColor' />
                )}
                {/* Ticks and labels */}
                {_.map(ticks.major, ({ value, xOffset, hideVal }, i) => !hideVal && (
                  <g key={value} transform={`translate(${xOffset}, 0)`}>
                    <line y2={10} stroke='currentColor' />
                    <text
                      className='translate-y-8'
                      key={value}
                      style={{
                        textAnchor: 'middle',
                      }}
                      fill='currentColor'
                    >
                      {displayTickDate(value, i !== 0 ? ticks.major[i - 1].value : null)}
                    </text>
                  </g>
                ))}
                {_.map(ticks.minor, ({ xOffset }, i) => (
                  <g key={i} transform={`translate(${xOffset}, 0)`}>
                    <line y2={5} stroke='currentColor' />
                  </g>
                ))}
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
