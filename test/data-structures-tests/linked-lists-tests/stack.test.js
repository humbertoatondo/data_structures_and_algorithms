const chai = require("chai");
const expect = chai.expect;
const app = require("../../../data-structures/linked-lists/stack");

describe("Stack", function() {

    const stack = new app.Stack();
    var node1, node2, node3;
    this.beforeEach(function() {
        node1 = stack.push(1);
        node2 = stack.push("hello");
        node3 = stack.push(true);
    });

    this.afterEach(function() {
        stack.clear();
    });

    describe("Push, Pop and Peek Methods", function() {
        it("push", function() {
            expect(stack.toArray()).to.eql([true, "hello", 1]);
        });

        it("pop", function() {
            expect(stack.pop().value).to.eql(true);
            expect(stack.toArray()).to.eql(["hello", 1]);
            
        });

        it("peek",function() {
            expect(stack.peek()).to.eql(true);
        });
    });

    describe("Contains Method", function() {
        it("contains", function() {
            expect(stack.contains(node1)).to.eql(true);
            expect(stack.contains(node2)).to.eql(true);
            expect(stack.contains(node3)).to.eql(true);
            expect(stack.contains(new app.Node("test"))).to.eql(false);
        });
    });

    describe("Convert to String", function() {
        it("toString", function() {
            expect(stack.toString()).to.eql("true, hello, 1");
        });
    });

});