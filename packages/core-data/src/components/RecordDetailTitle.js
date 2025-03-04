// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

type Props = {
  /**
   * Class name to apply to the header element.
   */
  className?: string,

  /**
   * The icon to display before the header.
   */
  icon?: string,

  /**
   * The text of the header.
   */
  text: string,
};

const RecordDetailTitle = (props: Props) => (
  <h1
    className={clsx(
      'flex',
      'flex-row',
      'gap-2',
      'items-start',
      'text-[20px]',
      'font-bold',
      'leading-[120%]',
      props.className
    )}
  >
    { props.icon && <Icon name={props.icon} size={24} /> }
    <span>{ props.text }</span>
  </h1>
);

export default RecordDetailTitle;
