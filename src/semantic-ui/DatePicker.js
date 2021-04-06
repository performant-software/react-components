// @flow

import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { Icon, Transition } from 'semantic-ui-react';
import DateInput from './DateInput';
import './DatePicker.css';

type Props = {
  closeOnSelection?: boolean,
  formatOptions?: any,
  locale?: string,
  onChange: (date: ?Date) => void,
  value: ?Date
};

const DatePicker = (props: Props) => {
  const [calendar, setCalendar] = useState(false);
  const calendarWrapper = useRef(null);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (calendarWrapper.current && !calendarWrapper.current.contains(event.target)) {
        setCalendar(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', onDocumentClick);

    // Unbind the event listener
    return () => document.removeEventListener('mousedown', onDocumentClick);
  }, [calendarWrapper]);

  return (
    <>
      <DateInput
        formatOptions={props.formatOptions}
        locale={props.locale}
        onChange={props.onChange.bind(this)}
        onClick={() => setCalendar(true)}
        value={props.value}
      />
      <Transition
        visible={calendar}
      >
        <div
          ref={calendarWrapper}
          style={{
            position: 'absolute',
            zIndex: '999'
          }}
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
        </div>
      </Transition>
    </>
  );
};

DatePicker.defaultProps = {
  closeOnSelection: true
};

export default DatePicker;
