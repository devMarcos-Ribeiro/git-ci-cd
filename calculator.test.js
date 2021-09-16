const calculator = require('./calculator');

test('testando soma de 1+2', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('testando multiplicação de 1+2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('testando divisão de 1+2', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('testando subtração de 1+2', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});