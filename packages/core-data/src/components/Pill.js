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
   * (Optional) Background color for the pill.
   */
  primary?: string
}

const Pill = (props: Props) => {
  const colorClass = props.primary
    ? `bg-[${props.primary}]`
    : null;

  return (
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
        'pl-1.5',
        { 'pr-2.5': !!props.onRemove },
        { 'pr-1.5': !props.onRemove },
        { [colorClass]: !!colorClass },
        { 'bg-primary': !colorClass }
      )}
    >
      <span>{props.label}</span>
      {props.onRemove && (
        <button
          className='flex justify-center items-center h-full'
          onClick={props.onRemove}
          type='button'
        >
          <Icon
            className='relative'
            name='close'
          />
        </button>
      )}
    </div>
  )
};

export default Pill;
