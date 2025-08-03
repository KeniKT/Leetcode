/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const n = nums.length;

    // Handle edge cases where the array is too small
    if (n < 4) {
        return result;
    }

    // Sort the array to efficiently use the two-pointer approach and handle duplicates
    nums.sort((a, b) => a - b);

    // Iterate through the array to fix the first number
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Iterate to fix the second number
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = n - 1;
            const newTarget = target - nums[i] - nums[j];

            // Use two pointers to find the remaining two numbers
            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === newTarget) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    
                    // Skip duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    
                    // Move pointers to find the next unique pair
                    left++;
                    right--;
                } else if (sum < newTarget) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};