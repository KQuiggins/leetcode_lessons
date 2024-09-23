function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true; // found a pair
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return false; // no pair found
}



module.exports = twoSumSorted;

