/**
 * Sorts arr with Selection Sort algorithm
 * 
 * @param {[Any]} arr
 * @returns {[Any]} sorted arr
 */
function selectionSort(arr) {
    var minIndex;
    for(i = 0; i < arr.length; i++) {
        minIndex = i;
        for(j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

/**
 * Swaps values between arr[index1] and arr[index2]
 * 
 * @param {[Any]} arr 
 * @param {Number} index1 
 * @param {Number} index2 
 */
function swap(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

module.exports.sort = selectionSort;