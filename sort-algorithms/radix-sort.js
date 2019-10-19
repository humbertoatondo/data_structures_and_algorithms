/**
 * Sorts array of numbers using Radix Sort algorithm.
 * 
 * @param {[Number]} arr 
 * @returns {[Number]} sorted arr
 */
function radixSort(arr) {
    let maxDigitCount = getMaxDigitCount(arr);
    for(digitIndex = 1; digitIndex <= maxDigitCount; digitIndex++) {
        // Initialize array of buckets with length 10.
        let buckets = Array.from({length: 10}, () => []);
        // Put each number in the correct bucket.
        for(i = 0; i < arr.length; i++) {
            let place = getDigit(arr[i], digitIndex);
            buckets[place].push(arr[i]);
        }
        // Get al numbers from buckets and put them in arr.
        arr = [].concat(...buckets);
    }
    return arr;
}

/**
 * Gets digit of num[place].
 * 
 * @param {Number} num 
 * @param {Number} place 
 * @returns {Number} digit in num[place]
 */
function getDigit(num, place) {
    if(digitCount(num) < place) return 0;
    let index = Number(num.toString().length) - place;
    return Number(num.toString()[index]);
}

/**
 * Gets the max digit count in the an array.
 * 
 * @param {[Number]} arr 
 * @returns max number of digits
 */
function getMaxDigitCount(arr) {
    let maxDigitCount = 0;
    arr.forEach(num => {
        maxDigitCount = (maxDigitCount < digitCount(num)) ? digitCount(num) : maxDigitCount;
    });
    return maxDigitCount;
}

/**
 * Get number of digits in a number.
 * 
 * @param {Number} num 
 * @returns {Number} number of digits in num
 */
function digitCount(num) {
    return num.toString().length;
}

module.exports.sort = radixSort;
module.exports.getDigit = getDigit;
module.exports.getMaxDigitCount = getMaxDigitCount;