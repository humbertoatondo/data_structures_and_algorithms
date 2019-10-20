const chai = require("chai");
const expect = chai.expect;
const app = require("../../../data-structures/linked-lists/queue");

describe("Queue", function() {

    const queue = new app.Queue();
    var node1, node2, node3;

    this.beforeEach(function() {
        node1 = queue.enqueue(1);
        node2 = queue.enqueue("hello");
        node3 = queue.enqueue(true);
    });

    this.afterEach(function() {
        queue.clear();
    });

    describe("Enqueue, Dequeue and Peek Methods", function() {
        it("enqueue", function() {
            expect(queue.toArray()).to.eql([1, "hello", true]);
        });

        it("dequeue", function() {
            expect(queue.dequeue().value).to.eql(1);
            expect(queue.toArray()).to.eql(["hello", true]);
            queue.dequeue();
            queue.dequeue();
            expect(queue.toArray()).to.eql([]);
            queue.enqueue("test");
            expect(queue.toArray()).to.eql(["test"]);
        });

        it("peek",function() {
            expect(queue.peek()).to.eql(1);
        });
    });

    describe("Contains Method", function() {
        it("contains", function() {
            expect(queue.contains(node1)).to.eql(true);
            expect(queue.contains(node2)).to.eql(true);
            expect(queue.contains(node3)).to.eql(true);
            expect(queue.contains(new app.Node("test"))).to.eql(false);
        });
    });

    describe("Convert to String", function() {
        it("toString", function() {
            expect(queue.toString()).to.eql("1, hello, true");
        });
    });

});