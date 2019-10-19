const chai = require("chai");
const expect = chai.expect;
const app = require("../../Sort-Algorithms/quick-sort");

describe("Quick Sort Algorithm", function(){
    
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
    

    describe("Pivot Function", function() {
        it("Pivot with Integers", function() {
            expect(app.pivot([7,2,5,8,5,3,1], 0, 6)).to.eql(5);
            expect(app.pivot([5,2,6,9,4,2,12], 0, 6)).to.eql(5);
            expect(app.pivot([6,8,3,2,5,1,1,9,11,4], 0, 9)).to.eql(5);
        });

        it("Pivot with Floats", function() {
            expect(app.pivot([7.4, 2.1 ,5.9, 8.0, 5.5, 3.1, 1.9], 0, 6)).to.eql(5);
            expect(app.pivot([5.7, 2.4, 6.0, 9.9, 4.5, 2.8, 12.1], 0, 6)).to.eql(5);
            expect(app.pivot([6.2, 8.5, 3.1, 2.7, 5.3, 1.2, 1.1, 9.0, 11.4, 4.0], 0, 9)).to.eql(5);
        });

        it("Pivot with Characters", function() {
            expect(app.pivot(["e","b","d","a","c","f"], 0, 5)).to.eql(4);
            expect(app.pivot(["m","l","g","c","b","a"], 0, 5)).to.eql(3);
            expect(app.pivot(["g","p","m","l","c","b","a"], 0, 6)).to.eql(3);
        });

        it("Pivot with Strings", function() {
            expect(app.pivot(["ear","bird","deer","apple","cat","fire"], 0, 5)).to.eql(4);
            expect(app.pivot(["man","latex","gate","cat","bear","ancient"], 0, 5)).to.eql(3);
            expect(app.pivot(["gravity","people","meat","late","cyber","bike","ant"], 0, 6)).to.eql(3);
        });
    });

    describe("Pick Pivot Function", function() {
        it("Pick Pivot in Array of Integers", function() {
            expect(app.pickPivot([7,2,5,8,5,3,1], 0, 3, 6)).to.eql(0);
            expect(app.pickPivot([5,2,6,9,4,2,12], 0, 3, 6)).to.eql(3);
            expect(app.pickPivot([6,8,3,2,5,1,1,9,11,4], 0, 4, 9)).to.eql(4);
        });

        it("Pick Pivot in Array of Floats", function() {
            expect(app.pickPivot([7.4, 2.1 ,5.9, 8.0, 5.5, 3.1, 1.9], 0, 3, 6)).to.eql(0);
            expect(app.pickPivot([5.7, 2.4, 6.0, 9.9, 4.5, 2.8, 12.1], 0, 3, 6)).to.eql(3);
            expect(app.pickPivot([6.2, 8.5, 3.1, 2.7, 5.3, 1.2, 1.1, 9.0, 11.4, 4.0], 0, 4, 9)).to.eql(4);
        });

        it("Pick Pivot in Array of Characters", function() {
            expect(app.pickPivot(["e","b","d","a","c","f"], 0, 2, 5)).to.eql(0);
            expect(app.pickPivot(["m","l","g","c","b","a"], 0, 2, 5)).to.eql(2);
            expect(app.pickPivot(["g","p","m","l","c","b","a"], 0, 3, 6)).to.eql(0);
        });

        it("Pick Pivot in Array of Strings", function() {
            expect(app.pickPivot(["ear","bird","deer","apple","cat","fire"], 0, 2, 5)).to.eql(0);
            expect(app.pickPivot(["man","latex","gate","cat","bear","ancient"], 0, 2, 5)).to.eql(2);
            expect(app.pickPivot(["gravity","people","meat","late","cyber","bike","ant"], 0, 3, 6)).to.eql(0);
        });
    });
});
