// @flow

/**
 * Formats the passed date string.
 *
 * @param value
 * @param locale
 * @param options
 *
 * @returns {string}
 */
const formatDate = (value: any, locale?: string, options?: any) => {
  const date = new Date(value);
  return date.toLocaleDateString(locale, options);
};

/**
 * Parses the passed date string and strips the time components.
 *
 * @param dateString
 *
 * @returns {null|Date}
 */
const withoutTime = (dateString: ?string) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  return date;
};

export default {
  formatDate,
  withoutTime
};
