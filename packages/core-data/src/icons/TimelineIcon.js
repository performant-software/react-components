// @flow

import React from 'react';
import clsx from 'clsx';

type Props = {
    className?: string,
    size?: number,
    style?: any
}

const TimelineIcon = ({ className, size = 16, style }: Props) => (
  <svg
    width={size}
    height={size}
    fill='currentColor'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    id='timeline'
    style={style}
    className={clsx('icon', className)}
  >
    <g id='Icon=timeline'>
      <path d='M1.23336 13.7217H2.39293C2.52617 14.2763 3.02764 14.69 3.62511 14.69C4.22259 14.69 4.72405 14.2763 4.8573 13.7217H6.76812C6.90137 14.2763 7.40283 14.69 8.00031 14.69C8.59778 14.69 9.09924 14.2763 9.23249 13.7217H11.1427C11.276 14.2763 11.7774 14.69 12.3749 14.69C12.9724 14.69 13.4738 14.2763 13.6071 13.7217H14.7667C14.9298 13.7217 15.0625 13.5901 15.0625 13.427C15.0625 13.2639 14.9298 13.1322 14.7667 13.1322H13.607C13.4727 12.5783 12.9719 12.165 12.3749 12.165C11.778 12.165 11.2766 12.5782 11.1428 13.1322H9.23178C9.0975 12.5783 8.59666 12.165 7.99971 12.165C7.40275 12.165 6.90192 12.5783 6.76764 13.1322H4.85659C4.7223 12.5783 4.22147 12.165 3.62452 12.165C3.02756 12.165 2.52673 12.5783 2.39244 13.1322H1.23334C1.07019 13.1322 0.9375 13.2639 0.9375 13.427C0.9375 13.5901 1.07021 13.7217 1.23336 13.7217ZM12.3753 12.7551C12.7483 12.7551 13.0519 13.0572 13.0519 13.4281C13.0519 13.7986 12.7488 14.1012 12.3753 14.1012C12.0018 14.1012 11.6987 13.7991 11.6987 13.4281C11.6987 13.0571 12.0018 12.7551 12.3753 12.7551ZM8.00017 12.7551C8.37315 12.7551 8.67678 13.0572 8.67678 13.4281C8.67678 13.7986 8.37366 14.1012 8.00017 14.1012C7.62665 14.1012 7.32357 13.7991 7.32357 13.4281C7.32357 13.0571 7.62665 12.7551 8.00017 12.7551ZM3.62501 12.7551C3.99799 12.7551 4.30161 13.0572 4.30161 13.4281C4.30161 13.7986 3.9985 14.1012 3.62501 14.1012C3.25149 14.1012 2.9484 13.7991 2.9484 13.4281C2.9484 13.0571 3.25149 12.7551 3.62501 12.7551Z' strokeWidth='0.125' />
      <path d='M8 1C7.01109 1 6.0444 1.29324 5.22215 1.84265C4.3999 2.39206 3.75904 3.17295 3.3806 4.08658C3.00217 5.00021 2.90315 6.00555 3.09608 6.97545C3.289 7.94536 3.76521 8.83627 4.46447 9.53553C5.16373 10.2348 6.05465 10.711 7.02455 10.9039C7.99445 11.0969 8.99979 10.9978 9.91342 10.6194C10.827 10.241 11.6079 9.60009 12.1573 8.77785C12.7068 7.9556 13 6.98891 13 6C12.9986 4.67435 12.4714 3.40339 11.534 2.46601C10.5966 1.52863 9.32565 1.0014 8 1ZM8 10.2308C7.16323 10.2308 6.34526 9.98264 5.64951 9.51775C4.95377 9.05287 4.4115 8.39212 4.09128 7.61904C3.77106 6.84597 3.68728 5.99531 3.85053 5.17462C4.01377 4.35393 4.41671 3.60008 5.0084 3.00839C5.60008 2.41671 6.35393 2.01377 7.17462 1.85052C7.99531 1.68728 8.84597 1.77106 9.61905 2.09128C10.3921 2.4115 11.0529 2.95376 11.5178 3.64951C11.9826 4.34526 12.2308 5.16323 12.2308 6C12.2295 7.12168 11.7833 8.19705 10.9902 8.9902C10.1971 9.78335 9.12168 10.2295 8 10.2308ZM11.0769 6C11.0769 6.10201 11.0364 6.19983 10.9643 6.27196C10.8921 6.34409 10.7943 6.38461 10.6923 6.38461H8C7.89799 6.38461 7.80017 6.34409 7.72804 6.27196C7.65591 6.19983 7.61539 6.10201 7.61539 6V3.30769C7.61539 3.20569 7.65591 3.10786 7.72804 3.03573C7.80017 2.9636 7.89799 2.92308 8 2.92308C8.10201 2.92308 8.19984 2.9636 8.27197 3.03573C8.34409 3.10786 8.38462 3.20569 8.38462 3.30769V5.61538H10.6923C10.7943 5.61538 10.8921 5.65591 10.9643 5.72803C11.0364 5.80016 11.0769 5.89799 11.0769 6Z' />
    </g>
  </svg>
);

export default TimelineIcon;
