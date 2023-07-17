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
