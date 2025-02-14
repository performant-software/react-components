// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const TableIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='table'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=table'>
      <path id='Vector' d='M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM2.5 7H5V9H2.5V7ZM6 7H13.5V9H6V7ZM13.5 4V6H2.5V4H13.5ZM2.5 10H5V12H2.5V10ZM13.5 12H6V10H13.5V12Z' />
    </g>
  </svg>
);

export default TableIcon;
