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

export default {
  includes,
  toString
};
