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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }

    let current = root;
    while (current) {
        if (current.left) {
            // Find the rightmost node of the left subtree
            let rightmost = current.left;
            while (rightmost.right) {
                rightmost = rightmost.right;
            }

            // Connect the rightmost node's right to the current node's right
            rightmost.right = current.right;

            // Move the left subtree to the right
            current.right = current.left;

            // Disconnect the left child
            current.left = null;
        }

        // Move to the next node in the flattened list
        current = current.right;
    }
};