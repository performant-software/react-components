// @flow

import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

type Props = {
  /**
   * (Optional) Callback that determines what to do when the checkbox is clicked.
   * @param {boolean} arg
   * @returns
   */
  onClick?: (arg: boolean) => any,
  /**
   * Boolean state of the checkbox.
   */
  value: boolean
}

const Checkbox = (props: Props) => (
  <RadixCheckbox.Indicator
    className=''
  >
    <CheckIcon />
  </RadixCheckbox.Indicator>
);

export default Checkbox;
