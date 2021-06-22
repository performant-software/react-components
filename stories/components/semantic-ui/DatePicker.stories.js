// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Form } from 'semantic-ui-react';
import DatePicker from '../../../src/semantic-ui/DatePicker';

import 'react-calendar/dist/Calendar.css';

export default {
  title: 'Components/Semantic UI/DatePicker',
  decorators: [withA11y]
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
        label='Description'
      />
    </Form>
  );
};
