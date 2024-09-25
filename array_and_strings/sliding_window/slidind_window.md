# Sliding Window Algorithm in JavaScript

## Introduction

The Sliding Window technique is a powerful algorithmic strategy used to solve problems involving arrays or lists in which a subset of data needs to be analyzed. It is especially useful for problems related to finding subarrays, substrings, or windows within a larger array.

### Key Idea

Instead of recalculating a result for every possible subset of the array (which can be inefficient), the sliding window approach allows us to "slide" through the array, maintaining a current subset (window) that gets updated incrementally.

## Problem Example

Let's consider a problem where you are given an array of numbers and a target sum `k`. The goal is to find the length of the longest contiguous subarray whose sum is less than or equal to `k`.

## Pseudocode Overview

### General Sliding Window Template

The sliding window algorithm generally follows this structure:

```javascript
function fn(arr) {
    let left = 0; // Start of the window
    for (let right = 0; right < arr.length; right++) {
        // Add the right element into the window
        // Do some logic to "add" element at arr[right] to the window
        
        while (WINDOW_IS_INVALID) {
            // Shrink the window by removing the left element
            // Do some logic to "remove" element at arr[left] from window
            left++;
        }

        // Update the answer based on the current window
    }
    return answer; // The result (max/min/specific value) after processing all windows
}
```

### Problem-Specific Pseudocode

For our problem, the pseudocode is:

```javascript
function fn(nums, k) {
    let left = 0;
    let curr = 0; // The current sum of the window
    let answer = 0; // The final answer (max length of subarray)

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right]; // Add the current number to the current sum

        // Shrink the window until the current sum is <= k
        while (curr > k) {
            curr -= nums[left]; // Remove the leftmost number from the sum
            left++; // Move the window to the right
        }

        // Update the answer with the maximum window size found so far
        answer = Math.max(answer, right - left + 1);
    }

    return answer; // Return the maximum subarray length found
}
```

## Step-by-Step Explanation

1. **Initialization:**
    - We initialize `left` at 0, representing the start of our window.
    - `curr` is used to keep track of the sum of the current window.
    - `answer` stores the result of the maximum subarray length.

2. **Expand the Window:**
    - The loop iterates over `nums` using `right` as the current index. For every element `nums[right]`, we add it to the current sum `curr`.

3. **Shrink the Window:**
    - If the current window's sum exceeds `k`, we shrink the window by incrementing `left` and subtracting `nums[left]` from `curr` until the sum is within the allowed limit (i.e., `curr <= k`).

4. **Update the Answer:**
    - After adjusting the window size, we compare the size of the current valid window (`right - left + 1`) with the previously stored `answer` and update `answer` if the current window is larger.

5. **Return the Result:**
    - After iterating through the array, the function returns `answer`, which is the length of the longest subarray with a sum less than or equal to `k`.

## Example

Let's walk through an example:

```javascript
const nums = [1, 2, 3, 4, 5];
const k = 5;
console.log(fn(nums, k)); // Output: 2
```

**Explanation:**

- Initially, both `left` and `right` pointers are at the first element. The window starts with just `[1]`, which has a sum of 1, so we move `right` forward.
- Now, the window is `[1, 2]` with a sum of 3, still <= 5. We move `right` forward again.
- The window is `[1, 2, 3]` with a sum of 6, which is greater than `k`. So we increment `left` and remove 1 from the sum.
- Now, the window is `[2, 3]` with a sum of 5, which is valid. We continue updating the answer.

## Time Complexity

The sliding window algorithm runs in O(n) time complexity, where `n` is the length of the array. This is because both the `left` and `right` pointers traverse the array at most once.
