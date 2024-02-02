import { createCalculator } from "./function.js";
import { expect } from "chai";


describe('createCalculator function', () => {
    let calculator;

    beforeEach('constructor function', () => {
        calculator = createCalculator();
    })
    it('should return an object with add(), subtract(), and get() functions', () => {
    //   const calculator = createCalculator();
      expect(calculator).to.be.an('object');
      expect(calculator.add).to.be.a('function');
      expect(calculator.subtract).to.be.a('function');
      expect(calculator.get).to.be.a('function');
    });
  
    it('should keep an internal sum that cannot be modified from the outside', () => {
    //   const calculator = createCalculator();
      calculator.add(5);
      calculator.subtract(3);
      expect(calculator.get()).to.equal(2);
    });
  
    it('add() should add a parsed number to the internal sum', () => {
    //   const calculator = createCalculator();
      calculator.add(5);
      expect(calculator.get()).to.equal(5);
  
      calculator.add('10');
      expect(calculator.get()).to.equal(15);
    });
  
    it('subtract() should subtract a parsed number from the internal sum', () => {
    //   const calculator = createCalculator();
      calculator.subtract(3);
      expect(calculator.get()).to.equal(-3);
  
      calculator.subtract('2');
      expect(calculator.get()).to.equal(-5);
    });
  
    it('get() should return the value of the internal sum', () => {
    //   const calculator = createCalculator();
      calculator.add(5);
      calculator.subtract(3);
      expect(calculator.get()).to.equal(2);
    });
  });