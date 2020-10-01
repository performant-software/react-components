// @flow

const includes = (a: any, b: any) => (
  a && b && a.toString().toLowerCase().includes(b.toString().toLowerCase())
);

export default {
  includes
};
