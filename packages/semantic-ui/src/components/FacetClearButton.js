// @flow

import React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
import { type ClearRefinementsProps } from '../hooks/InstantSearch';

type Props = typeof ButtonProps & ClearRefinementsProps;

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
