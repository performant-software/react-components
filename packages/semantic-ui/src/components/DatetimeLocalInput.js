// @flow

import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './DatetimeLocalInput.css';

type Props = {
  /**
   * Callback fired when the datetime string in the input field is changed.
   */
  onChange: (dateString: ?String) => void,
  /**
   * Current value of the datetime-local input form field, as a string, or null.
   */
  value?: ?String
}

/**
 * This input component is used to input and display a date and time, using the browser's
 * native date picker.
 */
const DatetimeLocalInput = (props: Props) => (
  <Input
    aria-label='Datetime Local Input'
    className='datetime-local-input icon'
  >
    <input
      onChange={(e) => props.onChange(e.target.value)}
      type='datetime-local'
      value={props.value}
    />
    <Icon
      className='right icon'
      name='times'
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        props.onChange('');
      }}
    />
  </Input>
);

export default DatetimeLocalInput;
