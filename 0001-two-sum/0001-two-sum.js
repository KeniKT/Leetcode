/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Using a Map for key-value pairs

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, we found the two numbers
            return [numMap.get(complement), i];
        }

        // If the complement doesn't exist, add the current number and its index to the map
        numMap.set(currentNum, i);
    }

    // According to the problem constraints, there will always be exactly one solution,
    // so this line should ideally not be reached.
    return [];
};