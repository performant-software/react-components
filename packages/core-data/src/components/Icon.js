// @flow

import clsx from 'clsx';
import React from 'react';
import Icons from '../icons/icons.svg';

type Props = {
  className?: string,
  name: string,
  size: number
};

const DEFAULT_SIZE = 14;

const Icon = ({ className, name, size = DEFAULT_SIZE }: Props) => (
  <svg
    className={clsx('icon', className)}
    width={size}
    height={size}
  >
    <use
      xlinkHref={`${Icons}#icon-${name}`}
    />
  </svg>
);

export default Icon;
