import clsx from 'clsx';
import React, { useMemo } from 'react';

interface Props {
  ariaLabel?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  iconOnly?: boolean
  onClick?: (...args: any[]) => any
  size?: 'xs' | 's' | 'base' | 'l' | 'xl'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'filled' | 'outline' | 'plain'
}

const Button: React.FC<Props> = (props) => {
  const size = useMemo(() => props.size || 'base', [props.size]);
  const variant = useMemo(() => props.variant || 'filled', [props.variant]);

  return (
    <button 
      aria-label={props.ariaLabel}
      className={clsx(
        'font-semibold rounded-md outline-offset-2 focus:outline-2 focus:outline-primary disabled:opacity-50',
        {
          'bg-primary text-white hover:brightness-110': variant === 'filled',
          'bg-white border border-zinc-200 hover:bg-zinc-200 dark:hover:bg-white/5 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:disabled:text-zinc-400': variant === 'outline',
          'hover:bg-black/10 dark:text-white dark:hover:bg-transparent dark:disabled:text-zinc-400': variant === 'plain',
          'py-1 px-1': size === 'xs' && props.iconOnly,
          'py-1.5 px-1.5': size === 's' && props.iconOnly,
          'py-2 px-2': size === 'base' && props.iconOnly,
          'py-2.5 px-2.5': size === 'l' && props.iconOnly,
          'py-3 px-3': size === 'xl' && props.iconOnly,
          'py-1 px-2 text-xs': size === 'xs' && !props.iconOnly,
          'py-1 px-2 text-sm': size === 's' && !props.iconOnly,
          'py-1.5 px-2.5 text-sm': size === 'base' && !props.iconOnly,
          'py-2 px-3 text-sm': size === 'l' && !props.iconOnly,
          'py-2 px-4 text-base': size === 'xl' && !props.iconOnly
        },
        props.className
      )}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;
