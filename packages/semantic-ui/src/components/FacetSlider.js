// @flow

import { useTimer } from '@performant-software/shared-components';
import Slider from 'rc-slider';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState
} from 'react';
import { Button, Grid, Input } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type RangeSliderProps } from '../types/InstantSearch';
import './FacetSlider.css';

type Props = FacetProps & RangeSliderProps & {
  editable?: boolean
};

const RADIX = 10;

/**
 * This component can be used with the `useRange` hook from Instant Search Hooks.
 */
const FacetSlider = forwardRef(({ useRangeSlider, ...props }: Props, ref: HTMLElement) => {
  const {
    start,
    range,
    canRefine = true,
    refine
  } = useRangeSlider(props);

  const { min, max } = range;

  const [value, setValue] = useState([min, max]);

  const { clearTimer, setTimer } = useTimer();

  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  /**
   * Parses the input string to an integer.
   *
   * @type {function(*): number}
   */
  const getInputValue = useCallback((str) => parseInt(str, RADIX), []);

  /**
   * Parses the input strings, sets the value on the state, and sets a timer to call "refine".
   *
   * @type {(function(*, *): void)|*}
   */
  const onChange = useCallback((newStart, newEnd) => {
    // Set the new value on the state
    const newValue = [
      getInputValue(newStart) || value[0],
      getInputValue(newEnd) || value[1]
    ];

    setValue(newValue);

    // Use a timer to only refine the value when the user stops typing
    clearTimer();
    setTimer(() => refine(newValue));
  }, [getInputValue, refine]);

  /**
   * Resets the slider min/max values to the default  range.
   *
   * @type {(function(): void)|*}
   */
  const onReset = useCallback(() => {
    setValue([min, max]);
    refine([min, max]);
  }, [max, min, refine]);

  /**
   * Sets the view value when to/from change.
   */
  useEffect(() => {
    setValue([from, to]);
  }, [from, to]);

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      innerRef={ref}
      title={props.title}
      visible={props.visible}
    >
      <div
        className='facet-slider'
      >
        <div
          className='range-container'
        >
          <Slider
            allowCross={false}
            defaultValue={start}
            disabled={!canRefine}
            max={range.max}
            min={range.min}
            onChangeComplete={(v) => refine(v)}
            onChange={(v) => setValue(v)}
            range
            value={value}
          />
        </div>
        <Grid
          columns={2}
        >
          <Grid.Column>
            { !props.editable && value[0] }
            { props.editable && (
              <Input
                onChange={(e, data) => onChange(data.value, value[1])}
                value={value[0]}
              />
            )}
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            { !props.editable && value[1] }
            { props.editable && (
              <Input
                onChange={(e, data) => onChange(value[0], data.value)}
                value={value[1]}
              />
            )}
          </Grid.Column>
        </Grid>
        { props.editable && (
          <div
            className='buttons'
          >
            <Button
              color='red'
              icon='repeat'
              onClick={onReset}
              size='small'
            />
          </div>
        )}
      </div>
    </Facet>
  );
});

FacetSlider.defaultProps = {
  ...Facet.defaultProps,
  editable: false
};

export default FacetSlider;
