const chai = require("chai");
const expect = chai.expect;
const app = require("../../../data-structures/trees/binary-search-tree");

describe("Binary Search Tree", function() {

    let BSTree = new app.BinarySearchTree();

    this.beforeEach(function() {
        BSTree.insert(50);
        BSTree.insert(25);
        BSTree.insert(75);
        BSTree.insert(20);
        BSTree.insert(28);
        BSTree.insert(68);
    });

    this.afterEach(function() {
        BSTree.clear();
    });

    it("insert", function() {
        expect(BSTree.insert(10).value).to.eql(10);
        expect(BSTree.insert(5).value).to.eql(5);
        expect(BSTree.insert(15).value).to.eql(15);
        expect(BSTree.insert(3).value).to.eql(3);
        expect(BSTree.insert(5)).to.eql(null);
        expect(BSTree.insert(2).value).to.eql(2);
        expect(BSTree.insert(4).value).to.eql(4);
        expect(BSTree.insert(12).value).to.eql(12);
        expect(BSTree.insert(12)).to.eql(null);
    });

    it("insertRecursive", function() {
        expect(BSTree.insertRecursive(10).value).to.eql(10);
        expect(BSTree.insertRecursive(5).value).to.eql(5);
        expect(BSTree.insertRecursive(15).value).to.eql(15);
        expect(BSTree.insertRecursive(3).value).to.eql(3);
        expect(BSTree.insertRecursive(2).value).to.eql(2);
        expect(BSTree.insertRecursive(4).value).to.eql(4);
        expect(BSTree.insertRecursive(12).value).to.eql(12);
    });

    it("find", function() {
        expect(BSTree.find(50)).to.eql(true);
        expect(BSTree.find(13)).to.eql(false);
        expect(BSTree.find(75)).to.eql(true);
        expect(BSTree.find(68)).to.eql(true);
        expect(BSTree.find(6)).to.eql(false);
    });

    it("breathFirstSearch", function() {
        expect(BSTree.bfs()).to.eql([50,25,75,20,28,68]);
    });

    it("depthFirstSearch preOrder", function() {
        expect(BSTree.dfsPreOrder()).to.eql([50,25,20,28,75,68]);
    });

    it("depthFirstSearch PostOrder", function() {
        expect(BSTree.dfsPostOrder()).to.eql([20,28,25,68,75,50]);
    });

    it("depthFirstSearch inOrder", function() {
        expect(BSTree.dfsInOrder()).to.eql([20,25,28,50,68,75]);
    });

});