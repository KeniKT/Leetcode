/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    const n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize with the sum of the first three elements

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === target) {
                return target; // Found the exact target sum
            }

            // Update closestSum if the current sum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }

    return closestSum;
};