/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val === undefined ? 0 : val)
 * this.left = (left === undefined ? null : left)
 * this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }

    // Check if the current node is a leaf
    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }

    // Recursively check the left and right subtrees
    // We subtract the current node's value from the target sum
    const newTargetSum = targetSum - root.val;
    const hasPathInLeft = hasPathSum(root.left, newTargetSum);
    const hasPathInRight = hasPathSum(root.right, newTargetSum);

    return hasPathInLeft || hasPathInRight;
};