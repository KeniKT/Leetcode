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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    /**
     * Performs a Depth First Search (DFS) to find all root-to-leaf paths 
     * that sum up to targetSum.
     * * @param {TreeNode} node - The current node in the tree.
     * @param {number[]} path - The current path of node values from the root to the current node.
     * @param {number} currentSum - The sum of node values in the current path.
     */
    function dfs(node, path, currentSum) {
        // Base case: If the node is null, stop.
        if (!node) {
            return;
        }

        // 1. Choose (Include the current node's value in the path and update the sum)
        path.push(node.val);
        currentSum += node.val;

        // 2. Check (If it's a leaf node and the sum equals targetSum)
        if (!node.left && !node.right) { // Check if it's a leaf node
            if (currentSum === targetSum) {
                // Found a valid path. We must push a copy of the 'path' array 
                // because 'path' will be modified later due to backtracking.
                result.push([...path]); 
            }
        } else {
            // 3. Explore (Recursively call for children)
            dfs(node.left, path, currentSum);
            dfs(node.right, path, currentSum);
        }

        // 4. Backtrack (Remove the current node's value from the path 
        //    before returning to the parent, allowing other branches to be explored)
        path.pop();
        // NOTE: We don't need to explicitly subtract node.val from currentSum 
        // if we pass the sum by value (as done here in JavaScript for primitives).
        // If 'currentSum' was an array or object, we'd need to explicitly undo the change.
    }

    // Start the DFS from the root with an empty path and initial sum of 0
    dfs(root, [], 0);

    return result;
};