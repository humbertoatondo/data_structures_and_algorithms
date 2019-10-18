/**
 * Sorts arr with Merge Sort algorithm
 * 
 * @param {[Any]} arr 
 * @returns {[Any]} sorted arr
 */
function mergeSort(arr) {
    if(arr.length > 1) {
        var middle = arr.length / 2;
        var leftArr = arr.slice(0, middle);
        var rightArr = arr.slice(middle, arr.length);
        mergeSort(leftArr);
        mergeSort(rightArr);
        mergeFor(arr, leftArr, rightArr);
    }
    return arr;
}

/**
 * Merges leftArr and rightArr into arr
 * in a sorted fashion using for loop
 * 
 * @param {[Any]} arr 
 * @param {[Any]} leftArr 
 * @param {[Any]} rightArr 
 * @returns {[Any]} arr with leftArr and rightArr values sorted
 */
function mergeFor(arr, leftArr, rightArr) {
    var leftIndex = 0;
    var rightIndex = 0;

    for(index = 0; index < arr.length; index++) {
        /**
         * If there are no more values to sort in rightArr
         * then add the remaining values in leftArr to arr.
         */
        if(rightIndex === (rightArr.length)) {
            arr[index] = leftArr[leftIndex];
            leftIndex++;
            continue;
        /**
         * If there are no more values to sort in leftArr
         * then add the remaining values in to rightArr to arr.
         */
        } else if (leftIndex === (leftArr.length)) {
            arr[index] = rightArr[rightIndex];
            rightIndex++;
            continue;
        /**
         * Compare values from leftArr with rightArr,
         * if the value in leftArr in position leftIndex
         * is lesser than the value in rightArr in position
         * rightIndex then append leftArr[leftIndex] in
         * arr[index] and increase leftIndex value by 1,
         * else append rightArr[rightIndex] in arr[index]
         * and increase rightIndex value by 1.
         */
        } else {
            if(leftArr[leftIndex] < rightArr[rightIndex]) {
                arr[index] = leftArr[leftIndex];
                leftIndex++;
            } else {
                arr[index] = rightArr[rightIndex];
                rightIndex++;
            }
        }
    }
    return arr;
}

/**
 * Merges leftArr and rightArr into arr
 * in a sorted fashion using while loop
 * 
 * @param {[Any]} arr 
 * @param {[Any]} leftArr 
 * @param {[Any]} rightArr 
 * @returns {[Any]} arr with leftArr and rightArr values sorted
 */
function mergeWhile(arr, leftArr, rightArr) {
    var leftIndex = 0;
    var rightIndex = 0;
    var index = 0;
    /**
     * While there are remaining values in leftArr and
     * in rightArr checks if the value in leftArr in
     * position leftIndex is lesser than the value in
     * rightArr in position rightIndex, if it is append
     * leftArr[leftIndex] into arr[index] and increase
     * the value of leftIndex by 1, else append
     * rightArr[rightIndex] into arr[index] and increase
     * the value of rightIndex by 1.
     */
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] < rightArr[rightIndex]) {
            arr[index] = leftArr[leftIndex];
            leftIndex++;
        } else {
            arr[index] = rightArr[rightIndex];
            rightIndex++;
        }
        index++;
    }
    /**
     * Append the remainign values
     * in leftArr into arr.
     */
    while(leftIndex < leftArr.length) {
        arr[index] = leftArr[leftIndex];
        leftIndex++;
        index++;
    }
    /**
     * Append the remaining values
     * in rightArr into arr.
     */
    while(rightIndex < rightArr.length) {
        arr[index] = rightArr[rightIndex];
        rightIndex++;
        index++;
    }

    return arr;
}

module.exports.sort = mergeSort;
module.exports.mergeFor = mergeFor;
module.exports.mergeWhile = mergeWhile;