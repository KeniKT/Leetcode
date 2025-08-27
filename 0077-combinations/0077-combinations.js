/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const currentCombination = [];

    /**
     * @param {number} start The starting number for the current selection.
     */
    const backtrack = (start) => {
        // Base case: if the combination has k elements, we found one.
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }

        // Recursive step: explore all possible numbers from 'start' to 'n'.
        for (let i = start; i <= n; i++) {
            // Choose: add the current number to the combination.
            currentCombination.push(i);

            // Recurse: call the function with the next number (i + 1).
            backtrack(i + 1);

            // Unchoose (Backtrack): remove the last number to explore other combinations.
            currentCombination.pop();
        }
    };

    backtrack(1);
    return result;
};