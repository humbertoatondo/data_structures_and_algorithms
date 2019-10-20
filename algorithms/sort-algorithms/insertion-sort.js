/**
 * Sorts arr with Insertion Sort algorithm
 * 
 * @param {[Any]} arr 
 * @returns {[Any]} sorted arr
 */
function insertionSort(arr) {
    var currentValue;
    for(i = 1; i < arr.length; i++) {
        currentValue = arr[i];
        for(j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

module.exports.sort = insertionSort;