const chai = require("chai");
const expect = chai.expect;
const app = require("../../../algorithms/sort-algorithms/insertion-sort");

describe("Insertion Sort Algorithm", function(){

    describe("Sort Function", function(){

        it("Sort Integers", function() {
            expect(app.sort([7,2,5,8,5,3,1])).to.eql([1,2,3,5,5,7,8]);
            expect(app.sort([5,2,6,9,4,2,12])).to.eql([2,2,4,5,6,9,12]);
            expect(app.sort([6,8,3,2,5,1,1,9,11,4])).to.eql([1,1,2,3,4,5,6,8,9,11]);
        });

        it("Sort Floats", function() {
            expect(app.sort([7.3, 7.2, 5.1, 8.4, 3.2])).to.eql([3.2, 5.1, 7.2, 7.3, 8.4]);
            expect(app.sort([5.7, 2.4, 6.0, 9.9, 4.5, 2.8, 12.1])).to.eql([2.4, 2.8, 4.5, 5.7, 6.0, 9.9, 12.1]);
            expect(app.sort([6.2, 8.5, 3.1, 2.7, 5.3, 1.2, 1.1, 9.0, 11.4, 4.0])).to.eql([1.1, 1.2, 2.7, 3.1, 4.0, 5.3, 6.2, 8.5, 9.0, 11.4]);
        });

        it("Sort Characters", function() {
            expect(app.sort(["e","b","d","a","c","f"])).to.eql(["a","b","c","d","e","f"]);
            expect(app.sort(["m","l","g","c","b","a"])).to.eql(["a","b","c","g","l","m"]);
            expect(app.sort(["g","p","m","l","c","b","a"])).to.eql(["a","b","c","g","l","m","p"]);
        });

        it("Sort Strings", function() {
            expect(app.sort(["ear","bird","deer","apple","cat","fire"])).to.eql(["apple","bird","cat","deer","ear","fire"]);
            expect(app.sort(["man","latex","gate","cat","bear","ancient"])).to.eql(["ancient","bear","cat","gate","latex","man"]);
            expect(app.sort(["gravity","people","meat","late","cyber","bike","ant"])).to.eql(["ant","bike","cyber","gravity","late","meat","people"]);
        });
        
    });
    
});