// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const FiltersIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='filters'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=filters'>
      <path id='Vector' d='M7 4L13.5 4M7 4C7 4.55228 6.55228 5 6 5C5.44772 5 5 4.55228 5 4M7 4C7 3.44772 6.55229 3 6 3C5.44772 3 5 3.44771 5 4M2.5 4H5M7 12H13.5M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12M7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12M2.5 12L5 12M11 8L13.5 8M11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8M11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44771 9 8M2.5 8H9' stroke='#262626' strokeWidth='0.8' strokeLinecap='round' strokeLinejoin='round' />
    </g>
  </svg>
);

export default FiltersIcon;
