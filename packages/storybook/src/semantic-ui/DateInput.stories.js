// @flow

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import DateInput from '../../../semantic-ui/src/components/DateInput';

export default {
  title: 'Components/Semantic UI/DateInput',
  component: DateInput,
};

export const Default = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DateInput
      onChange={(d) => setDate(d)}
      onClick={action('click')}
      value={date}
    />
  );
};

export const WithLocale = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DateInput
      locale='de'
      onChange={(d) => setDate(d)}
      onClick={action('click')}
      value={date}
    />
  );
};

export const WithLocaleAndFormatOptions = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DateInput
      formatOptions={{
        weekday: 'long', day: 'numeric', month: 'numeric', hour: 'numeric'
      }}
      locale='fr'
      onChange={(d) => setDate(d)}
      onClick={action('click')}
      value={date}
    />
  );
};

export const WithDisplay = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DateInput
      display={date ? `Today is ${date}` : 'Cleared!'}
      onChange={(d) => setDate(d)}
      onClick={action('click')}
      value={date}
    />
  );
};
