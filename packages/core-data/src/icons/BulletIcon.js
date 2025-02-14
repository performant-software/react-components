// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const BulletIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='bullet'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=bullet'>
      <path id='Vector' d='M9.75 8C9.75 8.34612 9.64736 8.68446 9.45507 8.97225C9.26278 9.26003 8.98947 9.48434 8.6697 9.61679C8.34993 9.74924 7.99806 9.7839 7.65859 9.71637C7.31913 9.64885 7.00731 9.48218 6.76256 9.23744C6.51782 8.9927 6.35115 8.68087 6.28363 8.34141C6.2161 8.00194 6.25076 7.65007 6.38321 7.3303C6.51566 7.01053 6.73997 6.73722 7.02775 6.54493C7.31554 6.35264 7.65388 6.25 8 6.25C8.46413 6.25 8.90925 6.43437 9.23744 6.76256C9.56563 7.09075 9.75 7.53587 9.75 8Z' />
    </g>
  </svg>
);

export default BulletIcon;
