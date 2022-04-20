// @flow

import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './DateInput.css';

type Props = {
  display?: string,
  formatOptions?: any,
  locale?: string,
  onChange: (date: ?Date) => void,
  onClick: () => void,
  value?: ?Date
}

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
