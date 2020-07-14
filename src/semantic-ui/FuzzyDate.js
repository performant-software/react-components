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
import _ from 'underscore';
import i18n from '../i18n/i18n';
import Calendar from '../utils/Calendar';
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
  calendar?: string,
  date: DateInput,
  description?: boolean,
  locale?: string,
  onChange: (data: DateOutput) => void,
  title?: string
};

type State = {
  accuracy: number,
  calendar: Calendar,
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

const INTEGER_BASE = 10;

const MAX_YEAR_LENGTH = 6;

class FuzzyDate extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new FuzzyDate component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      ...this.getInitialState(),
      calendar: new Calendar(props.locale, props.calendar)
    };
  }

  /**
   * Initializes the FuzzyDate component.
   */
  componentDidMount() {
    this.initializeDate();
  }

  /**
   * Sets the state based on prop changes.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (this.props.locale !== prevProps.locale || this.props.calendar !== prevProps.calendar) {
      this.setState({
        calendar: new Calendar(this.props.locale, this.props.calendar)
      });
    }

    if (this.props.date
      && (this.props.date.startDate !== prevProps.date.startDate
      || this.props.date.endDate !== prevProps.date.endDate)) {
      this.initializeDate();
    }
  }

  /**
   * Returns the display string for the passed date component.
   *
   * @param dateComponent
   *
   * @returns {*}
   */
  getDisplayDate(dateComponent: DateComponent) {
    const date = this.state.calendar.convertToDate(dateComponent);
    return this.state.calendar.format(date, this.state.accuracy);
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
    if (this.props.date && this.props.date.startDate && this.props.date.endDate) {
      const {
        accuracy,
        description,
        range
      } = this.props.date;

      let startDate = {};
      let endDate = {};

      if (this.props.date.startDate) {
        startDate = this.state.calendar.parseDate(this.props.date.startDate);
      }

      if (this.props.date.endDate) {
        endDate = this.state.calendar.parseDate(this.props.date.endDate);
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
        endDate = { ...endDate, date: state.calendar.getDefaultDate() };
        startDate = { ...startDate, date: state.calendar.getDefaultDate() };
      } else if (value === ACCURACY_YEAR) {
        endDate = { ...endDate, date: state.calendar.getDefaultDate(), month: state.calendar.getDefaultMonth() };
        startDate = { ...startDate, date: state.calendar.getDefaultDate(), month: state.calendar.getDefaultMonth() };
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
      startDate = this.state.calendar.convertToDate(this.state.startDate).toDate();
    }

    if (!_.isEmpty(this.state.endDate)) {
      endDate = this.state.calendar.convertToDate(this.state.endDate).toDate();
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
            { this.props.description && (
              <Form.Input
                label={i18n.t('FuzzyDate.labels.description')}
              >
                <TextArea
                  onChange={this.onDescriptionChange.bind(this)}
                  value={this.state.description}
                />
              </Form.Input>
            )}
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
    const daysInMonth = this.state.calendar.daysInMonth(date.year, date.month);

    return (
      <Form.Input
        label={i18n.t('FuzzyDate.labels.date')}
      >
        <Dropdown
          id='date-dropdown'
          onChange={this.onDateChange.bind(this, property)}
          options={_.range(1, daysInMonth + 1).map((i) => ({ key: i, value: i, text: i }))}
          selection
          value={date.date || this.state.calendar.getDefaultDate()}
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
          options={_.map(this.state.calendar.listMonths(), (m, i) => ({ key: i, value: i, text: m }))}
          selection
          value={this.state[property].month || this.state.calendar.getDefaultMonth()}
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

    this.setState((state) => {
      let endDate = state.calendar.convertToDate(state.startDate);

      if (state.accuracy === ACCURACY_YEAR) {
        endDate = state.calendar.addYear(endDate, 1);
      } else if (state.accuracy === ACCURACY_MONTH) {
        endDate = state.calendar.addMonth(endDate, 1);
      } else if (state.accuracy === ACCURACY_DATE) {
        endDate = state.calendar.addDate(endDate, 1);
      }

      return {
        endDate: state.calendar.parseDate(endDate)
      };
    });
  }
}

FuzzyDate.defaultProps = {
  calendar: Calendar.Calendars.gregorian,
  description: true,
  locale: 'en',
  title: undefined
};

export default FuzzyDate;
