// @flow

import Slider from 'rc-slider';
import React, { useEffect, useMemo, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type RangeSliderProps } from '../types/InstantSearch';
import 'rc-slider/assets/index.css';
import './FacetSlider.css';

type Props = FacetProps & RangeSliderProps;

/**
 * This component can be used with the `useRange` hook from Instant Search Hooks.
 */
const FacetSlider = ({ useRangeSlider, ...props }: Props) => {
  const {
    start,
    range,
    refine,
  } = useRangeSlider(props);

  const [valueView, setValueView] = useState<Array<number>>([range.min, range.max]);

  /**
   * Sets the visibility variable based on the range min and max.
   *
   * @type {unknown}
   */
  const visible = useMemo(() => range.min === 0 && range.max === 0, [range.min, range.max]);

  /**
   * Resets the value and valueView when the current refinement is cleared.
   */
  useEffect(() => {
    if (start[0] <= range.min && start[1] >= range.max) {
      setValueView([range.min, range.max]);
    }
  }, [range, start]);

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
      visible={visible}
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
            max={range.max}
            min={range.min}
            onAfterChange={(v) => refine(v)}
            onChange={(v) => setValueView(v)}
            range
            value={valueView}
          />
        </div>
        <Grid
          columns={2}
        >
          <Grid.Column>
            { valueView[0] }
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            { valueView[1] }
          </Grid.Column>
        </Grid>
      </div>
    </Facet>
  );
};

FacetSlider.defaultProps = Facet.defaultProps;

export default FacetSlider;
