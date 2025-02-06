// @flow

import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { CheckIcon } from '@radix-ui/react-icons';

type Props = {
  /**
   * Callback that determines what to do when the checkbox is clicked.
   * @param {boolean} arg
   * @returns
   */
  onClick: (arg: boolean) => any,
  /**
   * Boolean state of the checkbox.
   */
  checked: boolean,
  /**
   * (Optional) Whether to disable the checkbox.
   */
  disabled?: boolean
}

const Checkbox = (props: Props) => (
  <RadixCheckbox.Root
    checked={props.checked}
    className={clsx(
      '!border-solid',
      'border',
      'h-4',
      'w-4',
      'rounded-sm',
      'flex',
      'items-center',
      'justify-center',
      { 'bg-primary': props.checked },
      { 'hover:bg-primary': props.checked },
      { 'bg-white': !props.checked },
      { 'hover:bg-white': !props.checked },
      { 'border-primary': props.checked },
      { 'border-black': !props.checked }
    )}
    disabled={props.disabled}
    onCheckedChange={props.onClick}
  >
    <RadixCheckbox.Indicator
      className='w-full h-full'
    >
      {props.checked && (
        <CheckIcon
          className='h-3.5 w-3.5 text-white'
        />
      )}
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
);

export default Checkbox;
