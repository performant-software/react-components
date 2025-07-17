// @flow

import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import Icon from './Icon';

type Props = {
  /**
   * Label to show in the aria-label property for screen readers.
   */
  ariaLabel: string,
  /**
   * (Optional) Tailwind classes for the root button component.
   */
  className?: string,
  /**
   * Boolean state of the checkbox.
   */
  checked: boolean,
  /**
   * (Optional) Whether to disable the checkbox.
   */
  disabled?: boolean,
  /**
   * HTML ID to apply to the checkbox
   */
  id?: string,
  /**
   * Callback that determines what to do when the checkbox is clicked.
   * @param {boolean} arg
   * @returns
   */
  onClick: (arg: boolean) => any
}

const Checkbox = (props: Props) => (
  <RadixCheckbox.Root
    aria-label={props.ariaLabel}
    checked={props.checked}
    className={clsx(
      'rounded-sm hover:bg-transparent',
      props.className
    )}
    disabled={props.disabled}
    id={props.id}
    onCheckedChange={props.onClick}
  >
    <RadixCheckbox.Indicator asChild forceMount>
      <Icon
        className={clsx(
          { 'fill-primary': props.checked },
          { 'fill-black': !props.checked }
        )}
        name={props.checked ? 'checkbox_filled' : 'checkbox'}
      />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
);

export default Checkbox;
