// @flow

import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Modal,
  TextArea
} from 'semantic-ui-react';
import moment from 'moment';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './FuzzyDate.css';

type DateInput = {
  accuracy: number,
  description: string,
  endDate: string,
  range: boolean,
  startDate: string
};

type DateOutput = {
  accuracy: number,
  description: string,
  endDate?: Date,
  range: boolean,
  startDate?: Date
};

type DateComponent = {
  date: number,
  month: number,
  year: number
};

type Props = {
  date: DateInput,
  onChange: (data: DateOutput) => void,
  title?: string
};

type State = {
  accuracy: number,
  description: string,
  display: string,
  endDate: DateComponent,
  modal: boolean,
  range: boolean,
  startDate: DateComponent
};

const ACCURACY_DATE = 2;
const ACCURACY_MONTH = 1;
const ACCURACY_YEAR = 0;

const DATE_FORMAT_YEAR = 'YYYY';
const DATE_FORMAT_MONTH = 'MMMM YYYY';
const DATE_FORMAT_DATE = 'MM/DD/YYYY';

const DEFAULT_DATE = 1;
const DEFAULT_MONTH = 0;
const DEFAULT_YEAR = 0;

const INTEGER_BASE = 10;

const MAX_DATES = 31;
const MAX_YEAR_LENGTH = 6;

const MOMENT_DURATION_DAY = 'day';
const MOMENT_DURATION_MONTH = 'month';
const MOMENT_DURATION_YEAR = 'year';

class FuzzyDate extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new FuzzyDate component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = this.getInitialState();
  }

  /**
   * Initializes the FuzzyDate component.
   */
  componentDidMount() {
    this.initializeDate();
  }

  /**
   * Converts the passed date components to a momentJS wrapped date.
   *
   * @param date
   *
   * @returns {moment.Moment}
   */
  convertToDate(date: DateComponent) {
    return moment()
      .year(date.year || DEFAULT_YEAR)
      .month(date.month || DEFAULT_MONTH)
      .date(date.date || DEFAULT_DATE)
      .hours(0)
      .minutes(0)
      .seconds(0);
  }

  /**
   * Returns the display string for the passed date component.
   *
   * @param dateComponent
   *
   * @returns {*}
   */
  getDisplayDate(dateComponent: DateComponent) {
    let displayDate;

    const date = this.convertToDate(dateComponent);

    if (this.state.accuracy === ACCURACY_YEAR) {
      displayDate = date.format(DATE_FORMAT_YEAR);
    } else if (this.state.accuracy === ACCURACY_MONTH) {
      displayDate = date.format(DATE_FORMAT_MONTH);
    } else if (this.state.accuracy === ACCURACY_DATE) {
      displayDate = date.format(DATE_FORMAT_DATE);
    }

    return displayDate;
  }

  /**
   * Returns the initial state object.
   *
   * @returns {{endDate: {}, display: string, accuracy: number, description: string, range: boolean,
   *            modal: boolean, startDate: {}}}
   */
  getInitialState() {
    return {
      accuracy: ACCURACY_YEAR,
      description: '',
      display: '',
      endDate: {},
      modal: false,
      range: false,
      startDate: {}
    };
  }

  /**
   * Initializes the date.
   */
  initializeDate() {
    this.setState(this.getInitialState(), () => {
      if (this.props.date && !_.isEmpty(this.props.date)) {
        const {
          accuracy,
          description,
          range
        } = this.props.date;

        let startDate = {};
        let endDate = {};

        if (this.props.date.startDate) {
          startDate = this.parseDate(this.props.date.startDate);
        }

        if (this.props.date.endDate) {
          endDate = this.parseDate(this.props.date.endDate);
        }

        this.setState({
          accuracy,
          description,
          range,
          startDate,
          endDate
        }, this.setDisplay.bind(this));
      } else {
        this.onAccuracyChange(null, { value: ACCURACY_YEAR });
      }
    });
  }

  /**
   * Sets the accuracy value on the state. The start and end date values are also adjusted based on the accuracy.
   *
   * @param e
   * @param value
   */
  onAccuracyChange(e: ?Event, { value }: { value: number }) {
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
    }, this.setEndDate.bind(this));
  }

  /**
   * Clears the input date(s).
   */
  onClear() {
    this.setState(this.getInitialState(), this.onSave.bind(this));
  }

  /**
   * Closes the edit modal.
   */
  onClose() {
    this.setState({ modal: false }, this.initializeDate.bind(this));
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
    }), this.setEndDate.bind(this));
  }

  /**
   * Sets the date description on the state.
   *
   * @param e
   * @param value
   */
  onDescriptionChange(e: Event, { value }: { value: string }) {
    this.setState({ description: value });
  }

  /**
   * Opens the edit modal.
   */
  onEdit() {
    this.setState({ modal: true });
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
    }), this.setEndDate.bind(this));
  }

  /**
   * Sets the range value on the set.
   */
  onRangeChange() {
    this.setState((state) => ({ range: !state.range }), this.setEndDate.bind(this));
  }

  /**
   * Sets the display value and closes the edit modal.
   */
  onSave() {
    // Set the display value
    this.setDisplay();

    // Convert the state date and end date to Date objects can call the onChange prop
    let startDate;
    let endDate;

    if (!_.isEmpty(this.state.startDate)) {
      startDate = this.convertToDate(this.state.startDate).toDate();
    }

    if (!_.isEmpty(this.state.endDate)) {
      endDate = this.convertToDate(this.state.endDate).toDate();
    }

    const { accuracy, description, range } = this.state;

    this.props.onChange({
      accuracy,
      description,
      range,
      startDate,
      endDate
    });

    // Close the modal
    this.setState({ modal: false });
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
    }), this.setEndDate.bind(this));
  }

  /**
   * Parses the passed date into date, month, year components.
   *
   * @param date
   *
   * @returns {{date: number, month: number, year: number}}
   */
  parseDate(date: string) {
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
      <>
        <Input
          icon='calendar alternate outline'
          iconPosition='left'
          onClick={this.onEdit.bind(this)}
          readOnly
          value={this.state.display}
        />
        <Button.Group>
          <Button
            basic
            icon='times'
            onClick={this.onClear.bind(this)}
          />
        </Button.Group>
        <Modal
          as={Form}
          className='fuzzy-date-modal'
          open={this.state.modal}
          onClose={this.onClose.bind(this)}
        >
          <Modal.Header
            content={this.props.title || i18n.t('FuzzyDate.title')}
          />
          <Modal.Content>
            <Form.Input
              className='accuracy-container'
              label={i18n.t('FuzzyDate.labels.accuracy')}
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
            </Form.Input>
            <Form.Group>
              { this.renderYear('startDate') }
              { this.renderMonth('startDate') }
              { this.renderDate('startDate') }
              { !this.state.range && (
                <div
                  className='button-container'
                >
                  <Button
                    basic
                    content={i18n.t('FuzzyDate.buttons.addRange')}
                    icon='plus'
                    onClick={this.onRangeChange.bind(this)}
                  />
                </div>
              )}
            </Form.Group>
            { this.state.range && (
              <Form.Group>
                { this.renderYear('endDate') }
                { this.renderMonth('endDate') }
                { this.renderDate('endDate') }
                <div
                  className='button-container'
                >
                  <Button
                    basic
                    content={i18n.t('FuzzyDate.buttons.removeRange')}
                    icon='times'
                    onClick={this.onRangeChange.bind(this)}
                  />
                </div>
              </Form.Group>
            )}
            <Form.Input
              label={i18n.t('FuzzyDate.labels.description')}
            >
              <TextArea
                onChange={this.onDescriptionChange.bind(this)}
                value={this.state.description}
              />
            </Form.Input>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.onSave.bind(this)}
              primary
              size='medium'
              type='submit'
            >
              { i18n.t('Common.buttons.save') }
            </Button>
            <Button
              inverted
              onClick={this.onClose.bind(this)}
              primary
              size='medium'
              type='button'
            >
              { i18n.t('Common.buttons.cancel') }
            </Button>
          </Modal.Actions>
        </Modal>
      </>
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
    const dates = date.month && date.year ? moment().month(date.month).year(date.year).daysInMonth() : MAX_DATES;

    return (
      <Form.Input
        label={i18n.t('FuzzyDate.labels.date')}
      >
        <Dropdown
          id='date-dropdown'
          onChange={this.onDateChange.bind(this, property)}
          options={_.range(1, dates + 1).map((i) => ({ key: i, value: i, text: i }))}
          selection
          value={date.date || DEFAULT_DATE}
        />
      </Form.Input>
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
      <Form.Input
        label={i18n.t('FuzzyDate.labels.month')}
      >
        <Dropdown
          onChange={this.onMonthChange.bind(this, property)}
          options={_.map(moment.months(), (m, i) => ({ key: i, value: i, text: i18n.t(`FuzzyDate.months.${m}`) }))}
          selection
          value={this.state[property].month || DEFAULT_MONTH}
        />
      </Form.Input>
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
      <Form.Input
        label={i18n.t('FuzzyDate.labels.year')}
      >
        <Input
          onChange={this.onYearChange.bind(this, property)}
          type='number'
          value={this.state[property].year || ''}
        />
      </Form.Input>
    );
  }

  /**
   * Sets the display value.
   */
  setDisplay() {
    const display = [];

    if (this.state.startDate && !_.isEmpty(this.state.startDate)) {
      display.push(this.getDisplayDate(this.state.startDate));
    }

    if (this.state.range && this.state.endDate && !_.isEmpty(this.state.endDate)) {
      display.push(' - ');
      display.push(this.getDisplayDate(this.state.endDate));
    }

    this.setState({
      display: display.join(' ')
    });
  }

  /**
   * Sets the end date value.
   */
  setEndDate() {
    if (this.state.range || !this.state.startDate || _.isEmpty(this.state.startDate)) {
      return;
    }

    let duration = null;

    if (this.state.accuracy === ACCURACY_YEAR) {
      duration = MOMENT_DURATION_YEAR;
    } else if (this.state.accuracy === ACCURACY_MONTH) {
      duration = MOMENT_DURATION_MONTH;
    } else if (this.state.accuracy === ACCURACY_DATE) {
      duration = MOMENT_DURATION_DAY;
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
    });
  }
}

FuzzyDate.defaultProps = {
  title: undefined
};

export default FuzzyDate;
