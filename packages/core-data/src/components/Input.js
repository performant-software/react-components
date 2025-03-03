// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * (Optional) aria-label attribute for the input if not already contained in a label element
   */
  ariaLabel?: string,
  /**
   * (Optional) Extra styles for the input
   */
  className?: string,
  /**
   * (Optional) Whether the user should be able to clear the input.
   * This causes an X button to appear on the righthand side of the input.
   */
  clearable?: boolean,
  /**
   * (Optional) Placeholder text to show when the user hasn't typed anything.
   */
  placeholder?: string,
  /**
   * Callback function telling the component what to do when the user changes the value.
   * @param {string} value
   * @returns
   */
  onBlur: (value: string) => any,
  /**
   * Callback function telling the component what to do when the user changes the value.
   * @param {string} value
   * @returns
   */
  onChange: (value: string) => any,
  /**
   * (Optional) The name of the icon to show on the left side of the component.
   */
  icon?: string,
  /**
   * The value of the field. If undefined, it will start as ''.
   */
  value: string
};

const Input = (props: Props) => {
  const clearable = props.value && (typeof props.clearable === 'undefined' || props.clearable);

  return (
    <div
      className={clsx(
        'flex',
        'gap-4',
        'items-center',
        'justify-center',
        'w-full',
        'border',
        'border-neutral-200',
        'py-3',
        'px-4',
        'h-[40px]',
        'rounded-[50px]',
        'text-md',
        'fill-neutral-800',
        'focus-within:border-primary',
        props.className
      )}
    >
      {props.icon && (
        <Icon
          name={props.icon}
          size={16}
        />
      )}
      <input
        aria-label={props.ariaLabel}
        className='grow bg-transparent focus:outline-none w-full'
        placeholder={props.placeholder}
        onBlur={(e) => props.onBlur(e.target.value)}
        onChange={(e) => props.onChange(e.target.value)}
        type='text'
        value={typeof props.value === 'undefined' ? '' : props.value}
      />
      {clearable && (
        <button
          aria-label={i18n.t('Input.clear')}
          className='p-2 rounded-full flex items-center justify-center relative left-2'
          onClick={() => props.onChange('')}
          type='button'
        >
          <Icon
            name='close'
            size={16}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
