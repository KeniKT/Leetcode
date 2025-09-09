/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates

    const backtrack = (start, currentSubset) => {
        // Add the current subset to the result
        result.push([...currentSubset]);

        // Iterate through the remaining elements
        for (let i = start; i < nums.length; i++) {
            // Skip duplicates to avoid duplicate subsets
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            // Include the current element
            currentSubset.push(nums[i]);
            // Recurse with the next index
            backtrack(i + 1, currentSubset);
            // Backtrack (remove the element)
            currentSubset.pop();
        }
    };

    backtrack(0, []);
    return result;
};