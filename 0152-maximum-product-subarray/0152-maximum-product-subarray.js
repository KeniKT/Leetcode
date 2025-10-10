/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // Initialize variables for the first element
    let max_so_far = nums[0]; // Maximum product subarray ending at the current index
    let min_so_far = nums[0]; // Minimum product subarray ending at the current index
    let result = nums[0];     // The overall maximum product found so far

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        let current_num = nums[i];

        // Store the current max_so_far temporarily because we will need its value
        // to calculate min_so_far, but it will be overwritten for the new iteration.
        let temp_max = max_so_far;

        // The new maximum product ending at index i is the maximum of:
        // 1. current_num itself (starting a new subarray)
        // 2. (max_so_far * current_num)
        // 3. (min_so_far * current_num) - because current_num might be negative
        max_so_far = Math.max(current_num, 
                              Math.max(temp_max * current_num, min_so_far * current_num));

        // The new minimum product ending at index i is the minimum of:
        // 1. current_num itself (starting a new subarray)
        // 2. (temp_max * current_num) - using temp_max because max_so_far is already updated
        // 3. (min_so_far * current_num)
        min_so_far = Math.min(current_num, 
                              Math.min(temp_max * current_num, min_so_far * current_num));

        // The overall result is the maximum of the current result and the new max_so_far
        result = Math.max(result, max_so_far);
    }

    return result;
};