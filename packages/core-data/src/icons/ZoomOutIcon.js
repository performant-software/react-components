// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const ZoomOutIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='zoom_out'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=zoom_out'>
      <path id='Vector' d='M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z' />
    </g>
  </svg>
);

export default ZoomOutIcon;
