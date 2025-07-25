// @flow

import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { Form } from 'semantic-ui-react';
import moment from 'moment';
import ArrowButtons from '../../../semantic-ui/src/components/ArrowButtons';
import Calendar from '../../../shared/src/utils/Calendar';
import FuzzyDate from '../../../semantic-ui/src/components/FuzzyDate';

import 'moment/locale/ar-sa';
import 'moment/locale/es';
import 'moment/locale/fr';

export default {
  title: 'Components/Semantic UI/FuzzyDate',
  component: FuzzyDate
};

export const Default = () => (
  <FuzzyDate
    description
    onChange={action('change')}
  />
);

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
    accuracy: 1,
    range: false,
    startDate: moment()
      .year(1905)
      .month(2)
      .date(1)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .format('YYYY-MM-DD'),
    endDate: moment()
      .year(1905)
      .month(3)
      .date(1)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .format('YYYY-MM-DD')
  });

  return (
    <FuzzyDate
      date={date}
      onChange={(data) => setDate(data)}
    />
  );
};

const calendars = {
  Gregorian: 'gregorian',
  Hijri: 'hijri'
};

const locales = {
  English: 'en',
  French: 'fr',
  Spanish: 'es',
  Arabic: 'ar-sa'
};

export const Locales = () => {
  const calendar = calendars.Gregorian;
  const locale = locales.English;

  const [date, setDate] = useState({});

  return (
    <div>
      <FuzzyDate
        calendar={calendar}
        date={date}
        locale={locale}
        onChange={(data) => setDate(data)}
      />
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <strong>Start date: </strong>
        <span>{ date.startDate ? new Calendar(locale, calendar).format(date.startDate) : '' }</span>
      </div>
      <div
        style={{
          marginTop: '10px'
        }}
      >
        <strong>End date: </strong>
        <span>{ date.endDate ? new Calendar(locale, calendar).format(date.endDate) : '' }</span>
      </div>
    </div>

  );
};

export const DateConversion = () => {
  const [gDate, setGDate] = useState({});
  const [hDate, setHDate] = useState({});

  return (
    <Form>
      <Form.Group
        width='equal'
      >
        <Form.Input
          label='Hijri date'
        >
          <FuzzyDate
            calendar={Calendar.Calendars.hijri}
            date={hDate}
            onChange={(data) => setHDate(data)}
          />
        </Form.Input>
        <ArrowButtons
          onLeft={() => setHDate(gDate)}
          onRight={() => setGDate(hDate)}
        />
        <Form.Input
          label='Gregorian date'
        >
          <FuzzyDate
            date={gDate}
            onChange={(data) => setGDate(data)}
          />
        </Form.Input>
      </Form.Group>
    </Form>
  );
};
