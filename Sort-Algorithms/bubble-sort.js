/**
 * Sorts arr with Bubble Sort algorithm
 * 
 * @param {[Any]} arr 
 * @returns {[Any]} arr
 */
function bubbleSort(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = 1; j < arr.length - i; j++) {
            if(arr[j-1] > arr[j]) {
                swap(arr, j-1, j);
            }
        }
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

module.exports.sort = bubbleSort;
