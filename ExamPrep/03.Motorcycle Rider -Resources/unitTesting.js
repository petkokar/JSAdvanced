import { motorcycleRider } from "./Motorcycle Rider.js";
import { expect } from "chai";

describe("Tests", () => {
    describe("licenseRestriction", () => {
        it('AM category', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })
        it('A1 Category', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        })
        it('A2 Category', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        })
        it('A category', () => {
            expect(motorcycleRider.licenseRestriction("A")).to.eq("No motorcycle restrictions, and the minimum age is 24.");
        })
        it('Expect invalid Info', () => {
            expect(() => motorcycleRider.licenseRestriction("Invalid")).to.throw("Invalid Information!");
        })
    })

    describe("motorcycleShowRoom", () => {
        it('should throw an error if engineVolumeis not an array', () => {
            expect(() => motorcycleRider.motorcycleShowroom('125', 250)).to.throw('Invalid Information!');
        });

        it('should throw an error if maximumEngineVolume is not a number', () => {
            expect(() => motorcycleRider.motorcycleShowroom(['125', '250'], '250')).to.throw("Invalid Information!")
        })

        it('should throw an error if engineVolume is empty and maximumEngine is less than 50', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 40)).to.throw('Invalid Information!');
        })

        it("should return correct message with valid input", () => {
            expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 300)).to.eq('There are 2 available motorcycles matching your criteria!')
        })
    })

    describe('Other Spendings', () => {
        it("Should throw error if equipment of the parameters is not array", () => {
            expect(() => motorcycleRider.otherSpendings('asd', ['das'], true)).to.throw('Invalid Information!')
        })
        it("Should throw error if consumables of the parameters is not array", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], 'jacket', true)).to.throw('Invalid Information!')
        })
        it("Should throw error if discount is not boolean", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], 'jacket', 'true')).to.throw('Invalid Information!')
        })

        it('Should calculate total price without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.eq('You spend $600.00 for equipment and consumables!');
        })

        it('Should calculate total prices with discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.eq('You spend $540.00 for equipment and consumables with 10% discount!');
        })
    })
})