var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // sort to handle duplicates
    let results = [];

    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            results.push([...path]);
            return;
        }
        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            // skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);
            backtrack(i + 1, remaining - candidates[i], path);
            path.pop(); // undo choice
        }
    }

    backtrack(0, target, []);
    return results;
};
