class Node {
    /**
     * Binary Search Tree Node.
     * @param {Any} value 
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert new node into the tree.
     * @param {Any} value 
     * @returns inserted node, null if could not insert node
     */
    insert(value) {
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
            return node;
        }
        var currentNode = this.root;
        while(true) {
            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = node;
                    return node;
                }
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                if(!currentNode.right) {
                    currentNode.right = node;
                    return node;
                }
                currentNode = currentNode.right;
            } else {
                return null;
            }
        }
    }

    /**
     * Preparation function for recursive insertion.
     * @param {*} value 
     */
    insertRecursive(value) {
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
        } else {
            this.insertNodeRecursive(this.root, node);
        }
        return node;
    }

    /**
     * Recursive function for inserting new node into the tree.
     * @param {Node} currentNode 
     * @param {Node} newNode 
     * @returns {Node} root
     */
    insertNodeRecursive(currentNode, newNode) {
        if(newNode.value < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
            }
            else {
                this.insertNodeRecursive(currentNode.left, newNode);
            }
        } else if (newNode.value > currentNode.value) {
            if(!currentNode.right) {
                currentNode.right = newNode;
            }
            else {
                this.insertNodeRecursive(currentNode.right, newNode);
            }
        } else return;
    }

    /**
     * Checks if value exists in the tree.
     * @param {Any} value 
     * @returns {Boolean}
     */
    find(value) {
        var currentNode = this.root;
        while(true) {
            if(currentNode === null) return false;
            else if(value === currentNode.value) return true;
            else if(value < currentNode.value) currentNode = currentNode.left;
            else if(value > currentNode.value) currentNode = currentNode.right;
        }
    }

    /**
     * Returns an array containing the
     * tree values in breath-search-first.
     * @returns {[Any]} arr with values ordered by level
     */
    bfs() {
        var currentNode = this.root;
        var arr = [];
        var queue = [this.root];
        while(queue.length) {
            currentNode = queue.shift();
            arr.push(currentNode.value);
            if(currentNode.left)  queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return arr;
    }

    /**
     * Returns an array containing the
     * tree values in pre-order.
     * @returns {[Any]} arr with values in pre-order
     */
    dfsPreOrder() {
        let arr = []; 
        function traverse(currentNode, arr) {
            arr.push(currentNode.value);
            if (currentNode.left)  traverse(currentNode.left, arr);
            if (currentNode.right) traverse(currentNode.right, arr);
            return arr;
        }
        return traverse(this.root, arr);
    }

    /**
     * Returns an array containing the
     * tree values in post-order.
     * @returns {[Any]} arr with values in post-order
     */
    dfsPostOrder() {
        let arr = []; 
        function traverse(currentNode, arr) {
            if (currentNode.left)  traverse(currentNode.left, arr);
            if (currentNode.right) traverse(currentNode.right, arr);
            arr.push(currentNode.value);
            return arr;
        }
        return traverse(this.root, arr);
    }

    /**
     * Returns an array containing the
     * tree values in pre order.
     * @returns {[Any]} arr with values in pre order
     */
    dfsInOrder() {
        let arr = []; 
        function traverse(currentNode, arr) {
            if (currentNode.left)  traverse(currentNode.left, arr);
            arr.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right, arr);
            return arr;
        }
        return traverse(this.root, arr);
    }

    /**
     * Clears all elements in the tree.
     */
    clear() {
        this.root = null;
    }
}

module.exports.BinarySearchTree = BinarySearchTree;