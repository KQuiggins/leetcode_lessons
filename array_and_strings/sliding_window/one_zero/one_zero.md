
# Sliding Window Technique for Longest Substring with At Most One "0"

## Variables

- **left**: This represents the start of the sliding window.
- **curr**: This keeps track of the number of "0"s in the current window.
- **ans**: This stores the maximum length of any valid substring found.

## Main Logic

The function uses a sliding window approach with two pointers, `left` and `right`, to traverse the string `s` and expand the window. The window includes all the characters between `left` and `right`.

1. **Step 1**: Loop through the string `s` using `right`, which represents the right end of the window. For each character, check if it is a "0". If it is, increment `curr` (i.e., the count of "0"s in the current window).

2. **Step 2**: After adding a character, if `curr` becomes greater than 1 (i.e., the window contains more than one "0"), we need to adjust the window. To do this, increment `left` (i.e., shrink the window from the left side) until `curr` is no longer greater than 1.

3. **Step 3**: After adjusting the window (if necessary), update `ans` with the maximum length of the valid substring. This is calculated as the distance between `right` and `left` plus one (`right - left + 1`).

## Example Walkthrough

Let's say `s = "1101011"`.

- Initial setup: `left = 0`, `curr = 0`, `ans = 0`
- `right = 0`: `s[0] = 1`, `curr = 0`, valid substring `"1"`, `ans = 1`
- `right = 1`: `s[1] = 1`, `curr = 0`, valid substring `"11"`, `ans = 2`
- `right = 2`: `s[2] = 0`, `curr = 1`, valid substring `"110"`, `ans = 3`
- `right = 3`: `s[3] = 1`, `curr = 1`, valid substring `"1101"`, `ans = 4`
- `right = 4`: `s[4] = 0`, `curr = 2` → Invalid window (more than one "0")
  - Move `left` from 0 to 3 (shrink window until `curr <= 1`), resulting in the valid substring `"101"`, `ans = 4`
- `right = 5`: `s[5] = 1`, `curr = 1`, valid substring `"1011"`, `ans = 4`
- `right = 6`: `s[6] = 1`, `curr = 1`, valid substring `"10111"`, `ans = 5`

## Return

After finishing the loop, the function returns `ans`, which is the length of the longest substring containing at most one "0". In this case, the result would be 5.

## Key Takeaways

- **Sliding window technique**: Used to maintain a window of characters and dynamically adjust its size based on the condition (at most one "0").
- **Efficient solution**: The time complexity is O(n) where n is the length of the string since each character is processed at most twice (once when expanding and once when shrinking the window).
