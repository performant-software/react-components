// @flow

import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import Icon from './Icon';

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
    className='rounded-sm'
    disabled={props.disabled}
    onCheckedChange={props.onClick}
  >
    <RadixCheckbox.Indicator asChild forceMount>
      <Icon
        className={clsx(
          { 'fill-primary': props.checked },
          { 'fill-black': !props.checked },
          { 'hover:bg-white': !props.checked },
        )}
        name={props.checked ? 'checkbox-filled' : 'checkbox'}
      />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
);

export default Checkbox;
