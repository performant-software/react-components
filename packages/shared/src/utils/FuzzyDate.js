// @flow

import _ from 'underscore';
import Calendar from './Calendar';
import Browser from './Browser';

const DATE_SEPARATOR = ' - ';

const DEFAULT_CALENDAR = Calendar.Calendars.gregorian;

const Accuracy = {
  year: 0,
  month: 1,
  date: 2
};

/**
 * Returns a view for the passed fuzzy date object and calendar.
 *
 * @param date
 * @param calendar
 *
 * @returns {null|string|*}
 */
const getDateView = (date, cal = null) => {
  if (!date) {
    return null;
  }

  if (!(date.description || date.start_date)) {
    return null;
  }

  let calendar = cal;

  if (!calendar) {
    const locale = Browser.isBrowser() && navigator.language;
    calendar = new Calendar(locale, DEFAULT_CALENDAR);
  }

  // Use the description, if provided
  if (date.description) {
    return date.description;
  }

  // Otherwise, format the start and end dates
  const dateView = [];

  if (date.start_date) {
    const parsed = calendar.parseDate(date.start_date);
    dateView.push(calendar.format(parsed, date.accuracy));
  }

  if (date.range && date.end_date) {
    const parsed = calendar.parseDate(date.end_date);
    dateView.push(calendar.format(parsed, date.accuracy));
  }

  return _.isEmpty(dateView) ? null : dateView.join(DATE_SEPARATOR);
};

/**
 * Returns the year range as an array for the passed fuzzy date.
 *
 * @param date
 *
 * @returns {[]}
 */
const getYearRange = (date) => {
  const range = [];

  const startDate = new Date(date.start_date);
  const endDate = new Date(date.end_date);

  for (let i = startDate.getFullYear(); i <= endDate.getFullYear(); i += 1) {
    range.push(i);
  }

  return range;
};

export default {
  Accuracy,
  getDateView,
  getYearRange
};
