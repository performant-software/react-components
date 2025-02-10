// @flow

import { useTimer } from '@performant-software/shared-components';
import * as RadixSlider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import Input from './Input';

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
          <RadixSlider.Thumb
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
   * (Optional) icon to render inside the button element.
   */
  icon?: JSX.Element,

  /**
   * Button label.
   */
  label: string,

  /**
   * Callback fired when the button is clicked.
   */
  onClick: () => void
};

type ClassNames = {
  input: string,
  range: string,
  root: string,
  thumb: string,
  track: string
};

type Props = {
  /**
   * Custom Tailwind CSS class names.
   */
  classNames: ClassNames,

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
   * Value for controlled input.
   */
  value: [number, number]
};

const Slider = (props: Props) => {
  /**
   * Adjusts the values entered by the user based on range
   * and step constraints.
   */
  const onInputCommit = useCallback((vals) => {
    const newVals = vals;

    if (newVals[0] > newVals[1]) {
      newVals.reverse();
    }

    if (typeof props.min !== 'undefined' && newVals[0] <= props.min) {
      newVals[0] = props.min;
    }

    if (typeof props.max !== 'undefined' && newVals[1] >= props.max) {
      newVals[1] = props.max;
    }

    if (newVals[0] === newVals[1]) {
      if (props.max && newVals[1] < props.max) {
        newVals[1] += 1;
      } else if (props.min && newVals[0] > props.min) {
        newVals[0] -= 1;
      }
    }

    props.onValueChange(newVals);

    if (props.onValueCommit) {
      props.onValueCommit(newVals);
    }
  }, [props.onValueCommit, props.onValueChange, props.min, props.max]);

  return (
    <div className='p-4'>
      <div
        className='flex justify-between items-center pt-4'
      >
        <RadixSlider.Root
          className={clsx(
            'relative flex flex-grow h-5 touch-none items-center w-full',
            props.classNames.root
          )}
          max={props.max}
          min={props.min}
          minStepsBetweenThumbs={1}
          onValueChange={props.onValueChange}
          onValueCommit={props.onValueCommit}
          step={1}
          value={props.value}
        >
          <RadixSlider.Track
            className={clsx(
              'relative h-1 w-full grow bg-gray-100',
              props.classNames.track
            )}
          >
            <RadixSlider.Range
              className={clsx(
                'absolute h-full bg-gray-600',
                props.classNames.range
              )}
            />
          </RadixSlider.Track>
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
        </RadixSlider.Root>
      </div>
      <div
        className='flex justify-between w-full py-4'
      >
        <Input
          className={clsx(
            'rounded-md !w-20',
            props.classNames.input
          )}
          clearable={false}
          onBlur={(val) => onInputCommit([parseInt(val, 10), props.value[1]])}
          onChange={(val) => props.onValueChange([parseInt(val, 10), props.value[1]])}
          value={props.value[0]}
        />
        <Input
          className={clsx(
            'rounded-md !w-20',
            props.classNames.input
          )}
          clearable={false}
          onBlur={(val) => onInputCommit([props.value[0], parseInt(val, 10)])}
          onChange={(val) => props.onValueChange([props.value[0], parseInt(val, 10)])}
          value={props.value[1]}
        />
      </div>
    </div>
  );
};

Slider.defaultProps = {
  classNames: {},
  value: []
};

export default Slider;

export type {
  Action,
  ClassNames
};
