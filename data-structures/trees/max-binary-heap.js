class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    /**
     * Insert number to the heap and place
     * it in the correct place.
     * @param {Number} num
     * @returns {[Number]} heap
     */
    insert(num) {
        this.heap.push(num);
        var index = this.heap.length - 1;
        var parentIndex = Math.floor((index - 1) / 2);
        //Bubble-up.
        while(i > 1 && this.heap[index] > this.heap[parentIndex]) {
            //Swap values.
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((parentIndex - 1) / 2);
        }
        return this.heap;
    }

    /**
     * Insert number to the heap and place
     * it in the correct place recursively.
     * @param {Number} num
     * @returns {[Number]} heap
     */
    insertRecursively(num) {
        /**
         * Swaps the inserted key until it is in the correct place.
         * @param {[Number]} heap 
         * @param {[Number]} index 
         */
        function bubbleUp(heap, index) {
            var parentIndex = Math.floor((index - 1) / 2);
            if(i > 1 && heap[index] > heap[parentIndex]) {
                [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
                bubbleUp(heap, parentIndex);
            }
            return heap;
        }

        this.heap.push(num);
        return bubbleUp(this.heap, this.heap.length - 1);
    }

    /**
     * Removes the first key from the heap (biggest value)
     * and re-orders the remaining keys in the heap.
     * @returns {Number} first key in heap
     */
    extractMax() {
        //Helper swap function.
        function swap(arr, parentIndex, childIndex) {
            [arr[parentIndex], arr[childIndex]] = [arr[childIndex], arr[parentIndex]];
            parentIndex = childIndex;
        }

        let removedKey = this.heap.shift();
        let lastKey    = this.heap.pop();
        this.heap.unshift(lastKey);
        var parentIndex = 0;
        var leftIndex  = 1;
        var rightIndex = 2;
        /**
         * Sink-down.
         * Compare parent key to left and right children keys,
         * swap parent key with the key with the greater value.
         */
        while(this.heap[parentIndex] < this.heap[leftIndex] || this.heap[parentIndex] < this.heap[rightIndex]) {
            if(this.heap[parentIndex] < this.heap[leftIndex] && this.heap[parentIndex] < this.heap[rightIndex]) {
                if(this.heap[leftIndex] > this.heap[rightIndex]) {
                    swap(this.heap, parentIndex, leftIndex);
                } else {
                    swap(this.heap, parentIndex, rightIndex);
                }
            } else if(this.heap[parentIndex] < this.heap[leftIndex]) {
                swap(this.heap, parentIndex, leftIndex);
            } else {
                swap(this.heap, parentIndex, rightIndex);
            }
            leftIndex = (parentIndex * 2) + 1;
            rightIndex = (parentIndex * 2) + 2;
        }
        return removedKey;
    }

    /**
     * Removes the first key from the heap (biggest value)
     * and re-orders the remaining keys in the heap recursively.
     * @returns {Number} first key in heap
     */
    extractMaxRecursive() {

        //Helper swap function.
        function swap(arr, parentIndex, childIndex) {
            [arr[parentIndex], arr[childIndex]] = [arr[childIndex], arr[parentIndex]];
        }

        function extractMax(heap, parentIndex) {
            let smallestIndex = parentIndex;
            let leftIndex  = (parentIndex * 2) + 1;
            let rightIndex = (parentIndex * 2) + 2;
            if(leftIndex < heap.length && heap[smallestIndex] < heap[leftIndex]) {
                smallestIndex = leftIndex;
            }
            if(rightIndex < heap.length && heap[smallestIndex] < heap[rightIndex]) {
                smallestIndex = rightIndex;
            }
            if(smallestIndex != parentIndex) {
                swap(heap, parentIndex, smallestIndex);
                extractMax(heap, smallestIndex);
            }
        }

        let removedKey = this.heap.shift();
        let lastKey    = this.heap.pop();
        this.heap.unshift(lastKey);
        extractMax(this.heap, 0);
        return removedKey;
    }

    /**
     * Removes all elements from the heap.
     */
    clean() {
        this.heap = [];
    }
}

module.exports.MaxBinaryHeap = MaxBinaryHeap;