import { findNewApartment } from "./findApartment.js";
import { expect } from "chai";

describe('Tests', () => {
    describe('IsGoodLocation', () => {
        it('Return not suitable for you', () => {
            expect(findNewApartment.isGoodLocation('Kazanlak', true)).to.eq('This location is not suitable for you.')
        })

        it('Should return no public transport in area', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.eq("There is no public transport in area.")
        })

        it('Should return You can go on home tour', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.eq('You can go on home tour!')
        })

        it('test invalid parameter city', () => {
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw('Invalid input!');
        })

        it('test invalid parameter boolean', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 'Sofia')).to.throw("Invalid input!");
        })
    })

    describe('IsLargeEnough', () => {
        it('Test passed apartaments not an array', () => {
            expect(() => findNewApartment.isLargeEnough('asd', 60)).to.throw('Invalid input!')
        })
        it('test empty apartments array', () => {
            expect(() => findNewApartment.isLargeEnough([], 60)).to.throw('Invalid input!');
        })
        it('Test if second param is not an number', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '50')).to.throw("Invalid input!");
        })
        it('test positive output', () => {
            expect(findNewApartment.isLargeEnough([40,50,40,20], 55)).to.equal('');
            expect(findNewApartment.isLargeEnough([40,55,40,20], 55)).to.equal('55');
        })
    })

    describe('IsItAffordable', () => {
        it('Larger Price than Budget', () => {
            expect(findNewApartment.isItAffordable(50, 40)).to.eq("You don't have enough money for this house!");
        })

        it('Larger budget than price', () => {
            expect(findNewApartment.isItAffordable(40, 50)).to.eq('You can afford this home!');
        })
        it('should throw an error if price is not a number', () => {
            expect(() => findNewApartment.isItAffordable('abc', 250000)).to.throw('Invalid input!');
        });
        it('should throw an error if budget is not a number', () => {
            expect(() => findNewApartment.isItAffordable(200000, 'abc')).to.throw('Invalid input!');
        });
        it('should throw an error if price is less than or equal to 0', () => {
            expect(() => findNewApartment.isItAffordable(0, 250000)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-100000, 250000)).to.throw('Invalid input!');
        });
    
        it('should throw an error if budget is less than or equal to 0', () => {
            expect(() => findNewApartment.isItAffordable(200000, 0)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(200000, -100000)).to.throw('Invalid input!');
        });
    })
})