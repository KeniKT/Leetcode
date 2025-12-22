/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1. Initialize a Map (using a JavaScript Map or plain object for hash map functionality)
    const numMap = new Map();

    // 2. Iterate
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        
        // 3. Calculate Complement
        const complement = target - currentNum;

        // 4. Check Map
        // If the complement is in the map, we found the pair.
        if (numMap.has(complement)) {
            // Return the stored index of the complement and the current index i.
            return [numMap.get(complement), i];
        }

        // If not found, add the current number and its index to the map for future checks.
        numMap.set(currentNum, i);
    }
    
    // The problem guarantees a solution, but this is a fallback.
    return []; 
};