// @flow

import Slider from 'rc-slider';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type RangerSliderProps } from '../types/InstantSearch';
import './FacetSlider.css';

type Props = FacetProps & RangerSliderProps;

const FacetSlider = ({ useRangeSlider, ...props }: Props) => {
  const {
    start,
    range,
    refine,
  } = useRangeSlider(props);

  const [valueView, setValueView] = useState<Array<number>>([range.min, range.max]);

  /**
   * Resets the value and valueView when the current refinement is cleared.
   */
  useEffect(() => {
    if (start[0] <= range.min && start[1] >= range.max) {
      setValueView([range.min, range.max]);
    }
  }, [range, start]);

  /**
   * Don't render the component if nothing matches the range.
   */
  if (range.min === 0 && range.max === 0) {
    return null;
  }

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
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

FacetSlider.defaultProps = {
  defaultValue: undefined
};

export default FacetSlider;
