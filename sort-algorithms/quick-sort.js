/**
 * Sorts arr with Quick Sort algorithm.
 * 
 * @param {[Any]} arr 
 * @param {Number} firstIndex 
 * @param {Number} lastIndex 
 * @returns {[Any]} sorted arr
 */
function quickSort(arr, firstIndex = 0, lastIndex = arr.length - 1) {
    if(firstIndex < lastIndex) {
        let pivotIndex = pivot(arr, firstIndex, lastIndex);
        quickSort(arr, firstIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, lastIndex);
    }
    return arr;
}

/**
 * Get pivotIndex for arr.
 * All values before pivotIndex are
 * lesser than arr[pivotIndex] and
 * all values after pivotIndex are
 * greater than arr[pivotIndex].
 * 
 * @param {[Any]} arr 
 * @param {Number} firstIndex 
 * @param {Number} lastIndex 
 * @returns {Number} pivotIndex
 */
function pivot(arr, firstIndex, lastIndex) {
    let medianIndex = pickPivot(arr, firstIndex, Math.floor((lastIndex - firstIndex) / 2), lastIndex);
    swap(arr, firstIndex, medianIndex);
    var pivotIndex = firstIndex;
    /**
     * If the element in arr[i] is lesser than
     * the pivot then increase pivotIndex value
     * by 1 and swap arr[i] with arr[pivotIndex].
     */
    for(i = firstIndex + 1; i <= lastIndex; i++) {
        if(arr[i] < arr[firstIndex]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, firstIndex, pivotIndex);
    return pivotIndex;
}

/**
 * Returns tha median value in arr
 * between first, middle and last
 * index positions.
 * 
 * @param {[Any]} arr
 * @param {Number} first 
 * @param {Number} middle 
 * @param {Number} last 
 * @returns {Number} median index
 */
function pickPivot(arr, first, middle, last) {
    if(arr[first] < arr[middle] && arr[first] > arr[last]) return first;
    else if(arr[first] > arr[middle] && arr[first] < arr[last]) return first;
    else if(arr[middle] > arr[first] && arr[middle] < arr[last]) return middle;
    else if(arr[middle] < arr[first] && arr[middle] > arr[last]) return middle;
    else return last;
}

/**
 * Swaps arr[index1] and arr[index2].
 * 
 * @param {[Any]} arr 
 * @param {Number} index1 
 * @param {Number} index2 
 */
function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

module.exports.sort = quickSort;
module.exports.pivot = pivot;
module.exports.pickPivot = pickPivot;