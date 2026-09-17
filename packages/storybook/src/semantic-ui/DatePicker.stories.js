// @flow

import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import DatePicker from '../../../semantic-ui/src/components/DatePicker';

export default {
  title: 'Components/Semantic UI/DatePicker'
};

export const Default = () => {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      onChange={(d) => setDate(d)}
      value={date}
    />
  );
};

export const MinMaxDates = () => {
  const [date, setDate] = useState(null);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

  return (
    <DatePicker
      maxDate={maxDate}
      minDate={minDate}
      onChange={(d) => setDate(d)}
      value={date}
    />
  );
};

export const Uncontrolled = () => (
  <DatePicker
    onChange={() => {}}
    value={null}
  />
);

export const AsForm = () => {
  const [date, setDate] = useState(null);

  return (
    <Form>
      <Form.Input
        id='title'
        label='Title'
      />
      <Form.Input
        label='Date'
      >
        <DatePicker
          onChange={(d) => setDate(d)}
          value={date}
        />
      </Form.Input>
      <Form.Input
        aria-label='Description'
        label='Description'
      />
    </Form>
  );
};
