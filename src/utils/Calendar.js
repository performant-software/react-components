// @flow

import moment from 'moment-islamic-civil';

const DEFAULT_LOCALE = 'en';

const MAX_DAYS_IN_MONTH = 31;

/**
 * Wrapper class to handle momentJS dates to multiple calendars.
 */
class Calendar {
  static Calendars: any;
  static DateFormats: any;
  static Defaults: any;

  locale: string;
  name: string;

  /**
   * Constructs a new calendar instance for the passed locale and calendar.
   *
   * @param locale
   * @param name
   */
  constructor(locale: string = DEFAULT_LOCALE, name: string = Calendar.Calendars.gregorian) {
    this.locale = locale;
    this.name = name;
  }

  /**
   * Increments the date by the passed value.
   *
   * @param date
   * @param value
   *
   * @returns {*}
   */
  addDate(date: Date, value: number) {
    const m = this.moment(date);
    return this.isHijri() ? m.add(value, 'iDate') : m.add(value, 'date');
  }

  /**
   * Increments the month by the passed value.
   *
   * @param date
   * @param value
   *
   * @returns {*}
   */
  addMonth(date: Date, value: number) {
    const m = this.moment(date);
    return this.isHijri() ? m.add(value, 'iMonth') : m.add(value, 'month');
  }

  /**
   * Increments the year by the passed value.
   *
   * @param date
   * @param value
   *
   * @returns {*}
   */
  addYear(date: Date, value: number) {
    const m = this.moment(date);
    return this.isHijri() ? m.add(value, 'iYear') : m.add(value, 'year');
  }

  /**
   * Converts the passed year, month, and date to a moment Date object.
   *
   * @param year
   * @param month
   * @param date
   *
   * @returns {moment.Moment}
   */
  convertToDate({ year, month, date }: { year: number, month: number, date: number }) {
    let m = this.moment().hours(0).minutes(0).seconds(0);

    if (this.isHijri()) {
      m = m
        .iYear(year || this.getDefaultYear())
        .iMonth(month || this.getDefaultMonth())
        .iDate(date || this.getDefaultDate());
    } else {
      m = m
        .year(year || this.getDefaultYear())
        .month(month || this.getDefaultMonth())
        .date(date || this.getDefaultDate());
    }

    return m;
  }

  /**
   * Returns the days in the month for the passed year/month.
   *
   * @param year
   * @param month
   *
   * @returns {number}
   */
  daysInMonth(year: number, month: number) {
    const y = year || this.getDefaultYear();
    const m = month || this.getDefaultMonth();

    const date = this.convertToDate({ year: y, month: m, date: this.getDefaultDate() });
    return (this.isHijri() ? date.iDaysInMonth() : date.daysInMonth()) || MAX_DAYS_IN_MONTH;
  }

  /**
   * Formats the passed date.
   *
   * @param date
   * @param format
   *
   * @returns {*}
   */
  format(date: moment, format: number) {
    return this.moment(date).format(Calendar.DateFormats[this.name][format]);
  }

  /**
   * Returns the default date for the current calendar.
   *
   * @returns {*}
   */
  getDefaultDate() {
    return Calendar.Defaults[this.name].date;
  }

  /**
   * Returns the default month for the current calendar.
   *
   * @returns {*}
   */
  getDefaultMonth() {
    return Calendar.Defaults[this.name].month;
  }

  /**
   * Returns the default year for the current calendar.
   *
   * @returns {number|*|"numeric"|"2-digit"|string|((y: number) => moment.Moment)|(() => number)|moment.numberlike}
   */
  getDefaultYear() {
    return Calendar.Defaults[this.name].year;
  }

  /**
   * Returns true if the current calendar is Hijri.
   *
   * @returns {boolean}
   */
  isHijri() {
    return this.name === Calendar.Calendars.hijri;
  }

  /**
   * Returns the list of months for the current calendar.
   *
   * @returns {*}
   */
  listMonths() {
    const localeData = this.moment().localeData();
    return this.isHijri() ? localeData._iMonths : localeData.months();
  }

  /**
   * Wraps the passed date/string in a moment object.
   *
   * @param date
   */
  moment(date: ?any = null) {
    const m = date ? moment(date) : moment();
    m.locale(this.locale);

    return m;
  }

  /**
   * Parses the passed date into year, month, and date components.
   *
   * @param date
   *
   * @returns {{date: (*), month: (*), year: (*)}}
   */
  parseDate(date: Date | string) {
    const m = this.moment(date);

    return {
      year: this.isHijri() ? m.iYear() : m.year(),
      month: this.isHijri() ? m.iMonth() : m.month(),
      date: this.isHijri() ? m.iDate() : m.date()
    };
  }
}

Calendar.Calendars = {
  gregorian: 'gregorian',
  hijri: 'hijri'
};

Calendar.DateFormats = {
  [Calendar.Calendars.gregorian]: {
    '0': 'YYYY',
    '1': 'MMMM YYYY',
    '2': 'M/D/YYYY'
  },
  [Calendar.Calendars.hijri]: {
    '0': 'iYYYY',
    '1': 'iMMMM iYYYY',
    '2': 'iM/iD/iYYYY'
  }
};

Calendar.Defaults = {
  [Calendar.Calendars.gregorian]: {
    year: 0,
    month: 0,
    date: 1
  },
  [Calendar.Calendars.hijri]: {
    year: 1410,
    month: 0,
    date: 1
  }
};

export default Calendar;
