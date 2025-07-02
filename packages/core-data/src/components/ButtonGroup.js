// @flow

import clsx from 'clsx';
import React from 'react';

type Props = {
  children: Node,
  className?: string,
  icon?: boolean,
  rounded?: boolean
};

const ButtonGroup = (props: Props) => (
  <div
    className={clsx(
      'inline-flex',
      { '[&>:first-child]:rounded-s-md [&>:last-child]:rounded-e-md': props.rounded && !props.icon },
      { 'bg-white border border-1 rounded-full [&>*]:border-none': props.icon },
      props.className
    )}
  >
    { props.children }
  </div>
);

export default ButtonGroup;
