// @flow

import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './DateInput.css';

type Props = {
  /**
   * Display date, which will override the default date formatting.
   */
  display?: string,
  /**
   * An object containing date-time formatting options used by JavaScript Date objects.
   */
  formatOptions?: DateTimeFormatOptions,
  /**
   * Locale identifier (Unicode CLDR) for formatting dates and times.
   */
  locale?: string,
  /**
   * Callback fired when the date in the input field is changed.
   */
  onChange: (date: ?Date) => void,
  /**
   * Callback fired when the date input field is clicked, typically opening the actual method of
   * input (such as the <code>DatePicker</code> component).
   */
  onClick: () => void,
  /**
   * Current value of the date input form field, as a JavaScript Date object, or null.
   */
  value?: ?Date
}

/**
 * This input component is used to display and clear a date. It must be used with an additional
 * component, such as `DatePicker`, to actually input the date.
 */
const DateInput = (props: Props) => {
  const formatDate = () => {
    let date = '';

    if (props.display) {
      date = props.display;
    } else if (props.value) {
      date = props.value.toLocaleDateString(props.locale, props.formatOptions);
    }

    return date;
  };

  return (
    <Input
      aria-label='Date Input'
      className='date-input icon'
      icon='calendar alternate outline'
      iconPosition='left'
    >
      <Icon
        className='left icon'
        name='calendar alternate outline'
      />
      <input
        onClick={props.onClick.bind(this)}
        readOnly
        type='text'
        value={formatDate()}
      />
      <Icon
        className='right icon'
        name='times'
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          props.onChange(null);
        }}
      />
    </Input>
  );
};

export default DateInput;
