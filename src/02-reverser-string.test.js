const reverseString = require('./02-reverse-string');

test('reverse dog', () => {
  expect(
    reverseString('dog'),
  ).toBe('god');
});

test('reverse Odin', () => {
  expect(
    reverseString('Odin'),
  ).toBe('nidO');
});
