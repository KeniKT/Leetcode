/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remaining, current_combination, start_index) => {
        // Base case 1: We found a valid combination
        if (remaining === 0) {
            result.push([...current_combination]);
            return;
        }

        // Base case 2: The sum has exceeded the target
        if (remaining < 0) {
            return;
        }

        // Recursive step
        for (let i = start_index; i < candidates.length; i++) {
            const candidate = candidates[i];
            
            // Choose the current candidate
            current_combination.push(candidate);
            
            // Recurse with the updated remaining target and the same start_index
            // to allow for repeated numbers
            backtrack(remaining - candidate, current_combination, i);
            
            // Backtrack: remove the current candidate to explore other paths
            current_combination.pop();
        }
    };

    backtrack(target, [], 0);
    return result;
};