// @flow

import React from 'react';
import { Button, type ButtonProps } from 'semantic-ui-react';
import { type ClearRefinementsProps } from '../types/InstantSearch';

type Props = ButtonProps & ClearRefinementsProps;

/**
 * This component is used with the `useClearRefinements` hook from Instant Search Hooks. This component also accepts
 * all of the props of the Semantic UI <code>Button</code> component.
 */
const FacetClearButton = ({ useClearRefinements, ...props }: Props) => {
  const { refine, canRefine } = useClearRefinements(props);

  return (
    <Button
      {...props}
      disabled={!canRefine}
      onClick={() => refine()}
    />
  );
};

export default FacetClearButton;
