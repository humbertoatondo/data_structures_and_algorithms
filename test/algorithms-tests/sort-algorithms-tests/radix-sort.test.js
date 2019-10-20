const chai = require("chai");
const expect = chai.expect;
const app = require("../../../algorithms/sort-algorithms/radix-sort");

describe("Radix Sort Algorithm", function() {
    
    describe("Sort Function", function() {
        it("Sort Integers", function() {
            expect(app.sort([7,2,5,8,5,3,1])).to.eql([1,2,3,5,5,7,8]);
            expect(app.sort([5,2,6,9,4,2,12])).to.eql([2,2,4,5,6,9,12]);
            expect(app.sort([6,8,3,2,5,1,1,9,11,4])).to.eql([1,1,2,3,4,5,6,8,9,11]);
            expect(app.sort([324, 532, 32, 53, 7684, 123, 5])).to.eql([5, 32, 53, 123, 324, 532, 7684]);
            expect(app.sort([34, 86, 456, 65, 2358, 36246, 75, 865, 97, 2])).to.eql([2, 34, 65, 75, 86, 97, 456, 865, 2358, 36246]);
        });
    });

    describe("getDigit Function", function() {
        it("Digit", function() {
            expect(app.getDigit(3254, 2)).to.eql(5);
            expect(app.getDigit(52962, 4)).to.eql(2);
            expect(app.getDigit(89, 3)).to.eql(0);
            expect(app.getDigit(1248952, 5)).to.eql(4);
            expect(app.getDigit(0, 1)).to.eql(0);
        });
    });

    describe("getMaxDigitCount Function", function() {
        it("Max Digit Count", function() {
            expect(app.getMaxDigitCount([7,2,5,8,5,3,1])).to.eql(1);
            expect(app.getMaxDigitCount([5,2,6,9,4,2,12])).to.eql(2);
            expect(app.getMaxDigitCount([6,8,3,2,5,1,1,9,11,4])).to.eql(2);
            expect(app.getMaxDigitCount([324, 532, 32, 53, 7684, 123, 5])).to.eql(4);
            expect(app.getMaxDigitCount([34, 86, 456, 65, 2358, 36246, 75, 865, 97, 2])).to.eql(5);
        });
    });

});