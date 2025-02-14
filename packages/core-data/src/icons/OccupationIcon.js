// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const OccupationIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='occupation'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=occupation'>
      <path id='Vector' d='M13.5 3.5H11V3C11 2.60218 10.842 2.22064 10.5607 1.93934C10.2794 1.65804 9.89782 1.5 9.5 1.5H6.5C6.10218 1.5 5.72064 1.65804 5.43934 1.93934C5.15804 2.22064 5 2.60218 5 3V3.5H2.5C2.23478 3.5 1.98043 3.60536 1.79289 3.79289C1.60536 3.98043 1.5 4.23478 1.5 4.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V4.5C14.5 4.23478 14.3946 3.98043 14.2071 3.79289C14.0196 3.60536 13.7652 3.5 13.5 3.5ZM6 3C6 2.86739 6.05268 2.74021 6.14645 2.64645C6.24021 2.55268 6.36739 2.5 6.5 2.5H9.5C9.63261 2.5 9.75979 2.55268 9.85355 2.64645C9.94732 2.74021 10 2.86739 10 3V3.5H6V3ZM13.5 4.5V7.10063C11.8124 8.01924 9.92145 8.50034 8 8.5C6.07863 8.50035 4.18776 8.01947 2.5 7.10125V4.5H13.5ZM13.5 12.5H2.5V8.2275C4.21245 9.06512 6.09367 9.50037 8 9.5C9.90637 9.50004 11.7876 9.06459 13.5 8.22688V12.5ZM6.5 7C6.5 6.86739 6.55268 6.74021 6.64645 6.64645C6.74021 6.55268 6.86739 6.5 7 6.5H9C9.13261 6.5 9.25979 6.55268 9.35355 6.64645C9.44732 6.74021 9.5 6.86739 9.5 7C9.5 7.13261 9.44732 7.25979 9.35355 7.35355C9.25979 7.44732 9.13261 7.5 9 7.5H7C6.86739 7.5 6.74021 7.44732 6.64645 7.35355C6.55268 7.25979 6.5 7.13261 6.5 7Z' />
    </g>
  </svg>
);

export default OccupationIcon;
