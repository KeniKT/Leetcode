/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while (currentSum >= target) {
            // Found a subarray whose sum is >= target
            minLen = Math.min(minLen, right - left + 1);

            // Shrink the window from the left
            currentSum -= nums[left];
            left++;
        }
    }

    // If minLen is still Infinity, it means no such subarray was found
    return minLen === Infinity ? 0 : minLen;
};