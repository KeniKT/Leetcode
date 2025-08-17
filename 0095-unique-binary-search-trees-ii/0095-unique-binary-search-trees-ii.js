/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    const memo = new Map();

    const generate = (start, end) => {
        if (start > end) {
            return [null];
        }
        const key = `${start}-${end}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const result = [];
        for (let i = start; i <= end; i++) {
            const leftSubtrees = generate(start, i - 1);
            const rightSubtrees = generate(i + 1, end);

            for (const left of leftSubtrees) {
                for (const right of rightSubtrees) {
                    const root = new TreeNode(i, left, right);
                    result.push(root);
                }
            }
        }
        memo.set(key, result);
        return result;
    };

    return generate(1, n);
};