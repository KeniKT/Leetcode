/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;

    // Step 1: Find the first decreasing element from the right (pivot)
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // If a pivot is found (i >= 0)
    if (i >= 0) {
        // Step 2: Find the smallest element to the right of the pivot that is greater than the pivot
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap the pivot and the found element
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the subarray to the right of the pivot (or the entire array if no pivot was found)
    // The part to the right of 'i' is already in descending order, reversing it makes it ascending.
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};