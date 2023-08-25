const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down floating fractional number of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down floating point fractional number of a & b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down floating point fractional number of a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up floating point fractional number of a and b', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('rounding down a & b floating point fractional numbers with trailing 9', () => {
    assert.strictEqual(calculateNumber(2.499, 3.499), 5);
  });
});
