/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // If the current index i is beyond what we can reach,
        // then it's impossible to get to the end.
        if (i > maxReach) {
            return false;
        }

        // Update the maximum index we can reach
        maxReach = Math.max(maxReach, i + nums[i]);

        // If we can reach or surpass the last index, return true
        if (maxReach >= n - 1) {
            return true;
        }
    }

    // If the loop completes, it means we have successfully iterated through all
    // reachable indices up to (or beyond) the last index.
    return true; // This line is effectively reached if n = 1 or if maxReach covered the whole array
                 // before the loop finished, which is already handled by maxReach >= n - 1 check.
                 // For completeness, if the loop finishes, it means maxReach must have been sufficient.
};