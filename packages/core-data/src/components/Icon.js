// @flow

import clsx from 'clsx';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Icons from '../icons/icons.svg?url';

type Props = {
  className?: string,
  name: string,
  size: number,
  style?: any
};

const DEFAULT_SIZE = 16;

const Icon = ({
  className, name, style, size = DEFAULT_SIZE
}: Props) => (
  <svg
    className={clsx('icon', className)}
    width={size}
    height={size}
    viewBox={`0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`}
    preserveAspectRatio='none'
    style={style}
  >
    <use
      xlinkHref={`${Icons}#icon-${name}`}
    />
  </svg>
);

export default Icon;
