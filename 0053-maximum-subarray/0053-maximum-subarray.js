/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum sum ending at the current position.
        // It's either the current element itself or the current element plus the previous max sum.
        currentMax = Math.max(nums[i], currentMax + nums[i]);

        // Update the global maximum sum if the current maximum is larger.
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
};