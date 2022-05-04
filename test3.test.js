const Calculation = require('./test3')

const calculation = new Calculation();

describe('These are tests for sum Method', () => {
  test('Sum of 1 + 2', () => {
    expect(calculation.sum(1, 2)).toBe(3);
  });

  test('Sum of 10 + 8', () => {
    expect(calculation.sum(10, 8)).toBe(18);
  });

  test('Sum of 20 + 76', () => {
    expect(calculation.sum(20, 76)).toBe(30); // Fail Test
  });
});

describe('These are tests for Subtract Method', () => {
  test('Difference of 18 & 7', () => {
    expect(calculation.subtract(7, 18)).toBe(11);
  });

  test('Difference of 10 & 8', () => {
    expect(calculation.subtract(10, 8)).toBe(2);
  });

  test('Difference of 21 & 7', () => {
    expect(calculation.subtract(7, 21)).toBe(12); // Fail Test
  });
});

describe('These are tests for Divide Method', () => {
  test('Division for 100 & 20', () => {
    expect(calculation.divide(20, 100)).toBe(5);
  });

  test('Division for 22 & 11', () => {
    expect(calculation.divide(22, 11)).toBe(2);
  });

  test('Division for 60 & 5', () => {
    expect(calculation.divide(5, 60)).toBe(12);
  });

  test('Division for 121 & 11 ', () => {
    expect(calculation.divide(121, 11)).toBe(7); // Fail Test
  });
});

describe('These are tests for Multiply Method', () => {
  test('Multiplication for 4 & 5', () => {
    expect(calculation.multiply(4, 5)).toBe(20);
  });

  test('Multiplication for 12 & 5', () => {
    expect(calculation.multiply(5, 12)).toBe(60);
  });


  test('Multiplication for 2 & 6', () => {
    expect(calculation.multiply(2, 6)).toBe(48);// Fail Test
  });
});