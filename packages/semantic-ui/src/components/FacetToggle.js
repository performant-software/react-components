// @flow

import React, { useMemo } from 'react';
import { Checkbox, Label } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type ToggleRefinementProps } from '../types/InstantSearch';

type Props = FacetProps & ToggleRefinementProps;

/**
 * This component is used with the `useToggleRefinement` hook from Instant Search Hooks.
 */
const FacetToggle = ({ useToggleRefinement, ...props }: Props) => {
  const {
    value: {
      isRefined,
      count
    },
    refine
  } = useToggleRefinement(props);

  /**
   * Sets the visibility variable based on the count.
   *
   * @type {boolean}
   */
  const visible = useMemo(() => !!count, [count]);

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
      visible={visible}
    >
      <Checkbox
        checked={isRefined}
        label={{
          children: (
            <Label
              circular
              content={count}
              size='small'
            />
          )
        }}
        onClick={() => refine({ isRefined })}
        toggle
      />
    </Facet>
  );
};

FacetToggle.defaultProps = Facet.defaultProps;

export default FacetToggle;
