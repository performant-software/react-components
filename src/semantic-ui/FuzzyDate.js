// @flow

import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Dropdown,
  Input
} from 'semantic-ui-react';
import moment from 'moment';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './FuzzyDate.css';

type DateResult = {
  accuracy: string,
  endDate: Date,
  range: boolean,
  startDate: Date
};

type DateComponents = {
  date: number,
  month: number,
  year: number
};

type Props = {
  date: DateResult,
  onChange: (data: DateResult) => void
};

type State = {
  accuracy: string,
  endDate: DateComponents,
  range: boolean,
  startDate: DateComponents
};

const ACCURACY_DATE = 'date';
const ACCURACY_MONTH = 'month';
const ACCURACY_YEAR = 'year';

const DEFAULT_DATE = 1;
const DEFAULT_MONTH = 0;
const DEFAULT_YEAR = 0;

const INTEGER_BASE = 10;

const MAX_DATES = 31;
const MAX_YEAR_LENGTH = 6;

class FuzzyDate extends Component<Props, State> {
  /**
   * Constructs a new FuzzyDate component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      accuracy: ACCURACY_YEAR,
      endDate: {},
      range: false,
      startDate: {}
    };
  }

  /**
   * Initializes the FuzzyDate component.
   */
  componentDidMount() {
    if (this.props.date && !_.isEmpty(this.props.date)) {
      this.initializeDate();
    } else {
      this.onAccuracyChange(null, { value: ACCURACY_YEAR });
    }
  }

  /**
   * Sets the end date, converts the date components to JS date object, and calls the onChange prop.
   */
  afterDateChange() {
    this.setEndDate().then(() => {
      const startDate = this.convertToDate(this.state.startDate).toDate();
      const endDate = this.convertToDate(this.state.endDate).toDate();

      const { accuracy, range } = this.state;

      this.props.onChange({
        accuracy,
        range,
        startDate,
        endDate
      });
    });
  }

  /**
   * Converts the passed date components to a momentJS wrapped date.
   *
   * @param date
   *
   * @returns {moment.Moment}
   */
  convertToDate(date: DateComponents) {
    return moment()
      .year(date.year || DEFAULT_YEAR)
      .month(date.month || DEFAULT_MONTH)
      .date(date.date || DEFAULT_DATE)
      .hours(0)
      .minutes(0)
      .seconds(0);
  }

  /**
   * Initializes the date.
   */
  initializeDate() {
    const {
      accuracy,
      range,
      startDate,
      endDate
    } = this.props.date;

    this.setState({
      accuracy,
      range,
      startDate: this.parseDate(startDate),
      endDate: this.parseDate(endDate)
    });
  }

  /**
   * Sets the accuracy value on the state. The start and end date values are also adjusted based on the accuracy.
   *
   * @param e
   * @param value
   */
  onAccuracyChange(e: ?Event, { value }: { value: string }) {
    const accuracy = value;

    this.setState((state) => {
      let endDate = { ...state.endDate };
      let startDate = { ...state.startDate };

      if (accuracy === ACCURACY_MONTH) {
        endDate = { ...endDate, date: DEFAULT_DATE };
        startDate = { ...startDate, date: DEFAULT_DATE };
      } else if (value === ACCURACY_YEAR) {
        endDate = { ...endDate, date: DEFAULT_DATE, month: DEFAULT_MONTH };
        startDate = { ...startDate, date: DEFAULT_DATE, month: DEFAULT_MONTH };
      }

      return {
        accuracy,
        endDate,
        startDate
      };
    });
  }

  /**
   * Sets the date value on the state.
   *
   * @param property
   * @param e
   * @param value
   */
  onDateChange(property: string, e: ?Event, { value }: { value: string }) {
    this.setState((state) => ({
      [property]: {
        ...state[property],
        date: value
      }
    }), this.afterDateChange.bind(this));
  }

  /**
   * Sets the month value on the state.
   *
   * @param property
   * @param e
   * @param value
   */
  onMonthChange(property: string, e: ?Event, { value }: { value: string }) {
    this.setState((state) => ({
      [property]: {
        ...state[property],
        month: value
      }
    }), this.afterDateChange.bind(this));
  }

  /**
   * Sets the range value on the set.
   */
  onRangeChange() {
    this.setState((state) => ({ range: !state.range }), this.afterDateChange.bind(this));
  }

  /**
   * Sets the year value on the state.
   *
   * @param property
   * @param e
   * @param value
   */
  onYearChange(property: string, e: ?Event, { value }: { value: string }) {
    if (value && value.length > MAX_YEAR_LENGTH) {
      return;
    }

    this.setState((state) => ({
      [property]: {
        ...state[property],
        year: parseInt(value, INTEGER_BASE)
      }
    }), this.afterDateChange.bind(this));
  }

  /**
   * Parses the passed date into date, month, year components.
   *
   * @param date
   *
   * @returns {{date: number, month: number, year: number}}
   */
  parseDate(date: Date) {
    const m = moment(date);

    return {
      date: m.date(),
      month: m.month(),
      year: m.year()
    };
  }

  /**
   * Renders the FuzzyDate component.
   *
   * @returns {*}
   */
  render() {
    return (
      <div
        className='fuzzy-date'
      >
        <div
          className='accuracy-container'
        >
          <Checkbox
            checked={this.state.accuracy === ACCURACY_YEAR}
            label={i18n.t('FuzzyDate.accuracy.year')}
            name='accuracy'
            onChange={this.onAccuracyChange.bind(this)}
            radio
            value={ACCURACY_YEAR}
          />
          <Checkbox
            checked={this.state.accuracy === ACCURACY_MONTH}
            label={i18n.t('FuzzyDate.accuracy.month')}
            name='accuracy'
            onChange={this.onAccuracyChange.bind(this)}
            radio
            value={ACCURACY_MONTH}
          />
          <Checkbox
            checked={this.state.accuracy === ACCURACY_DATE}
            label={i18n.t('FuzzyDate.accuracy.date')}
            name='accuracy'
            onChange={this.onAccuracyChange.bind(this)}
            radio
            value={ACCURACY_DATE}
          />
        </div>
        <div>
          { this.renderYear('startDate') }
          { this.renderMonth('startDate') }
          { this.renderDate('startDate') }
          { !this.state.range && (
            <Button
              basic
              compact
              icon='plus'
              onClick={this.onRangeChange.bind(this)}
            />
          )}
        </div>
        { this.state.range && (
          <div>
            { this.renderYear('endDate') }
            { this.renderMonth('endDate') }
            { this.renderDate('endDate') }
            <Button
              basic
              compact
              icon='times'
              onClick={this.onRangeChange.bind(this)}
            />
          </div>
        )}
      </div>
    );
  }

  /**
   * Renders the date dropdown for the passed property.
   *
   * @param property
   *
   * @returns {null|*}
   */
  renderDate(property: string) {
    if (this.state.accuracy !== ACCURACY_DATE) {
      return null;
    }

    const date = this.state[property];

    const dates = date.month && date.year
      ? moment().month(date.month).year(date.year).daysInMonth()
      : MAX_DATES;

    return (
      <div
        className='date-part-container'
      >
        <label
          htmlFor='date-dropdown'
        >
          { i18n.t('FuzzyDate.labels.date') }
        </label>
        <Dropdown
          id='date-dropdown'
          onChange={this.onDateChange.bind(this, property)}
          options={_.range(1, dates + 1).map((i) => ({ key: i, value: i, text: i }))}
          selection
          value={date.date || DEFAULT_DATE}
        />
      </div>
    );
  }

  /**
   * Renders the month dropdown for the passed property.
   *
   * @param property
   *
   * @returns {null|*}
   */
  renderMonth(property: string) {
    if (this.state.accuracy !== ACCURACY_DATE && this.state.accuracy !== ACCURACY_MONTH) {
      return null;
    }

    return (
      <div
        className='date-part-container'
      >
        <label
          htmlFor='month-dropdown'
        >
          { i18n.t('FuzzyDate.labels.month') }
        </label>
        <Dropdown
          id='month-dropdown'
          onChange={this.onMonthChange.bind(this, property)}
          options={_.map(moment.months(), (m, i) => ({ key: i, value: i, text: i18n.t(`FuzzyDate.months.${m}`) }))}
          selection
          value={this.state[property].month || DEFAULT_MONTH}
        />
      </div>
    );
  }

  /**
   * Renders the year dropdown for the passed property.
   *
   * @param property
   *
   * @returns {*}
   */
  renderYear(property: string) {
    return (
      <div
        className='date-part-container'
      >
        <label
          htmlFor='year-dropdown'
        >
          { i18n.t('FuzzyDate.labels.year') }
        </label>
        <Input
          id='year-dropdown'
          onChange={this.onYearChange.bind(this, property)}
          type='number'
          value={this.state[property].year || ''}
        />
      </div>
    );
  }

  /**
   * Returns a promise that sets the end date value.
   *
   * @returns {Promise<R>}
   */
  setEndDate() {
    return new Promise<void>((resolve) => {
      if (this.state.range) {
        return resolve();
      }

      let duration = null;

      if (this.state.accuracy === ACCURACY_YEAR) {
        duration = 'year';
      } else if (this.state.accuracy === ACCURACY_MONTH) {
        duration = 'month';
      } else if (this.state.accuracy === ACCURACY_DATE) {
        duration = 'day';
      }

      this.setState((state) => {
        const endDate = this.convertToDate(state.startDate).add(1, duration);

        return {
          endDate: {
            date: endDate.date(),
            month: endDate.month(),
            year: endDate.year()
          }
        };
      }, resolve.bind(this));

      return true;
    });
  }
}

export default FuzzyDate;
