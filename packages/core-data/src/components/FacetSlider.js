// @flow

import { Timer } from '@performant-software/shared-components';
import * as Slider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

type MarkerProps = {
  className?: string,
  value: number
};

const SliderMarker = (props: MarkerProps) => {
  const [initialized, setInitialized] = useState(false);
  const [open, setOpen] = useState(false);

  /**
   * If initialized, sets the "open" state to "true".
   */
  useEffect(() => {
    if (!initialized) {
      return;
    }

    setOpen(true);

    Timer.clearSearchTimer();
    Timer.setSearchTimer(() => setOpen(false));
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
          sideOffset={5}
        >
          <div
            className='bg-white p-2 text-black rounded-md shadow-md'
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

type Props = {
  /**
   * Custom Tailwind CSS class names.
   */
  classNames: {
    button: string,
    range: string,
    root: string,
    thumb: string,
    track: string
  },

  /**
   * The maximum facet value.
   */
  max: number,

  /**
   * The minimum facet value.
   */
  min: number,

  /**
   * Callback fired when the range is changed.
   */
  onChange?: ([number, number]) => void,

  /**
   * Number of steps to increment the slider.
   */
  step?: number
};

const FacetSlider = (props: Props) => {
  const [range, setRange] = useState([props.min, props.max]);

  /**
   * Callback fired when the left button is clicked. This function decrements the min range value by the "step" prop.
   *
   * @type {(function(): void)|*}
   */
  const onLeft = useCallback(() => {
    const [start, end] = range;

    let newStart = start - props.step;
    if (newStart < props.min) {
      newStart = props.min;
    }

    setRange([newStart, end]);
  }, [range, props.min, props.step]);

  /**
   * Callback fired when the right button is clicked. This function increments the max range value by the "step" prop.
   *
   * @type {(function(): void)|*}
   */
  const onRight = useCallback(() => {
    const [start, end] = range;

    let newEnd = end + props.step;
    if (newEnd > props.max) {
      newEnd = props.max;
    }

    setRange([start, newEnd]);
  }, [range, props.max, props.step]);

  /**
   * Calls the onChange prop when the range value changes.
   */
  useEffect(() => {
    if (props.onChange) {
      props.onChange(range);
    }
  }, [range]);

  return (
    <>
      <div
        className='flex justify-between items-center pt-4'
      >
        <button
          aria-label='Slider Left'
          className={clsx('px-3 py-3', props.classNames.button)}
          onClick={onLeft}
          type='button'
        >
          <ChevronLeft />
        </button>
        <Slider.Root
          className={clsx(
            'relative flex flex-grow h-5 touch-none items-center w-full',
            props.classNames.root
          )}
          max={props.max}
          min={props.min}
          minStepsBetweenThumbs={1}
          onValueChange={setRange}
          step={1}
          value={range}
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
          <SliderMarker
            className={props.classNames.thumb}
            value={range[0]}
          />
          <SliderMarker
            className={props.classNames.thumb}
            value={range[1]}
          />
        </Slider.Root>
        <button
          aria-label='Slider Right'
          className={clsx('px-3 py-3', props.classNames.button)}
          onClick={onRight}
          type='button'
        >
          <ChevronRight />
        </button>
      </div>
      <div
        className='flex justify-between w-full px-12'
      >
        <div>{ props.min }</div>
        <div>{ props.max }</div>
      </div>
    </>
  );
};

FacetSlider.defaultProps = {
  classNames: {},
  step: 1,
};

export default FacetSlider;
