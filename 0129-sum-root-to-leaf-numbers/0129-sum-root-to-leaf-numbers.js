/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    /**
     * Helper function to perform DFS and calculate the sum.
     * @param {TreeNode} node The current node in the traversal.
     * @param {number} currentSum The number formed so far along the path.
     * @return {number} The sum of all root-to-leaf numbers from this node.
     */
    const dfs = (node, currentSum) => {
        // Base case: if the node is null, we've reached a dead end.
        if (!node) {
            return 0;
        }

        // Form the new number by appending the current node's value.
        const newSum = currentSum * 10 + node.val;

        // If the current node is a leaf, it represents a complete number.
        if (!node.left && !node.right) {
            return newSum;
        }

        // If not a leaf, continue the traversal to children and sum their results.
        const leftSum = dfs(node.left, newSum);
        const rightSum = dfs(node.right, newSum);

        return leftSum + rightSum;
    };

    return dfs(root, 0);
};