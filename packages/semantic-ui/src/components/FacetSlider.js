// @flow

import Slider from 'rc-slider';
import React, {
  forwardRef,
  useEffect,
  useState
} from 'react';
import { Grid } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type RangeSliderProps } from '../types/InstantSearch';

import './FacetSlider.css';

type Props = FacetProps & RangeSliderProps;

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

  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

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
            { value[0] }
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            { value[1] }
          </Grid.Column>
        </Grid>
      </div>
    </Facet>
  );
});

FacetSlider.defaultProps = Facet.defaultProps;

export default FacetSlider;
