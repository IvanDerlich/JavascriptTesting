const analyze = require('./05-array-analysis');

test('analyze', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});