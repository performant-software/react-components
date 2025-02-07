// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

type Props = {
  /**
   * Class name to apply to the list element.
   */
  className?: string,

  /**
   * The icon to display before the header.
   */
  icon?: string,

  /**
   * The text of the item.
   */
  text: string,
};

const RecordDetailItem = (props: Props) => (
  <li
    className={clsx(
      'flex',
      'flex-row',
      'gap-2',
      'py-1.5',
      'items-center',
      'text-[13px]',
      'font-light',
      'leading-[120%]',
      props.className
    )}
  >
    { props.icon && <Icon name={props.icon} size={14} /> }
    <span>{ props.text }</span>
  </li>
);

export default RecordDetailItem;
