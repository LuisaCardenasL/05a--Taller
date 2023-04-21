const sum = require('./sum');
const mul = require('./mul');
const res = require('./res');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('mul two numbers', () => {
  expect(mul(1, 2)).toBe(2);
});

test('res two numbers', () => {
  expect(res(4, 2)).toBe(2);
});