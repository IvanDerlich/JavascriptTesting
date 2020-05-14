const capitalize = require('./01-capitalize');

test('capitalize-1', () => {
  expect(
    capitalize('naMe'),
  ).toBe('NaMe');
});

test('capitalize-2', () => {
  expect(
    capitalize('test'),
  ).toBe('Test');
});
