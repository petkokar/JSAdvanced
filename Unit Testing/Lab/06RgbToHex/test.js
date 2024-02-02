import { expect } from "chai";
import { rgbToHexColor } from "./function.js";

describe('rgbToHexColor function', () => {
    it('should return the correct hexadecimal color for valid inputs', () => {
      expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
      expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
      expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
      
    });
  
    it('should return undefined for invalid inputs', () => {
      expect(rgbToHexColor('255', 0, 0)).to.be.undefined;
      expect(rgbToHexColor(255, '0', 0)).to.be.undefined;
      expect(rgbToHexColor(255, 0, '0')).to.be.undefined;
      expect(rgbToHexColor(256, 0, 0)).to.be.undefined; 
      expect(rgbToHexColor(0, 256, 0)).to.be.undefined; 
      expect(rgbToHexColor(0, 0, 256)).to.be.undefined; 
      expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
  });