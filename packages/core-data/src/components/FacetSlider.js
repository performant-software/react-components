// @flow

import { useTimer } from '@performant-software/shared-components';
import * as Slider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, {
  forwardRef, useCallback, useEffect, useMemo, useState
} from 'react';
import _ from 'underscore';

type MarkerProps = {
  className?: string,
  position: 'top' | 'bottom' | 'left' | 'right',
  value: number
};

const SliderMarker = (props: MarkerProps) => {
  const [initialized, setInitialized] = useState(false);
  const [open, setOpen] = useState(false);

  const { clearTimer, setTimer } = useTimer();

  /**
   * If initialized, sets the "open" state to "true".
   */
  useEffect(() => {
    if (!initialized) {
      return;
    }

    // Set the open state to "true"
    setOpen(true);

    // Clear existing timers
    clearTimer();

    // Set a new timer
    setTimer(() => setOpen(false));
  }, [props.value]);

  /**
   * Sets the initialized state.
   */
  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [props.value]);

  return (
    <Tooltip.Provider>
      <Tooltip.Root
        open={open}
      >
        <Tooltip.Trigger
          asChild
        >
          <Slider.Thumb
            className={clsx(
              'block h-5 w-5 rounded-full bg-gray-600',
              'focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-30',
              props.className
            )}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          />
        </Tooltip.Trigger>
        <Tooltip.Content
          side={props.position}
          sideOffset={5}
        >
          <div
            className='bg-white p-2 text-black rounded-md shadow-md shadow-gray-1000'
          >
            { props.value }
          </div>
          <Tooltip.Arrow
            className='fill-white'
          />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

SliderMarker.defaultProps = {
  position: 'top'
};

type Action = {
  /**
   * Class name to apply to the button element.
   */
  className?: string,

  /**
   * (Optional) boolean to conditionally disable the action.
   */
  disabled?: boolean,

  /**
   * (Optional) icon to render inside the button element.
   */
  icon?: JSX.Element,

  /**
   * Button label.
   */
  label: string,

  /**
   * Position of the action relative to the slider.
   */
  position?: 'right' | 'bottom',

  /**
   * Callback fired when the button is clicked.
   */
  onClick: () => void
};

type ClassNames = {
  button: string,
  range: string,
  root: string,
  thumb: string,
  track: string,
  zoom: string
};

type Tick = {
  value: number,
  xOffset: number,
}

type Ticks = {
  major: Array<Tick>,
  minor?: Array<Tick>,
}

type Props = {
  /**
   * Custom actions to render as buttons.
   */
  actions?: Array<Action>,

  /**
   * Custom Tailwind CSS class names.
   */
  classNames: ClassNames,

  /**
   * True if the step buttons should be hidden.
   */
  hideStepButtons?: boolean,

  /**
   * The maximum facet value.
   */
  max?: number,

  /**
   * The minimum facet value.
   */
  min?: number,

  /**
   * Callback fired when the range is changed.
   */
  onValueChange: (value: [number, number]) => void,

  /**
   * Callback fired when the range is done changing.
   */
  onValueCommit?: (value: [number, number]) => void,

  /**
   * Position of the value tooltip marker.
   */
  position?: 'top' | 'bottom' | 'left' | 'right',

  /**
   * Number of steps to increment the slider.
   */
  step?: number,

  /**
   * Ticks to render below the slider.
   */
  ticks?: Ticks,

  /**
   * Value for controlled input.
   */
  value: [number, number]
};

const FacetSlider = forwardRef((props: Props, ref: HTMLElement) => {
  const { clearTimer, setTimer } = useTimer();

  /**
   * Callback fired when the left button is clicked. This function decrements the min range value by the "step" prop.
   *
   * @type {(function(): void)|*}
   */
  const onLeft = useCallback(() => {
    const [start, end] = props.value;

    let newStart = start - props.step;
    if (newStart < props.min) {
      newStart = props.min;
    }

    props.onValueChange([newStart, end]);

    // If provided, delay the onValueCommit function call
    if (props.onValueCommit) {
      clearTimer();
      setTimer(() => props.onValueCommit([newStart, end]));
    }
  }, [props.min, props.onValueChange, props.onValueCommit, props.step, props.value]);

  /**
   * Callback fired when the right button is clicked. This function increments the max range value by the "step" prop.
   *
   * @type {(function(): void)|*}
   */
  const onRight = useCallback(() => {
    const [start, end] = props.value;

    let newEnd = end + props.step;
    if (newEnd > props.max) {
      newEnd = props.max;
    }

    props.onValueChange([start, newEnd]);

    // If provided, delay the onValueCommit function call
    if (props.onValueCommit) {
      clearTimer();
      setTimer(() => props.onValueCommit([start, newEnd]));
    }
  }, [props.max, props.onValueChange, props.onValueCommit, props.step, props.value]);

  /**
   * Filtered actions by position.
   */
  const bottomActions = useMemo(() => props.actions?.filter(
    (action) => !action.position || action.position === 'bottom'
  ), [props.actions]);
  const rightActions = useMemo(() => props.actions?.filter(
    (action) => action.position === 'right'
  ), [props.actions]);

  return (
    <>
      <div
        className={clsx(
          'flex',
          'justify-between',
          'items-center',
          'pt-4',
          !_.isEmpty(rightActions) ? 'px-4' : '',
          _.isEmpty(bottomActions) && props.ticks ? 'pb-7' : '',
        )}
      >
        {!props.hideStepButtons && (
          <button
            aria-label='Slider Left'
            className={clsx(
              'px-3',
              'py-3',
              'disabled:opacity-50',
              'disabled:hover:bg-transparent',
              props.classNames.button
            )}
            onClick={onLeft}
            type='button'
          >
            <ChevronLeft />
          </button>
        )}
        <Slider.Root
          className={clsx(
            'relative flex flex-grow h-5 touch-none items-center w-full',
            props.classNames.root
          )}
          max={props.max}
          min={props.min}
          minStepsBetweenThumbs={0}
          onValueChange={props.onValueChange}
          onValueCommit={props.onValueCommit}
          ref={ref}
          step={1}
          value={props.value}
        >
          <Slider.Track
            className={clsx(
              'relative h-1 w-full grow bg-gray-100',
              props.classNames.track
            )}
          >
            <Slider.Range
              className={clsx(
                'absolute h-full bg-gray-600',
                props.classNames.range
              )}
            />
          </Slider.Track>
          {props.ticks
            && (
            <svg
              className='absolute mt-12 z-0 !overflow-visible'
              width='100%'
              height={40}
              overflow='visible'
              shapeRendering='crispEdges'
            >
              {/* Ticks and labels */}
              {props.ticks.major.map(({ value, xOffset }) => (
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
                    {value}
                  </text>
                </g>
              ))}
              {props.ticks.minor?.map(({ value, xOffset }) => (
                <g key={value} transform={`translate(${xOffset}, 0)`}>
                  <line y2={5} stroke='currentColor' />
                </g>
              ))}
            </svg>
            )}
          <SliderMarker
            className={props.classNames.thumb}
            position={props.position}
            value={props.value[0]}
          />
          <SliderMarker
            className={props.classNames.thumb}
            position={props.position}
            value={props.value[1]}
          />
        </Slider.Root>
        {!props.hideStepButtons && (
          <button
            aria-label='Slider Right'
            className={clsx(
              'px-3',
              'py-3',
              'disabled:opacity-50',
              'disabled:hover:bg-transparent',
              props.classNames.button
            )}
            onClick={onRight}
            type='button'
          >
            <ChevronRight />
          </button>
        )}
        { !_.isEmpty(rightActions) && (
          <div
            className={clsx(
              'flex justify-center items-center py-3 text-gray-600',
              props.classNames.zoom
            )}
          >
            { _.map(rightActions, (action, index) => (
              <button
                aria-label={action.label}
                className={clsx(
                  'p-3',
                  'disabled:opacity-50',
                  'disabled:hover:bg-transparent',
                  action.className
                )}
                disabled={action.disabled}
                key={index}
                onClick={action.onClick}
                type='button'
              >
                { action.icon }
              </button>
            ))}
          </div>
        )}
      </div>
      {!props.ticks && (
        <div className='flex justify-between w-full px-12'>
          <div>{props.min}</div>
          <div>{props.max}</div>
        </div>
      )}
      { !_.isEmpty(bottomActions) && (
        <div
          className={clsx(
            'flex justify-center items-center w-full py-3 text-gray-600',
            props.classNames.zoom
          )}
        >
          { _.map(bottomActions, (action, index) => (
            <button
              aria-label={action.label}
              className={clsx(
                'p-3',
                'disabled:opacity-50',
                'disabled:hover:bg-transparent',
                props.ticks ? 'mt-5' : '',
                action.className
              )}
              disabled={action.disabled}
              key={index}
              onClick={action.onClick}
              type='button'
            >
              { action.icon }
            </button>
          ))}
        </div>
      )}
    </>
  );
});

FacetSlider.defaultProps = {
  classNames: {},
  step: 1,
  value: []
};

export default FacetSlider;

export type {
  Action,
  ClassNames
};
