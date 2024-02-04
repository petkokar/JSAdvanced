import { lookupChar } from "./charLook.js";
import { expect } from "chai";

describe('Test lookupCharFunc', () => {
    it('return undefined if one of the parameters are invalid', () =>{
        expect(lookupChar(123, 4)).to.be.undefined;
        expect(lookupChar('string', 'a')).to.be.undefined;
        expect(lookupChar(true, false)).to.be.undefined;
    })

    it('Return Incorrect index if index is invalid', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index')
        expect(lookupChar('string', 7)).to.equal('Incorrect index')
        expect(lookupChar('string', -1)).to.equal('Incorrect index')
    })

    it('Should return the char at specified index', () => {
        expect(lookupChar('string', 2)).to.equal('r');
    })
})