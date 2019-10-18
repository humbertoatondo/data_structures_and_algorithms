const chai = require("chai");
const expect = chai.expect;
const app = require("../../Sort-Algorithms/merge-sort");


describe("Merge Sort Algorithm", function(){

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

describe("Merge Function Using For", function(){

    it("Merge Integers", function() {
        expect(app.mergeFor([9,7,6,5,4,1], [4,7,9], [1,5,6])).to.eql([1,4,5,6,7,9]);
        expect(app.mergeFor([11,9,7,6,5,4,1], [4,7,9], [1,5,6,11])).to.eql([1,4,5,6,7,9,11]);
        expect(app.mergeFor([11,9,7,6,5,4,1], [4,7,9,11], [1,5,6])).to.eql([1,4,5,6,7,9,11]);
    });

    it("Merge Floats", function() {
        expect(app.mergeFor([9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6], [1.0, 5.5, 6.3])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6]);
        expect(app.mergeFor([11.4, 9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6], [1.0, 5.5, 6.3, 11.4])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6, 11.4]);
        expect(app.mergeFor([11.4, 9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6, 11.4], [1.0, 5.5, 6.3])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6, 11.4]);
    })

    it("Merge Characters", function() {
        expect(app.mergeFor(["m","l","g","c","b","a"], ["c","g","m"], ["a","b","l"])).to.eql(["a","b","c","g","l","m"]);
        expect(app.mergeFor(["p","m","l","g","c","b","a"], ["c","g","m"], ["a","b","l","p"])).to.eql(["a","b","c","g","l","m","p"]);
        expect(app.mergeFor(["p","m","l","g","c","b","a"], ["c","g","m","p"], ["a","b","l"])).to.eql(["a","b","c","g","l","m","p"]);
    });

    it("Merge Strings", function() {
        expect(app.mergeFor(["man","latex","graph","cat","bird","apple"], ["cat","graph","man"], ["apple","bird","latex"])).to.eql(["apple","bird","cat","graph","latex","man"]);
        expect(app.mergeFor(["paw","man","latex","graph","cat","bird","apple"], ["cat","graph","man"], ["apple","bird","latex","paw"])).to.eql(["apple","bird","cat","graph","latex","man","paw"]);
        expect(app.mergeFor(["paw","man","latex","graph","cat","bird","apple"], ["cat","graph","man","paw"], ["apple","bird","latex"])).to.eql(["apple","bird","cat","graph","latex","man","paw"]);
    });

});

describe("Merge Function Using While", function(){

    it("Merge Integers", function() {
        expect(app.mergeWhile([9,7,6,5,4,1], [4,7,9], [1,5,6])).to.eql([1,4,5,6,7,9]);
        expect(app.mergeWhile([11,9,7,6,5,4,1], [4,7,9], [1,5,6,11])).to.eql([1,4,5,6,7,9,11]);
        expect(app.mergeWhile([11,9,7,6,5,4,1], [4,7,9,11], [1,5,6])).to.eql([1,4,5,6,7,9,11]);
    });

    it("Merge Floats", function() {
        expect(app.mergeWhile([9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6], [1.0, 5.5, 6.3])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6]);
        expect(app.mergeWhile([11.4, 9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6], [1.0, 5.5, 6.3, 11.4])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6, 11.4]);
        expect(app.mergeWhile([11.4, 9.6, 7.1, 6.3, 5.5, 4.2, 1.0], [4.2, 7.1, 9.6, 11.4], [1.0, 5.5, 6.3])).to.eql([1.0, 4.2, 5.5, 6.3, 7.1, 9.6, 11.4]);
    })

    it("Merge Characters", function() {
        expect(app.mergeWhile(["m","l","g","c","b","a"], ["c","g","m"], ["a","b","l"])).to.eql(["a","b","c","g","l","m"]);
        expect(app.mergeWhile(["p","m","l","g","c","b","a"], ["c","g","m"], ["a","b","l","p"])).to.eql(["a","b","c","g","l","m","p"]);
        expect(app.mergeWhile(["p","m","l","g","c","b","a"], ["c","g","m","p"], ["a","b","l"])).to.eql(["a","b","c","g","l","m","p"]);
    });

    it("Merge Strings", function() {
        expect(app.mergeWhile(["man","latex","graph","cat","bird","apple"], ["cat","graph","man"], ["apple","bird","latex"])).to.eql(["apple","bird","cat","graph","latex","man"]);
        expect(app.mergeWhile(["paw","man","latex","graph","cat","bird","apple"], ["cat","graph","man"], ["apple","bird","latex","paw"])).to.eql(["apple","bird","cat","graph","latex","man","paw"]);
        expect(app.mergeWhile(["paw","man","latex","graph","cat","bird","apple"], ["cat","graph","man","paw"], ["apple","bird","latex"])).to.eql(["apple","bird","cat","graph","latex","man","paw"]);
    });

});