// @flow

import { clsx } from 'clsx';
import { scaleLinear } from 'd3-scale';
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
import FacetSlider, { type Action as ActionType, type ClassNames as ClassNamesType } from './FacetSlider';
import Icon from './Icon';
import i18n from '../i18n/i18n';
import Timeline from './Timeline';
import TypesenseUtils from '../utils/Typesense';

/**
 * Timeline display constants.
 */
// account for difference in font size between storybook and CDP
const SVG_WIGGLE_ROOM = 0.5; // helper to line up left and right edges in svg

/**
 * The minimum space between major and minor ticks, in pixels.
 */
const MAJOR_TICKS_MIN_SPACE = 80;
const MINOR_TICKS_MIN_SPACE = 15;

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
   * Class names to apply to the FacetSlider and Timeline components.
   */
  classNames?: ClassNamesType & {
    marker?: string,
  },

  /**
   * Typesense hit events to display, as an array.
   */
  data: Array<EventType>,

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

const FacetTimeline = (props: Props) => {
  const { range = {}, refine, start = [] } = props;

  const from = Math.max(range.min, Number.isFinite(start[0]) ? start[0] : range.min);
  const to = Math.min(range.max, Number.isFinite(start[1]) ? start[1] : range.max);

  const [events, setEvents] = useState();
  const [max, setMax] = useState(range.max);
  const [min, setMin] = useState(range.min);
  const [value, setValue] = useState([from, to]);

  const ref = useRef();
  const [sliderRef, sliderBounds] = useMeasure();

  /**
   * Handle change in min/max: auto-narrow slider bounds if needed
   */
  useEffect(() => {
    setValue((slider) => {
      // if the user zooms in and the slider bounds are outside the
      // zoom window, auto-narrow the slider bounds
      const newSliderVal = [...slider];
      if (min > slider[0]) {
        newSliderVal[0] = min;
      } else if (max < slider[0]) {
        newSliderVal[0] = max;
      }
      if (max < slider[1]) {
        newSliderVal[1] = max;
      } else if (min > slider[1]) {
        newSliderVal[1] = min;
      }
      return newSliderVal;
    });
  }, [min, max]);

  /**
   * Callback to reset the slider position to encompass the full range.
   */
  const onSliderReset = () => {
    setValue([min, max]);
    refine([min, max]);
  };

  /**
   * List of actions to provide to the FacetSlider component.
   */
  const actions = useMemo(() => [{
    className: '-mt-4',
    label: i18n.t('Timeline.resetRange'),
    icon: <Icon name='reset' className='w-5 h-5' />,
    onClick: onSliderReset,
    position: 'right',
    disabled: value[0] === min && value[1] === max
  }], [onSliderReset, value]);

  /**
   * Sets the events on the state.
   *
   * @type {(function(*): void)|*}
   */
  useEffect(() => {
    setEvents(_.map(props.data, (event) => ({
      ...event,
      date: TypesenseUtils.getDate(event)
    })));
  }, [props.data]);

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
   * Helper function to generate major or minor ticks given min/max of the slider,
   * and the width of the slider.
   */
  const generateTicks = useCallback((tMin, tMax, sliderWidth, tickType = 'major') => {
    let nTicks = tMax - tMin;
    const width = sliderWidth - SVG_WIGGLE_ROOM;
    const tickSpacing = width / nTicks;
    if (tickSpacing < MAJOR_TICKS_MIN_SPACE) {
      // ensure at least *_TICKS_MIN_SPACE between ticks
      nTicks = Math.floor(width / (tickType === 'minor' ? MINOR_TICKS_MIN_SPACE : MAJOR_TICKS_MIN_SPACE));
    } else if (tickType === 'minor') {
      // only render minor ticks if some values are not included in major ticks
      return [];
    }
    // use d3-scale to produce scaled tick intervals
    const scale = scaleLinear().domain([tMin, tMax]).range([SVG_WIGGLE_ROOM, width]);
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
  const ticks = useMemo(() => ({
    major: sliderBounds?.width ? generateTicks(min, max, sliderBounds.width, 'major') : [],
    minor: sliderBounds?.width ? generateTicks(min, max, sliderBounds.width, 'minor') : [],
  }), [min, max, sliderBounds.width]);

  return (
    <div
      className={clsx(
        'h-full',
        'flex',
        'flex-col',
        'relative',
        props.className
      )}
      ref={ref}
    >
      <Timeline
        classNames={props.classNames}
        events={events}
        onClick={props.onClick}
        // range.min and range.max are years; actual values of events are dates. Therefore, use
        // value[1] + 1, so that events occuring during final year fall within the visible range.
        range={{ min: value[0], max: value[1] + 1 }}
      />
      <FacetSlider
        actions={[
          ...actions,
          ...props.actions || []
        ]}
        classNames={{
          ...props.classNames,
          range: clsx('cursor-grab', 'active:cursor-grabbing', 'bg-primary-500', 'border', 'border-black', props.classNames?.range),
          root: clsx('ml-14', 'mr-5', props.classNames?.root),
          track: clsx('cursor-grab', 'active:cursor-grabbing', 'h-5', 'mb-4', props.classNames?.track),
          thumb: clsx('opacity-0', 'w-[1px]', props.classNames?.thumb),
        }}
        hideStepButtons
        max={max}
        min={min}
        onValueChange={setValue}
        onValueCommit={refine}
        position='bottom'
        ticks={ticks}
        ref={sliderRef}
        value={value}
      />
    </div>
  );
};

export default FacetTimeline;
