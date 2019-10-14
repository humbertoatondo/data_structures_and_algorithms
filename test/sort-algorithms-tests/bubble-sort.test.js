const chai = require("chai");
const expect = chai.expect;
const app = require("../../Sort-Algorithms/bubble-sort");

describe("Bubble Sort Algorithm", function(){

    it("Sort Integers", function() {
        expect(app.sort([7,2,5,8,5,3,1])).to.eql([1,2,3,5,5,7,8]);
    });

    it("Sort Floats", function() {
        expect(app.sort([7.3, 7.2, 5.1, 8.4, 3.2])).to.eql([3.2, 5.1, 7.2, 7.3, 8.4]);
    });

    it("Sort Characters", function() {
        expect(app.sort(["e","b","d","a","c","f"])).to.eql(["a","b","c","d","e","f"]);
    });

    it("Sort Strings", function() {
        expect(app.sort(["cat","turtle","dog","ant"])).to.eql(["ant","cat","dog","turtle"]);
    });
    
});