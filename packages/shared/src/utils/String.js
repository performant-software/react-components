// @flow

import _ from 'underscore';

const includes = (a: any, b: any) => (
  a && b && a.toString().toLowerCase().includes(b.toString().toLowerCase())
);

const toString = (value: any) => {
  if (_.isNumber(value) || _.isBoolean(value)) {
    return value;
  }

  return value || '';
};

const truncate = (str: string, length: number) => {
  if (!str) {
    return null;
  }

  if (!length || length > str.length) {
    return str;
  }

  return str.substring(0, length).trim();
};

export default {
  includes,
  toString,
  truncate
};
