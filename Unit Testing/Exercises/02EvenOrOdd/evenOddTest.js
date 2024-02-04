import { isOddOrEven } from "./evenOddFunc.js";
import { expect } from "chai";

describe('Test isOddOrEven func', () => {
    it('Should return undefined to non-string input', () => {
        expect(isOddOrEven(23)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    })

    it('should return even with even string input', () => {
        const evenString = 'Ivan';
        expect(isOddOrEven(evenString)).to.equal('even');
    })

    it('should return odd with odd string input', () => {
        const oddString = 'Petko';
        expect(isOddOrEven(oddString)).to.equal('odd');
    })
})