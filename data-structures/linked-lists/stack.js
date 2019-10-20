
class Node {
    /**
     * Stack Node.
     * @param {Any} value 
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /**
     * Insert a new node at the beginning of the stack.
     * @param {Any} value 
     * @returns {Node} inserted node
     */
    push(value) {
        let node = new Node(value);
        if(!this.first) this.last = node;
        node.next = this.first;
        this.first = node;
        return node;
    }

    /**
     * Removes the first element from the stack.
     * @returns {Node} removed node
     */
    pop() {
        let removedNode = this.first;
        this.first = removedNode.next;
        removedNode.next = null;
        this.size--;
        return removedNode;
    }

    /**
     * @returns {Any} first node in stack
     */
    peek() {
        return this.first.value;
    }

    /**
     * @returns {Number} size of stack
     */
    size() {
        return this.size;
    }

    /**
     * Checks if the stack contains a given element.
     * @param {Node} node 
     * @returns {Bool} 
     */
    contains(node) {
        let currentNode = this.first;
        while(currentNode != null) {
            if(currentNode === node) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    /**
     * Array of node values in the stack.
     * @returns {[Any]} array of values
     */
    toArray() {
        let arr = [];
        let currentNode = this.first;
        while(currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    /**
     * String of node values in teh stack.
     * @returns {String} string of values
     */
    toString() {
        let str = "";
        let currentNode = this.first;
        while(currentNode != this.last) {
            str += currentNode.value + ", ";
            currentNode = currentNode.next;
        }
        str += currentNode.value.toString();
        return str;
    }

    /**
     * Remove all elements from the
     * stack and set the size to 0.
     */
    clear() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

module.exports.Stack = Stack;
module.exports.Node = Node;