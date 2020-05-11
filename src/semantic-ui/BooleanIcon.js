// @flow

import React from 'react';
import { Icon } from 'semantic-ui-react';

type Props = {
  value: boolean
};

const ICON_FALSE = 'times circle outline';
const ICON_TRUE = 'check circle outline';

const COLOR_FALSE = 'red';
const COLOR_TRUE = 'green';

const BooleanIcon = (props: Props) => {
  let name = ICON_FALSE;
  let color = COLOR_FALSE;

  if (props.value) {
    name = ICON_TRUE;
    color = COLOR_TRUE;
  }

  return (
    <Icon
      color={color}
      name={name}
    />
  );
};

export default BooleanIcon;
