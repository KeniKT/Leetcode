/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const currentSubset = [];

    function backtrack(start) {
        // Add the current combination to the result
        result.push([...currentSubset]);

        // Explore adding new elements
        for (let i = start; i < nums.length; i++) {
            // Include nums[i] in the current subset
            currentSubset.push(nums[i]);

            // Recursively call with the next element
            backtrack(i + 1);

            // Backtrack: remove the last added element to explore other combinations
            currentSubset.pop();
        }
    }

    backtrack(0);
    return result;
};