class Node {
    /**
     * Doubly Linked List Node.
     * @param {Any} value 
     */
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

     /**
     * Gets value of node in specified position.
     * @param {Number} position 
     * @returns value of node
     */
    get(position) {
        if(position > this.length - 1) {
            throw "Index out of bounds";
        }
        let currentNode = this.head;
        while(position > 0) {
            currentNode = currentNode.next;
            position--;
        }
        return currentNode.value;
    }

    /**
     * Gets value of node in specified position.
     * @param {Number} position 
     */
    set(value, position) {
        if(position > this.length - 1) {
            throw "Index out of bounds";
        }
        let currentNode = this.head;
        while(position > 0) {
            currentNode = currentNode.next;
            position--;
        }
        currentNode.value = value;
    }


    /**
     * Adds a new node at the end of the
     * list and increases length by 1.
     * @param {Any} value 
     */
    add(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * Add a new node at the specified position
     * in the list and increases the length by 1.
     * If the position given is greater than the
     * length of the list it will append the node
     * at the end of the list.
     * First position is 0.
     * @param {Any} value 
     * @param {Number} position 
     */
    addAtPosition(value, position) {
        let node = new Node(value);
        if(this.length <= position) {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            var currentNode = this.head;
            while(position > 1) {
                currentNode = currentNode.next;
                position--;
            }
            node.next = currentNode.next;
            node.previous = currentNode
            currentNode.next.previous = node;
            currentNode.next = node;
        }
        this.length++
    }

    /**
     * Adds a new node at the beginning of the
     * list and increases the length by 1.
     * @param {Any} value 
     */
    addAtFirst(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

     /**
     * Removes the last node of the list
     * and decreases length by 1.
     * @returns value of the removed node
     */
    removeLast() {
        let currentNode = this.head;
        while(currentNode.next != this.tail) {
            currentNode = currentNode.next;
        }
        let removedNode = this.tail;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return removedNode.value;
    }

    /**
     * Removes the first node of the list
     * and decreases length by 1.
     * @returns value of the removed node
     */
    removeFirst() {
        let currentNode = this.head.next;
        let removedNode = this.head;
        currentNode.previous = null;
        this.head.next = null;
        this.head = currentNode;
        this.length--;
        return removedNode.value;
    }

    /**
     * Remove all nodes from linked list
     * and sets length value to 0.
     */
    emptyList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Returns an array with all list values in order.
     * @returns array of values
     */
    toArray() {
        let arr = [];
        var currentNode = this.head;
        while(currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

module.exports.LinkedList = DoublyLinkedList;
module.exports.Node = Node;