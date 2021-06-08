const R = require('ramda');

const TEMPLATE = {
  a: '',
  b: '',
  c: ''
};

const param = {
  b: '',
  c: 'c',
  d: 'd'
};

const resultRight = R.mergeDeepRight(TEMPLATE, param);
const resultLeft = R.mergeDeepLeft(TEMPLATE, param);
console.log(resultRight);
console.log(resultLeft);