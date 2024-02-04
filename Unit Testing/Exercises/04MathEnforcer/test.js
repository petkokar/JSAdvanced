import { mathEnforcer } from "./function.js";
import { expect } from "chai";

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('Should return result with valid parameter', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-3)).to.equal(2);
            expect(mathEnforcer.addFive(3.456)).to.be.closeTo(8.456, 0.01);
        })

        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.addFive('asd')).to.be.undefined;
        })
    })

    describe('subtractTen', () => {
        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
        })

        it('Should return result with valid parameter', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-8)).to.equal(-18);
            expect(mathEnforcer.subtractTen(10.789)).to.be.closeTo(0.789, 0.01);
        })
    })

    describe('sum', () => {
        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.sum('asd', 5)).to.be.undefined;
            expect(mathEnforcer.sum(3, 'asd')).to.be.undefined;
        })

        it('should return result with valid params', () => {
            expect(mathEnforcer.sum(5, 5)).to.eq(10);
            expect(mathEnforcer.sum(5, -3)).to.equal(2);
            expect(mathEnforcer.sum(3.456, 7.789)).to.be.closeTo(11.245, 0.01);
        })
    })
})