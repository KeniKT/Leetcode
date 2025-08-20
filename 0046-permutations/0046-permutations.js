/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const currentPermutation = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        // Base case: a full permutation has been formed
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]); // Push a copy of the permutation
            return;
        }

        // Recursive step: iterate through each number in nums
        for (let i = 0; i < nums.length; i++) {
            // Check if the number has already been used in the current permutation
            if (!used[i]) {
                // Make a choice: add the number to the current permutation
                currentPermutation.push(nums[i]);
                used[i] = true;

                // Recurse to find the next number
                backtrack();

                // Backtrack: undo the choice to explore other possibilities
                currentPermutation.pop();
                used[i] = false;
            }
        }
    }

    backtrack();
    return result;
};