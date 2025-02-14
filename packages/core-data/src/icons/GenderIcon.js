// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const GenderIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='gender'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=gender'>
      <path id='Vector' d='M11.0001 1.5V2.5H12.7816L11.0941 4.203C10.491 3.74755 9.75595 3.50079 9.00014 3.5C8.06514 3.5 7.19214 3.87 6.53114 4.5315C6.20441 4.85429 5.94501 5.23873 5.76798 5.66253C5.59095 6.08634 5.49982 6.54106 5.49986 7.00035C5.49991 7.45964 5.59114 7.91435 5.76825 8.33812C5.94536 8.76189 6.20484 9.14628 6.53164 9.469C6.96664 9.904 7.48464 10.2165 8.06264 10.375C8.11964 10.3315 8.18364 10.286 8.23464 10.235C8.44421 10.0218 8.5948 9.75788 8.67164 9.469C8.1273 9.4018 7.62118 9.15411 7.23414 8.7655C6.76214 8.294 6.50014 7.668 6.50014 7C6.50014 6.332 6.76264 5.707 7.23514 5.235C7.70614 4.7615 8.33214 4.5 9.00014 4.5C9.66814 4.5 10.2936 4.7625 10.7651 5.235C10.9984 5.46586 11.1835 5.74077 11.3097 6.04376C11.4359 6.34675 11.5006 6.67179 11.5001 7C11.5001 7.4325 11.3776 7.835 11.1721 8.203C11.2201 8.461 11.2501 8.732 11.2501 9C11.2501 9.249 11.2291 9.495 11.1876 9.735C11.2876 9.6535 11.3766 9.561 11.4691 9.469C12.1301 8.807 12.5001 7.935 12.5001 7C12.5001 6.235 12.2481 5.508 11.7971 4.906L13.5001 3.219V5H14.5001V1.5H11.0001ZM7.93764 5.625C7.88064 5.6685 7.81664 5.714 7.76564 5.765C7.54964 5.982 7.40864 6.245 7.32864 6.5315C7.87364 6.6015 8.37114 6.8395 8.76614 7.2345C9.23864 7.706 9.50114 8.332 9.50114 8.9995C9.50114 9.667 9.23864 10.2925 8.76614 10.7645C8.29414 11.2385 7.66814 11.5 7.00014 11.5C6.33214 11.5 5.70664 11.2375 5.23514 10.765C5.00166 10.5343 4.81644 10.2594 4.69025 9.95637C4.56406 9.65335 4.49943 9.32824 4.50014 9C4.50014 8.5675 4.62264 8.165 4.82814 7.797C4.77793 7.53426 4.75183 7.26749 4.75014 7C4.75014 6.751 4.77114 6.505 4.81264 6.265C4.71264 6.3465 4.62414 6.439 4.53114 6.5315C3.87114 7.192 3.50014 8.065 3.50014 9C3.50014 9.765 3.75214 10.492 4.20314 11.094L3.36014 11.9375L2.36014 10.9375L1.64014 11.6405L2.64014 12.6405L1.64014 13.6405L2.36014 14.3605L3.36014 13.3605L4.36014 14.3605L5.06264 13.6405L4.06264 12.6405L4.90664 11.7975C5.50922 12.2536 6.24438 12.5003 7.00014 12.5C7.93514 12.5 8.80814 12.13 9.46914 11.4685C10.1301 10.808 10.5001 9.935 10.5001 9C10.5001 8.065 10.1301 7.193 9.46864 6.531C9.03364 6.096 8.51564 5.7835 7.93764 5.625Z' />
    </g>
  </svg>
);

export default GenderIcon;
