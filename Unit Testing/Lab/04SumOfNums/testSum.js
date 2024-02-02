import { expect } from "chai";
import { sum } from "./04Sum.js";

describe('Testing Sum function', () => {
    it('should return the sum for an array of nums', () => {
        const arr = [1, 1, 1]
        expect(sum(arr)).to.equal(3);
    });

    it('should return 0 for an empty array', () => {
        const arr = [];
        expect(sum(arr)).to.equal(0);
    })
})

