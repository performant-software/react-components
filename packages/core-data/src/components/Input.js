// @flow

import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

type Props = {
  className?: string,
  clearable?: boolean,
  placeholder?: string,
  onChange: (value: string) => any,
  icon: string,
  value?: string
};

const Input = (props: Props) => {
  const clearable = typeof props.clearable === 'undefined' ? true : props.clearable;

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
        className='grow bg-transparent'
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        type='text'
        value={props.value || ''}
      />
      {clearable && (
        <button
          className='p-2 rounded-full flex items-center justify-center absolute right-4'
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
