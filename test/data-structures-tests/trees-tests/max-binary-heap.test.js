const chai = require("chai");
const expect = chai.expect;
const app = require("../../../data-structures/trees/max-binary-heap")

describe("Max Binary Heap", function() {

    let binaryHeap = new app.MaxBinaryHeap();

    this.beforeEach(function() {
        binaryHeap.insert(50);
        binaryHeap.insert(42);
        binaryHeap.insertRecursively(48);
        binaryHeap.insertRecursively(12);
        binaryHeap.insertRecursively(60);
    });

    this.afterEach(function() {
        binaryHeap.clean();
    });

    it("insert", function() {
        expect(binaryHeap.insert(30)).to.eql([60, 50, 48, 12, 42, 30]);
        expect(binaryHeap.insert(18)).to.eql([60, 50, 48, 12, 42, 30, 18]);
        expect(binaryHeap.insert(82)).to.eql([82, 60, 48, 50, 42, 30, 18, 12]);
    });

    it("extractMax", function() {
        expect(binaryHeap.extractMax()).to.equal(60);
        expect(binaryHeap.extractMax()).to.equal(50);
        expect(binaryHeap.heap).to.eql([48, 42, 12]);
        expect(binaryHeap.extractMax()).to.eql(48);
        expect(binaryHeap.heap).to.eql([42, 12]);
    });

    it("extractMaxRecursive", function() {
        expect(binaryHeap.extractMaxRecursive()).to.equal(60);
        expect(binaryHeap.extractMaxRecursive()).to.equal(50);
        expect(binaryHeap.heap).to.eql([48, 42, 12]);
        expect(binaryHeap.extractMaxRecursive()).to.eql(48);
        expect(binaryHeap.heap).to.eql([42, 12]);
    });

});