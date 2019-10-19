/**
 * Sorts arr with Quick Sort algorithm.
 * 
 * @param {[Any]} arr 
 * @param {Number} firstIndex 
 * @param {Number} lastIndex 
 * @returns {[Any]} sorted arr
 */
function quickSort(arr, firstIndex = 0, lastIndex = arr.length) {
    if(firstIndex < lastIndex) {
        let pivotIndex = pivot(arr, firstIndex, lastIndex);
        quickSort(arr, firstIndex, pivotIndex);
        quickSort(arr, pivotIndex+1, lastIndex);
    }
    return arr;
}

/**
 * 
 * 
 * @param {[Any]} arr 
 * @param {Number} firstIndex 
 * @param {Number} lastIndex 
 */
function pivot(arr, firstIndex, lastIndex) {
    let middle = Math.floor((lastIndex - firstIndex) / 2);
    var pivotIndex = pickPivot(arr, firstIndex, middle, lastIndex);
    console.log(firstIndex, middle, lastIndex);
    swap(arr, firstIndex, pivotIndex);
    pivotIndex = firstIndex;
    for(i = firstIndex + 1; i < lastIndex; i++) {
        if(arr[i] < arr[firstIndex]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }
    swap(arr, firstIndex, pivotIndex);
    return pivotIndex;
}

/**
 * 
 * @param {[Any]} arr
 * @param {Number} first 
 * @param {Number} middle 
 * @param {Number} last 
 */
function pickPivot(arr, first, middle, last) {
    if(arr[first] < arr[middle] && arr[first] > arr[last]) return first;
    else if(arr[first] > arr[middle] && arr[first] < arr[last]) return first;
    else if(arr[middle] > arr[first] && arr[middle] < arr[last]) return middle;
    else if(arr[middle] < arr[first] && arr[middle] > arr[last]) return middle;
    else return last;
}

function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

module.exports.sort = quickSort;
module.exports.pivot = pivot;
module.exports.pickPivot = pickPivot;