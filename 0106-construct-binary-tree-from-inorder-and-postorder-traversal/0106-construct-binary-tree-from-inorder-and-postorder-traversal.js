/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder || inorder.length === 0 || !postorder || postorder.length === 0) {
        return null;
    }

    // Build a map for O(1) lookup of inorder indices
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postorderIndex = postorder.length - 1;

    const build = (inStart, inEnd) => {
        // Base case: if the range is invalid, return null
        if (inStart > inEnd) {
            return null;
        }

        // The root is the last element of the current postorder subarray
        const rootVal = postorder[postorderIndex];
        const root = new TreeNode(rootVal);
        postorderIndex--;

        // Find the root's index in the inorder array
        const rootInorderIndex = inorderMap.get(rootVal);

        // Recursively build the right subtree
        // The right subtree is built first because we are iterating postorder from right to left
        root.right = build(rootInorderIndex + 1, inEnd);

        // Recursively build the left subtree
        root.left = build(inStart, rootInorderIndex - 1);

        return root;
    };

    return build(0, inorder.length - 1);
};