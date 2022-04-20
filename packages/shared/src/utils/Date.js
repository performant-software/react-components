// @flow

const formatDate = (value: any, locale?: string, options?: any) => {
  const date = new Date(value);
  return date.toLocaleDateString(locale, options);
};

export default {
  formatDate
};
