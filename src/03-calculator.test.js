const calculator = require('./03-calculator');

test('1 + 1 = 2', () => expect(calculator.add(1, 1)).toBe(2));

test('1 + 2 = 3', () => expect(calculator.add(1, 2)).toBe(3));

test('3 + 5 = 8', () => expect(calculator.add(3, 5)).toBe(8));

test('5 / 3 to equal 1.6666', () => expect(calculator.divide(5, 3)).toBeCloseTo(1.66666));

test('1 / 0 to equal NaN', () => expect(calculator.divide(1, 0)).toBe(Infinity));

test(' 1 * 1 to equal 1', () => expect(calculator.multiply(1, 0)).toBe(0));

test(' 1 * 0 to equal 0', () => expect(calculator.multiply(1, 1)).toBe(1));

test(' 3 * 3 to equal 0', () => expect(calculator.multiply(3, 3)).toBe(9));

test('3 - 5 to equal -2', () => expect(calculator.substract(3, 5)).toBe(-2));

test('5 - 3 to equal 2', () => expect(calculator.substract(5, 3)).toBe(2));
