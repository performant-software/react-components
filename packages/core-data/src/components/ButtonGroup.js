// @flow

import clsx from 'clsx';
import React from 'react';

type Props = {
  children: Node,
  className?: string,
  rounded?: boolean
};

const ButtonGroup = (props: Props) => (
  <div
    className={clsx(
      'inline-flex',
      { '[&>:first-child]:rounded-s-md [&>:last-child]:rounded-e-md': props.rounded },
      props.className
    )}
  >
    { props.children }
  </div>
);

export default ButtonGroup;
