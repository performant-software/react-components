// @flow

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Icon, Portal } from 'semantic-ui-react';
import DateInput from './DateInput';
import './DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type Props = {
  closeOnSelection?: boolean,
  formatOptions?: any,
  locale?: string,
  onChange: (date: ?Date) => void,
  value: ?Date
};

const DatePicker = (props: Props) => {
  const [calendar, setCalendar] = useState(false);

  return (
    <>
      <DateInput
        formatOptions={props.formatOptions}
        locale={props.locale}
        onChange={props.onChange.bind(this)}
        onClick={() => setCalendar(true)}
        value={props.value}
      />
      <Portal
        onClose={() => setCalendar(false)}
        open={calendar}
      >
        <Calendar
          locale={props.locale}
          onChange={(date) => {
            props.onChange(date);
            if (props.closeOnSelection) {
              setCalendar(false);
            }
          }}
          next2Label={<Icon name='angle double right' />}
          nextLabel={<Icon name='chevron right' />}
          prev2Label={<Icon name='angle double left' />}
          prevLabel={<Icon name='chevron left' />}
          value={props.value}
        />
      </Portal>
    </>
  );
};

DatePicker.defaultProps = {
  closeOnSelection: true
};

export default DatePicker;
