const reverseString = function(s) {
    let arr = s.split('')
    let left = 0;
    let right = arr.length -1
    let temp

    while (left < right) {
        
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--

    }
    return arr.join('')
};

module.exports = reverseString;
