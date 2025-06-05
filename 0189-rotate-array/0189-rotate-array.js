/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    // Normalize k to handle cases where k > n
    k = k % n;

    // Helper function to reverse a subarray
    const reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(nums, 0, n - 1);

    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Step 3: Reverse the remaining n - k elements
    reverse(nums, k, n - 1);
};