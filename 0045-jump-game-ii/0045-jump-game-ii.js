/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    if (n === 1) {
        return 0; // If there's only one element, no jumps are needed
    }

    let jumps = 0;
    let currentJumpEnd = 0; // The furthest index reachable with the current number of jumps
    let farthestReach = 0; // The maximum index reachable from any point within the current jump's range

    // Iterate up to (but not including) the last element
    for (let i = 0; i < n - 1; i++) {
        // Update the farthest index we can reach from current position i
        farthestReach = Math.max(farthestReach, i + nums[i]);

        // If we've reached the end of the current jump's range
        if (i === currentJumpEnd) {
            jumps++; // Increment jump count
            currentJumpEnd = farthestReach; // Set the new end of our jump to the farthest we could reach

            // Optimization: If we can already reach or surpass the last index, we can stop
            if (currentJumpEnd >= n - 1) {
                break;
            }
        }
    }

    return jumps;
};