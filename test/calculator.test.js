import { expect } from 'chai';
import { add, subtract } from '../src/calculator.js';

describe('Calculator', () => {
  it('adds numbers', () => { expect(add(1, 2)).to.equal(3); });
  it('subtracts numbers', () => { expect(subtract(5, 2)).to.equal(3); });
});
