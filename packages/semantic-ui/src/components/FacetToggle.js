// @flow

import React from 'react';
import { Checkbox, Label } from 'semantic-ui-react';
import Facet, { type Props as FacetProps } from './Facet';
import { type ToggleRefinementProps } from '../types/InstantSearch';

type Props = FacetProps & ToggleRefinementProps;

const FacetToggle = ({ useToggleRefinement, ...props }: Props) => {
  const {
    value: {
      isRefined,
      count
    },
    refine
  } = useToggleRefinement(props);

  if (!count) {
    return null;
  }

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
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

export default FacetToggle;
