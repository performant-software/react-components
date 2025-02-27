// @flow

import clsx from 'clsx';
import React from 'react';
import _ from 'underscore';
import Icon from './Icon';

type Props = {
  /**
   * Classes applied to the containing div
   */
  className?: string,

  /**
   * Array of crumbs to display, with the most recent last
   */
  history: Array<string>,

  /**
   * Function fired on clicking the back arrow
   */
  onGoBack?: () => void
};

const RecordDetailBreadcrumbs = (props: Props) => (
  <div
    className={clsx(
      'flex',
      'flex-row',
      'items-center',
      'gap-1.5',
      props.className
    )}
  >
    { props.onGoBack && (
      <div role='button' tabIndex='0' onClick={props.onGoBack} onKeyDown={props.onGoBack} className='cursor-pointer'>
        <Icon name='left_arrow' size={16} />
      </div>
    )}
    {
      _.map(props.history, (item, idx) => (
        <span
          className={clsx(
            'text-[13px]',
            'overflow-hidden',
            'text-nowrap',
            { 'font-semibold': idx === 0 },
            { 'shrink-0': idx === props.history.length - 1 },
            { 'text-ellipsis': idx < props.history.length - 1 }
          )}
        >
          { `${idx !== 0 ? ' / ' : ''}${item}` }
        </span>
      ))
    }
  </div>
);

export default RecordDetailBreadcrumbs;
