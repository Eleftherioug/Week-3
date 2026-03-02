const { sumNumbers, minNumber, maxNumber, averageNumber } = require('../src/numberProcessor');

describe('Number Processor', () => {
  const filePath = 'data/sample-numbers.txt';

  test('calculates sum', () => {
    expect(sumNumbers(filePath)).toBe(2597);
  });

  test('finds min number', () => {
    expect(minNumber(filePath)).toBe(73);
  });

  test('finds max number', () => {
    expect(maxNumber(filePath)).toBe(96);
  });

  test('calculates average', () => {
    expect(averageNumber(filePath)).toBeCloseTo(86.5667, 3); // round to 3 decimals
  });
});