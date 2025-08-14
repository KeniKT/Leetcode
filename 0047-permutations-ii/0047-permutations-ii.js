/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const currentPermutation = [];
    const used = new Array(nums.length).fill(false);

    // Sorting is crucial for the duplicate check to work
    nums.sort((a, b) => a - b);

    function backtrack() {
        // Base case: a full permutation has been formed
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip if the element is already used in the current permutation
            if (used[i]) {
                continue;
            }

            // The key condition to handle duplicates:
            // If the current number is the same as the previous one,
            // AND the previous one was not just used (meaning it's from a different branch),
            // skip to avoid duplicate permutations.
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }

            // Choose
            used[i] = true;
            currentPermutation.push(nums[i]);

            // Explore
            backtrack();

            // Un-choose (backtrack)
            currentPermutation.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
};