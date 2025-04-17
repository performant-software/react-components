// @flow

import clsx from 'clsx';
import React, { useMemo } from 'react';

type Props = {
  /**
   * Class name to apply to the root button element.
   */
  className?: string,

  /**
   * Child elements to append to the button.
   */
  children: Node,

  /**
   * If `true`, the button will get the `disabled` HTML attribute and appropriate styles.
   */
  disabled?: boolean,

  /**
   * If `true`, the button will be assumed to contain a single icon.
   */
  icon?: boolean,

  /**
   * If `true`, the button will display with the primary background color.
   */
  primary?: boolean,

  /**
   * If `true`, the button will display with rounded corners.
   */
  rounded?: boolean,

  /**
   * If `true`, the button will display with the secondary background color.
   */
  secondary?: boolean
};

const BACKGROUND_PREFIX = 'bg-';

const Button = (props: Props) => {
  /**
   * Memo-izes the logic to determine if the button background should be white.
   *
   * @type {boolean}
   */
  const isBackgroundWhite = useMemo(() => (
    !(props.primary || props.secondary || props.className?.includes(BACKGROUND_PREFIX))
  ), [props.className, props.primary, props.secondary]);

  return (
    <button
      {...props}
      className={clsx(
        'flex',
        'items-center',
        'gap-2',
        'py-2',
        { 'px-4': !props.icon },
        { 'rounded-full px-2': props.icon },
        { 'bg-white': isBackgroundWhite },
        { 'bg-secondary': props.secondary && !props.disabled },
        { 'border border-solid border-gray-200': !props.primary },
        { 'border border-solid border-transparent bg-primary hover:bg-primary hover:saturate-50 text-white fill-white': props.primary && !props.disabled },
        { 'rounded-md': props.rounded },
        { 'border border-solid border-gray-200 text-gray-400 bg-white hover:bg-white': props.disabled },
        props.className
      )}
      type='button'
    >
      {props.children}
    </button>
  );
};

export default Button;
