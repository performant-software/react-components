// @flow

import React from 'react';
import clsx from 'clsx';
import Icon from './Icon';

type Props = {
  /**
   * Text to display inside the pill.
   */
  label: string,
  /**
   * (Optional) Callback fired when the X button is clicked. The X button will only be rendered if onRemove is provided.
   * @param
   */
  onRemove?: (data) => any,
  /**
   * (Optional) Background color for the pill (CSS value, not Tailwind).
   */
  primary?: string,
  /**
   * (Optional) Text color for the pill (CSS value, not Tailwind).
   */
  textColor?: string
}

const Pill = (props: Props) => (
  <div
    className={clsx(
      'text-white',
      'fill-white',
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
      { 'bg-primary': !props.primary }
    )}
    style={{ backgroundColor: props.primary, color: props.textColor }}
  >
    <span>{props.label}</span>
    {props.onRemove && (
    <button
      className='flex justify-center items-center h-full'
      onClick={props.onRemove}
      type='button'
    >
      <Icon
        name='close'
        size={14}
        style={{ fill: props.textColor }}
      />
    </button>
    )}
  </div>
);

export default Pill;
