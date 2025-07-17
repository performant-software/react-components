// @flow

import React from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * (Optional) Custom Tailwind classes for the pill.
   */
  className?: string,

  /**
   * Text to display inside the pill.
   */
  label: string,

  /**
   * (Optional) Callback fired when the X button is clicked. The X button will only be rendered if onRemove is provided.
   * @param
   */
  onRemove?: (data: any) => any,

  /**
   * If `true`, the button will display with the primary background color.
   */
  primary?: boolean,

  /**
   * If `true`, the button will display with the secondary background color.
   */
  secondary?: boolean
};

const Pill = (props: Props) => (
  <div
    className={clsx(
      'inline-flex',
      'gap-2',
      'justify-center',
      'items-center',
      'rounded-[50px]',
      'text-sm',
      'py-1',
      'pl-2.5',
      { 'pr-1.5': !!props.onRemove },
      { 'pr-2.5': !props.onRemove },
      { 'bg-primary text-white fill-white': props.primary },
      { 'border border-solid border-secondary text-black': !props.primary },
      { 'bg-secondary': props.secondary },
      props.className
    )}
  >
    <span>{props.label}</span>
    {props.onRemove && (
    <button
      aria-label={i18n.t('Pill.remove')}
      className='flex justify-center items-center h-full rounded-full'
      onClick={props.onRemove}
      type='button'
    >
      <Icon
        name='close'
        size={14}
      />
    </button>
    )}
  </div>
);

export default Pill;
