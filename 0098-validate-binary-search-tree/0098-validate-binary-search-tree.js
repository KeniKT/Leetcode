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
 * @return {boolean}
 */
var isValidBST = function(root) {
    /**
     * Helper function to perform a recursive check with a min and max boundary.
     * @param {TreeNode} node The current node to validate.
     * @param {number|null} min The lower bound for the current node's value.
     * @param {number|null} max The upper bound for the current node's value.
     * @return {boolean} True if the subtree is a valid BST, false otherwise.
     */
    function isValidBSTHelper(node, min, max) {
        // Base case: An empty tree is a valid BST.
        if (!node) {
            return true;
        }

        // Check if the current node's value violates the min or max constraints.
        // If min is not null, the node's value must be strictly greater than min.
        // If max is not null, the node's value must be strictly less than max.
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // Recursively validate the left and right subtrees.
        // For the left subtree, the new upper bound is the current node's value.
        // For the right subtree, the new lower bound is the current node's value.
        const isLeftValid = isValidBSTHelper(node.left, min, node.val);
        const isRightValid = isValidBSTHelper(node.right, node.val, max);

        // The entire subtree is valid only if both left and right subtrees are valid.
        return isLeftValid && isRightValid;
    }

    // Start the validation process from the root with no initial bounds.
    return isValidBSTHelper(root, null, null);
};