/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val === undefined ? 0 : val);
 * this.left = (left === undefined ? null : left);
 * this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    const queue = [root];
    let depth = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Check if it's a leaf node
            if (!node.left && !node.right) {
                return depth;
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        depth++;
    }

    return depth; // Should not be reached if the tree is valid
};