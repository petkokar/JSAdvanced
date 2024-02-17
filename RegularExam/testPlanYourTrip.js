import { planYourTrip } from "./planYourTrip.js";
import { expect } from "chai";

describe('Just Testing planYourTrip variable', () => {
    describe('choosing destination', () => {
        it('year different than 2024', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
        })

        it('destination diff than Ski Resort', () => {
            expect(() => planYourTrip.choosingDestination('Plovdiv', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        })

        it('Season winter plus Ski resort', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.eq('Great choice! The Winter is the perfect time to visit the Ski Resort.')
        })

        it('Season Summer plus Ski Resort', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.eq('Consider visiting during the Winter for the best experience at the Ski Resort.')
        })
    })

    describe('explore Options', () => {

        it('should handle an array with a single activity', () => {
            expect(planYourTrip.exploreOptions(['Skiing'], 0)).to.equal('');
        });
        it('should throw error for empty activities array', () => {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw('Invalid Information!');
        });

        it("if passed array is not array", () => {
            expect(() => planYourTrip.exploreOptions(false, 3)).to.throw('Invalid Information!');
        })

        it("if index is not number", () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], true)).to.throw('Invalid Information!');
        })
        it("if index is equal to array length", () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 2)).to.throw('Invalid Information!');
        })
        it("if index is bigger to array length", () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 3)).to.throw('Invalid Information!');
        })
        it("if index is lower to array length", () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], -1)).to.throw('Invalid Information!');
        })

        it('if index is not integer', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 'asd')).to.throw('Invalid Information!');
        })

        it('Return positive result', () => {
            expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 1)).to.eq('Skiing');
        })
        it('should remove activity at the beginning of the array', () => {
            expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 0)).to.eq('Snowboarding');
        });

        it('should throw error for null activities array', () => {
            expect(() => planYourTrip.exploreOptions(null, 0)).to.throw('Invalid Information!');
        });

        it('should throw an error for undefined passed as the activities array', () => {
            expect(() => planYourTrip.exploreOptions(undefined, 0)).to.throw('Invalid Information!');
        });

        it('should throw an error for undefined passed as the activities array', () => {
            expect(() => planYourTrip.exploreOptions(undefined, undefined)).to.throw('Invalid Information!');
        });
        
        it('should throw error for undefined activityIndex', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], undefined)).to.throw('Invalid Information!');
        });

        it('should throw error for undefined activityIndex', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], null)).to.throw('Invalid Information!');
        });

        it('should throw an error for a non-integer value passed as the activity index', () => {
            expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 1.5)).to.throw('Invalid Information!');
        });
        
    })

    describe('estimateExpenses', () => {

        it('should return budget-friendly message for positive floating-point numbers resulting in cost less than or equal to $500', () => {
            const result = planYourTrip.estimateExpenses(250.75, 2.5);
            expect(result).to.equal('The estimated cost for the trip is $626.88, plan accordingly.');
        });

        it('should throw an error for non-positive distanceInKilometers and non-positive fuelCostPerLiter', () => {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!');
        });

        it('should return budget-friendly message for cost equal to $500', () => {
            const result = planYourTrip.estimateExpenses(100, 5);
            expect(result).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        });
        
        it('should return budget-friendly message for cost less than $500', () => {
            const result = planYourTrip.estimateExpenses(80, 6);
            expect(result).to.equal('The trip is budget-friendly, estimated cost is $480.00.');
        });
    
        it('should return plan accordingly message for cost slightly above $500', () => {
            const result = planYourTrip.estimateExpenses(101, 5);
            expect(result).to.equal('The estimated cost for the trip is $505.00, plan accordingly.');
        });
    
        it('should return plan accordingly message for cost significantly above $500', () => {
            const result = planYourTrip.estimateExpenses(150, 4);
            expect(result).to.equal('The estimated cost for the trip is $600.00, plan accordingly.');
        });
    
        it('should throw an error for negative distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(-100, 5)).to.throw('Invalid Information!');
        });

        it('should throw an error for negative distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(-100, -5)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for zero distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for negative fuelCostPerLiter', () => {
            expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for zero fuelCostPerLiter', () => {
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for non-numeric distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses('abc', 5)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for non-numeric fuelCostPerLiter', () => {
            expect(() => planYourTrip.estimateExpenses(100, 'abc')).to.throw('Invalid Information!');
        });
        it('should throw an error for null fuelCostPerLiter', () => {
            expect(() => planYourTrip.estimateExpenses(100, null)).to.throw('Invalid Information!');
        });
        
        
        it('should throw an error for null distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(null, 5)).to.throw('Invalid Information!');
        });
        it('should throw an error for null distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, '20')).to.throw('Invalid Information!');
        });
        it('should throw an error for null distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(20, undefined)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for undefined distanceInKilometers', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, 5)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for both undefined', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, undefined)).to.throw('Invalid Information!');
        });
        
        it('should throw an error for both null', () => {
            expect(() => planYourTrip.estimateExpenses(null, null)).to.throw('Invalid Information!');
        });

        it('should throw an error for non-numeric inputs', () => {
            expect(() => planYourTrip.estimateExpenses('abc', 'def')).to.throw('Invalid Information!');
        });
    });
})