import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import moment from 'moment';
import FuzzyDate from '../../../src/semantic-ui/FuzzyDate';

export default {
  title: 'Components/Semantic UI/FuzzyDate',
  decorators: [withA11y, withKnobs]
};

export const Default = () => <FuzzyDate onChange={action('change')} />;

export const AsForm = () => (
  <Form>
    <Form.Input
      label='Birth date'
      onChange={action('change')}
    >
      <FuzzyDate />
    </Form.Input>
    <Form.Input
      label='Death date'
      onChange={action('change')}
    >
      <FuzzyDate />
    </Form.Input>
  </Form>
);

export const Controlled = () => {
  const [date, setDate] = useState({});

  return (
    <div>
      <FuzzyDate
        date={date}
        onChange={(data) => setDate(data)}
      />
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <strong>Start date: </strong>
        <span>{ date.startDate ? moment(date.startDate).format('dddd, MMMM Do YYYY') : '' }</span>
      </div>
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <strong>End date: </strong>
        <span>{ date.endDate ? moment(date.endDate).format('dddd, MMMM Do YYYY') : '' }</span>
      </div>
    </div>
  );
};

export const ExisitingValue = () => {
  const [date, setDate] = useState({
    accuracy: 'month',
    range: false,
    startDate: moment()
      .year(1905)
      .month(2)
      .date(1)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .toDate(),
    endDate: moment()
      .year(1905)
      .month(3)
      .date(1)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .toDate()
  });

  return (
    <FuzzyDate
      date={date}
      onChange={(data) => setDate(data)}
    />
  );
};
