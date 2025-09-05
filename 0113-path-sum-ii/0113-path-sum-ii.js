/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    function dfs(node, path, sum) {
        if (!node) return;

        path.push(node.val);   // choose
        sum += node.val;

        // if leaf and sum == targetSum
        if (!node.left && !node.right && sum === targetSum) {
            result.push([...path]);  // push a copy
        }

        // explore children
        dfs(node.left, path, sum);
        dfs(node.right, path, sum);

        path.pop();  // backtrack
    }

    dfs(root, [], 0);
    return result;
};
