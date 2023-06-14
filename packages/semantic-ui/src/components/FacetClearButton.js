// @flow

import React from 'react';
import { useClearRefinements } from 'react-instantsearch-hooks-web';
import { Button, ButtonProps } from 'semantic-ui-react';

type Props = typeof ButtonProps;

const FacetClearButton = (props: Props) => {
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
