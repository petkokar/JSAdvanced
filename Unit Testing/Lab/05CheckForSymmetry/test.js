import { expect } from "chai";
import { isSymmetric } from "./05function.js";

describe('Testing isSymmetric function', () => {
    it('should return false for non-array input', () => {
      expect(isSymmetric('not an array')).to.be.false;
      expect(isSymmetric(42)).to.be.false;
      expect(isSymmetric({ key: 'value' })).to.be.false;
      expect(isSymmetric(null)).to.be.false;
      expect(isSymmetric(undefined)).to.be.false;
    });
  
    it('should return true for a symmetric array', () => {
      expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
      expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
      expect(isSymmetric([1])).to.be.true; 
    });
  
    it('should return false for a non-symmetric array', () => {
      expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
      expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.false;
      expect(isSymmetric()).to.be.false; 
    });

    it('should return false for a symmetric array of incorrect type', () => {
        expect(isSymmetric([1, 2, '3', 2, 1])).to.be.true;
      });
  });