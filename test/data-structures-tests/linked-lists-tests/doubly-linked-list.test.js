const chai = require("chai");
const expect = chai.expect;
const app = require("../../../data-structures/linked-lists/doubly-linked-list");

describe("Doubly Linked List", function() {

    const linkedList = new app.LinkedList();

    beforeEach(function() {
        linkedList.add("Hello");
        linkedList.add(42);
        linkedList.add(3.2);
    });

    afterEach(function() {
        linkedList.emptyList();
    });

    describe("Add Methods", function() {
        it("add", function() {
            expect(linkedList.toArray()).to.eql(["Hello", 42, 3.2]);
        });

        it("addAtPosition", function() {
            linkedList.addAtPosition("test", 2);
            expect(linkedList.toArray()).to.eql(["Hello", 42, "test", 3.2]);

            linkedList.addAtPosition("last", 4);
            expect(linkedList.toArray()).to.eql(["Hello", 42, "test", 3.2, "last"]);
        });

        it("addAtFirst", function() {
            linkedList.addAtFirst("first");
            expect(linkedList.toArray()).to.eql(["first", "Hello", 42, 3.2]);
        });
    });

    describe("Remove Methods", function() {
        
        it("removeLast", function() {
            const linkedList = new app.LinkedList();
            linkedList.add("Hello");
            linkedList.add(42);
            linkedList.add(3.2);
            linkedList.removeLast();
            expect(linkedList.toArray()).to.eql(["Hello", 42]);
        })

        it("removeFirst", function() {
            linkedList.removeFirst();
            expect(linkedList.toArray()).to.eql([42, 3.2]);
        });
    });

    describe("Get and Set Methods", function(){
        it("get", function() {
            expect(linkedList.get(2)).to.eql(3.2);
        });

        it("set", function() {
            linkedList.set("set val", 1);
            expect(linkedList.get(1)).to.eql("set val");
        });
    });

});